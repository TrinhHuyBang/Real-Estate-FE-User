<template>
    <div id="todo">
        <h1>Enter ToDo</h1>
        <input type="text" placeholder="Enter your task" v-model="newTask">
        <button @click="addTask">Add</button>
        <h1>Todo List</h1>
        <ul>
            <li v-for="task in tasks" :key="task.content">
                <input type="checkbox" v-model="task.done">
                <router-link :to="{ name: 'taskDetail', params: { name: task.content } }" style="text-decoration: none;">
                    <span :class="{ done: task.done }">{{ task.content }}</span>
                </router-link>
                <button @click="deleteTask(task.content)" style="margin-left: 10px;">Delete</button>
            </li>
        </ul>
    </div>
</template>
  
<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState(['tasks'])
    },
    data() {
        return {
            newTask: '',
        }
    },
    methods: {
        ...mapActions(['commitAddTask', 'commitDeleteTask']),
        addTask() {
            this.commitAddTask(this.newTask)
            this.newTaskName = ''
        },

        deleteTask(deTask) {
            this.commitDeleteTask(deTask)
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
    margin-top: 10px;
    list-style: none;
}

.done {
    text-decoration: line-through;
}
</style>
  