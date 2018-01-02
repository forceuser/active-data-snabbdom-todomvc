import keycode from "keycode-js";
import {h} from "./vdom";
import View from "./view";

export default class TodoListItemView extends View {
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
					this.destroy();
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
						if (event.keyCode === keycode.KEY_RETURN) {
							this.submitEdit(event.currentTarget.value);
							event.currentTarget.value = "";
						}
					},
				}
			})
		]);
	}
}
