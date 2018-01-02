import {observable} from "active-data";
import TodoListView from "./todo-list-view";

const data = observable({
	genId () {
		return this.tasks.reduce((max, i) => Math.max(max, i.id), 0) + 1;
	},
	filter: "all",
	tasks: localStorage.tasks ? JSON.parse(localStorage.tasks) : [],
	get filtered () {
		switch (this.filter) {
			case "completed": return this.tasks.filter(task => task.done);
			case "active": return this.tasks.filter(task => !task.done);
		}
		return this.tasks;
	},
	get remaining () {
		return this.tasks.reduce((res, task) => task.done ? res : res + 1, 0);
	},
	get completed () {
		return this.tasks.reduce((res, task) => task.done ? res + 1 : res, 0);
	}
});

window.addEventListener("hashchange", () => {
	data.filter = window.location.hash.substr(2) || "all";
});

new TodoListView({domNode: document.querySelector(".todoapp"), model: data});
