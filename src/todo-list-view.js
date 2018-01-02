import keycode from "keycode-js";
import {h} from "./vdom";
import View from "./view";
import TodoListItemView from "./todo-list-item-view";

export default class TodoListView extends View {
	addItem (title) {
		this.model.tasks.push({
			id: this.model.genId(),
			title,
			done: false,
			editing: false,
			editingValue: ""
		});
	}
	updateStorage () {
		this._updateStorageTimeout && clearTimeout(this._updateStorageTimeout);
		this._updateStorageTimeout = setTimeout(() => localStorage.tasks = JSON.stringify(this.model.tasks));
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
		this.updateStorage();
		console.log("TodoListView render");
		return h("section.todoapp", {
			hook: {
				destroy: () => this.destroy()
			},
		}, [
			h("header.header", [
				h("h1", "todos"),
				h("input#new-todo.new-todo", {
					props: {placeholder: "What needs to be done?", value: model.editingTitle},
					on: {keydown: event => {
						if (event.keyCode === keycode.KEY_RETURN) {
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
							model: task,
							key: task.id,
							onChange: () => this.updateStorage(),
							onRemove: id => this.removeItem(id),
							onDestroy: () => this.tasksCache.remove(task.id)
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
