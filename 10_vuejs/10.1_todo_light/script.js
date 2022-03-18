Vue.component('todo-item', {
    props: ['todo'],
    template: `<li @click="$emit('pasteque')">{{ todo.text }}</li>`
})

const app = new Vue({
    el: '#app',
    data: {
        placeholder: "Type here",
        text: "",
        todos: [
            { id: 0, text: 'Eat', done: false },
            { id: 1, text: 'Sleep', done: false },
            { id: 2, text: 'Rave', done: false },
            { id: 3, text: 'Repeat', done: false }
        ]
    },
    methods: {
        addTodos() {
            if (this.text.length) {
                const lastToDoId = this.todos[this.todos.length - 1]?.id
                const id = (lastToDoId !== undefined) ? lastToDoId + 1 : 0
                this.todos.push({ id: id, text: this.text, done: false })
                this.text = "";
            }
        },
        clearDones() {
            this.todos = this.toBeComplete;
        }
    },
    computed: {
        completed() {
            return this.todos.filter(t => t.done === true)
        },
        toBeComplete() {
            return this.todos.filter(t => t.done === false)
        },
    }
})