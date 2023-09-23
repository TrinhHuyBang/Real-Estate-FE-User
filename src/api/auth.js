import axios from 'axios';
export default {
    login(data, completion, error) {
        axios
            .post("http://127.0.0.1:8000/api/login", data)
            .then((response) => {
                completion(response.data)
            })
            .catch((err) => {
                if (error) {
                    error(err.response)
                }
            })
    },
    // disconnect(name, completion, error) {
    //     axios
    //         .post(`${root_uri}/disconnect`, {
    //             name: name,
    //         })
    //         .then((response) => {
    //             completion(response.data)
    //         })
    //         .catch((err) => {
    //             if (error) {
    //                 error(err.response)
    //             }
    //         })
    // },
}
