<template>
    <div>
        <h1>Todo list:</h1>
        <!-- <li data-todo="todo"></li> -->
        <!-- <li data-todo="todo">Vue component crach course.</li> -->
        <li v-for="todo in todos" :key="todo.id" data-todo="todo">{{ todo.title }}</li>

        <form data-todo="form" @submit.prevent="addNewTodo">
            <input data-todo="new-todo" v-model="newTodo"/>
        </form>

    </div>
</template>

<script>
export default {
    name: "TodoApp",
    data() {
        return {
            todos: [
                {
                    id: 1,
                    title: "Vue component crach course.",
                    completed: true
                },
                {
                    id: 2,
                    title: "Test All compamnies component.",
                    completed: false
                }
            ],
            newTodo: '' 
        }
    },
    methods: {
        addNewTodo(){
            this.todos.push({
                id: 3,
                title: this.newTodo,
                completed: false
            })
            this.newTodo = ''
        },
        chnageTaskStatus(id){
            const todo = this.todos.filter(todo => todo.id == id)
            todo.
        }
    }
}
</script>