export class Manager {
	constructor (options) {
		this.isObservableSymbol = Symbol("isObservable");
		this.observables = new WeakMap();
		this.cache = new WeakMap();
		this.options = {immediateAutorun: false};
		this.callStack = [];
		this.autorun = [];
		this.setOptions(options);
	}
	setOptions (options = {}) {
		this.options = Object.assign(this.options, options);
	}
	makeObservable (dataSource) {
		if (!dataSource) {
			return dataSource;
		}
		if (this.isObservable(dataSource)) {
			return dataSource;
		}
		let observable = this.observables.get(dataSource);
		if (!observable) {
			const toUpdate = new Map();
			observable = new Proxy(dataSource, {
				get: (obj, key) => {
					if (key === this.isObservableSymbol) {
						return true;
					}
					console.log("callStack", this.callStack.length, obj, key);
					if (this.callStack.length) {
						const callStack = [...this.callStack];
						const context = callStack[callStack.length - 1];

						let callStacks = toUpdate.get(key);
						if (!callStacks) {
							callStacks = new Map();
							toUpdate.set(key, callStacks);
							callStacks.set(context.call, callStack);
						}
						if (!callStacks.has(context.call)) {
							callStacks.set(context.call, callStack);
						}
					}

					const val = obj[key];
					if (val === Object(val) && typeof val !== "function") {
						return this.makeObservable(val);
					}
					return val;
				},
				set: (obj, key, val, receiver) => {
					if (this.callStack && this.callStack.length) {
						throw new Error("Changing observable objects is restricted inside computed properties and autorun functions!");
					}


					if (val !== obj[key] || (Array.isArray(obj) && key === "length")) {
						obj[key] = val;
						const callStacks = toUpdate.get(key);

						if (callStacks) {
							callStacks.forEach((callStack) => {
								callStack.reverse().some(({obj, call}) => {
									const record = this.cache.get(obj).get(call);
									if (!record || !record.valid) {
										return true;
									}
									else {
										record.valid = false;
									}
								});
							});
						}

						toUpdate.delete(key);
						if (!this.inRunSection) {
							if (this.options.immediateAutorun) {
								this.run();
							}
							else {
								this.runDeferred();
							}
						}
					}
					return true;
				}
			});
			this.observables.set(dataSource, observable);
		}
		return observable;
	}
	makeUpdatable (obj, call) {
		const manager = this;
		return function () {
			let cacheByObject = manager.cache.get(obj);
			let record;
			if (cacheByObject) {
				record = cacheByObject.get(call);
			}
			else {
				cacheByObject = new Map();
				manager.cache.set(obj, cacheByObject);
			}

			if (!record) {
				record = {valid: false, value: undefined};
				cacheByObject.set(call, record);
			}
			if (record.computing) {
				console.warn("Detected cross reference inside computed properties! undefined will be returned to prevent infinite loop");
				return undefined;
			}

			if (record.valid) {
				return record.value;
			}
			record.computing = true;
			manager.callStack.push({obj, call});
			try {
				let context;
				if (this) {
					context = manager.observables.get(this);
				}
				else {
					context = manager;
				}

				const value = call.call(context, context);
				record.valid = true;
				record.value = value;
				return value;
			}
			finally {
				record.computing = false;
				manager.callStack.pop();
			}
		};
	}
	makeComputed (obj, key, call) {
		Object.defineProperty(obj, key, {
			enumerable: true,
			get: this.makeUpdatable(obj, call, obj)
		});
		return obj;
	}
	makeAutorun (call, run = true) {
		const manager = this;
		const updatable = this.makeUpdatable(this, call);
		manager.autorun.push(updatable);
		if (run) {
			if (this.options.immediateAutorun) {
				manager.run();
			}
			else {
				manager.runDeferred();
			}
		}
		return {
			unregister () {
				const idx = manager.autorun.indexOf(updatable);
				if (idx >= 0) {
					manager.autorun.splice(idx, 1);
				}
			},
			autorun: updatable
		};
	}
	isObservable (obj) {
		return obj[this.isObservableSymbol] === true;
	}
	run (action) {
		this.inRunSection = true;
		try {
			if (typeof action === "function") {
				action();
			}
			this.runScheduled = false;
			this.autorun.forEach(updatable => updatable());
			typeof this.onAfterRun === "function" && this.onAfterRun();
		}
		finally {
			this.inRunSection = false;
		}
	}
	runDeferred (action) {
		this.inRunSection = true;
		try {
			if (!this.runScheduled) {
				this.runScheduled = setTimeout(() => this.run());
			}
			if (typeof action === "function") {
				action();
			}
		}
		finally {
			this.inRunSection = false;
		}
	}
}

Manager.default = new Manager();
Manager.default.Manager = Manager;

export default Manager.default;
