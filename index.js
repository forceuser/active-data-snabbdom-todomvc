import ad from "active-data";
import {h, thunk, init as snabbdomInit} from "snabbdom";
import snabbdomClasses from "snabbdom/modules/class";
import snabbdomAttrs from "snabbdom/modules/attributes";
import snabbdomProps from "snabbdom/modules/props";
import snabbdomStyles from "snabbdom/modules/style";
import snabbdomEventListeners from "snabbdom/modules/eventlisteners";

const patch = snabbdomInit([
	snabbdomClasses,
	snabbdomAttrs,
	snabbdomProps,
	snabbdomStyles,
	snabbdomEventListeners,
]);


const data = ad.makeObservable({
	genId () {
		this.id = this.id ? this.id + 1 : 1;
		return this.id;
	},
	filter: "all",
	tasks: []
});

// console.log("tasks", data.tasks);

ad.makeComputed(data, "filtered", self => {
	switch (self.filter) {
		case "completed": return self.tasks.filter(task => task.done);
		case "active": return self.tasks.filter(task => !task.done);
	}
	return self.tasks;
});

ad.makeComputed(data, "remaining", self => {
	return self.tasks.reduce((res, task) => task.done ? res : res + 1, 0);
});

ad.makeComputed(data, "completed", self => {
	return self.tasks.reduce((res, task) => task.done ? res + 1 : res, 0);
});

class View {
	constructor (options = {}) {
		this.options = options;
		this.dataManager = ad;
		this.model = options.model;
		this.init();
		const domNode = options.domNode || document.createElement("div");
		const {autorun, unregister} = ad.makeAutorun(() => {
			this.vnode = patch(this.vnode || domNode, this.render(this.model));
		}, false);
		this.unregister = unregister;
		autorun();
	}
	init () {

	}
	render () {
		// abstract render
	}
}

function Cache () {
	const _ = {};

	return {
		get (key, call) {
			if (_[key]) {
				return _[key];
			}
			return _[key] = call();
		},
		remove (key) {
			delete _[key];
		}
	};
}

window.addEventListener("hashchange", () => {
	data.filter = window.location.hash.substr(2) || "all";
});

class TodoListView extends View {
	addItem (title) {
		this.model.tasks.push({
			id: this.model.genId(),
			title,
			done: false,
			editing: false,
			editingValue: ""
		});
	}
	init () {
		this.tasksCache = new Cache();
	}
	removeItem (id) {
		const idx = this.model.tasks.findIndex(task => task.id === id);
		if (idx >= 0) {
			this.model.tasks.splice(idx, 1);
		}
	}
	toggleAll (done) {
		this.model.tasks.forEach(task => task.done = done);
	}
	clearCompleted () {
		this.model.tasks = this.model.tasks.filter(task => !task.done);
	}
	render (model) {
		console.log("TodoListView render");
		return h("section.todoapp", {
			hook: {
				destroy: () => this.unregister()
			},
		}, [
			h("header.header", [
				h("h1", "todos"),
				h("input#new-todo.new-todo", {
					props: {placeholder: "What needs to be done?", value: model.editingTitle},
					on: {keydown: event => {
						if (event.keyCode === 13) {
							this.addItem(event.currentTarget.value);
							event.currentTarget.value = "";
						}
					}}
				}),
			]),
			h("section.main", {
				style: {display: model.tasks.length ? "block" : "none"}
			}, [
				h("input.toggle-all", {
					attrs: {id: "toggle-all"},
					props: {type: "checkbox", checked: model.remaining === 0},
					on: {
						click: event => {
							this.toggleAll(event.currentTarget.checked);
						}
					}
				}),
				h("label", {
					attrs: {for: "toggle-all"}
				}),
				h("ul.todo-list", {},
					model.filtered.map(task =>
						this.tasksCache.get(task.id, () => (new TodoListItemView({
							model: task, key: task.id, onRemove: id => this.removeItem(id), onDestroy: () => this.tasksCache.remove(task.id)
						})).vnode)
					)
				),
			]),
			h("footer.footer", {
				style: {display: model.tasks.length ? "block" : "none"}
			}, [
				h("span.todo-count", [h("strong", model.remaining), ` item${model.remaining === 1 ? "" : "s"} left`]),
				h("ul.filters", [
					h("li", [h("a", {class: {selected: model.filter === "all"}, props: {href: "#/"}}, "All")]),
					h("li", [h("a", {class: {selected: model.filter === "active"}, props: {href: "#/active"}}, "Active")]),
					h("li", [h("a", {class: {selected: model.filter === "completed"}, props: {href: "#/completed"}}, "Completed")]),
				]),
				h("button.clear-completed", {
					style: {display: model.completed > 0 ? "" : "none"},
					on: {click: () => this.clearCompleted()}
				}, "Clear completed"),
			])
		]);
	}
}

class TodoListItemView extends View {
	toggle (done) {
		this.model.done = done;
	}
	startEdit () {
		this.model.editing = true;
		this.model.editingValue = this.model.title;
	}
	cancelEdit () {
		this.model.editing = false;
		this.model.editingValue = "";
	}
	submitEdit (title) {
		this.model.title = title;
		this.model.editing = false;
		this.model.editingValue = "";
	}
	render (model) {
		console.log("TodoListItemView render");
		return h("li", {
			class: {
				completed: !!model.done && !model.editing,
				editing: model.editing
			},
			hook: {
				destroy: () => {
					this.unregister();
					if (typeof this.options.onDestroy === "function") {
						this.options.onDestroy();
					}
				}
			},
			key: this.options.key,
		}, [
			h("div.view", [
				h("input.toggle", {
					props: {
						checked: !!model.done,
						type: "checkbox"
					},
					on: {
						click: event => this.toggle(event.currentTarget.checked)
					},
				}),

				h("label", {
					on: {
						dblclick: () => this.startEdit()
					}
				}, model.title),

				h("button.destroy", {
					on: {
						click: () => this.options.onRemove(model.id)
					}
				})

			]),

			h("input.edit", {
				props: {value: model.title},
				on: {
					blur: () => this.cancelEdit(),
					keydown: event => {
						if (event.keyCode === 13) {
							this.submitEdit(event.currentTarget.value);
							event.currentTarget.value = "";
						}
					},
				}
			})
		]);
	}
}

new TodoListView({domNode: document.querySelector(".todoapp"), model: data});
