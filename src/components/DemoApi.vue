<template>
    <div>
        <h1>Axios Demo</h1>
        <table>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                </tr>

                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            users: []
        }
    },
    created() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.users = response.data;
            })
            .catch(error => {
                console.error(error);
            });
    }
}
</script>

<style>
table,
th,
td {
    border: 1px solid black;
}

td {
    padding: 0px 10px 0px 10px;
}
</style>