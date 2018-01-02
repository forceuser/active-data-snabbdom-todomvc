import {reaction} from "active-data";
import {patch} from "./vdom";

export default class View { // Basic class
	constructor (options = {}) {
		this.options = options;
		this.model = options.model;
		this.init();
		const domNode = options.domNode || document.createElement("div");
		this.reactionCtrl = reaction(() => {
			if (typeof options.onChange === "function") {
				options.onChange();
			}
			this.vnode = patch(this.vnode || domNode, this.render(this.model));
		}, false);
		this.reactionCtrl.reaction();
	}
	init () {

	}
	render () {
		// abstract render
	}
	destroy () {
		this.reactionCtrl.unregister();
	}
}
