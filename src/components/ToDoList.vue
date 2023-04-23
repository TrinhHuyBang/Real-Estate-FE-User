
<template>
    <div id="todo">
        <button v-b-modal.add-modal>Add New Task</button>
        <b-modal id="add-modal" title="Add task" @ok="addTask">
            <input type="text" placeholder="Enter your task" v-model="newTask">
        </b-modal>
        <h1>Todo List</h1>
        <ul>
            <li v-for="(task, index) in tasks" :key="index">
                <input type="checkbox" v-model="task.done">
                <span :class="{ done: task.done }" v-b-modal="'detail-modal-' + index">{{ task.content }}</span>
                <b-modal :id="'detail-modal-' + index" title="Update" v-on:show="editTask(task.content, index)"
                    @ok="updateTask(uptask)">
                    <input type="text" placeholder="Enter your task" v-model="uptask.content">
                </b-modal>

                <button v-b-modal="'delete-modal-' + index" style="margin-left: 10px;">Delete</button>
                <b-modal :id="'delete-modal-' + index" title="Xoa" @ok="deleteTask(task.content)">
                    <h3> Xac nhan xoa {{ task.content }}</h3>
                </b-modal>
            </li>
        </ul>

    </div>
</template>
  
<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['tasks'])
    },
    data() {
        return {
            newTask: '',
            uptask: {
                content: '',
                index: -1,
            },
        }
    },
    methods: {
        ...mapActions(['commitAddTask', 'commitDeleteTask', 'commitUpdateTask']),
        addTask() {
            this.commitAddTask(this.newTask)
            this.newTask = ''
        },
        editTask(newtask, index) {
            this.uptask.content = newtask
            this.uptask.index = index
        },

        deleteTask(deTask) {
            this.commitDeleteTask(deTask)
        },

        updateTask(upTask) {
            this.commitUpdateTask(upTask)
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
  