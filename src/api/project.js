import axios from './index';
const root_uri = '/project'
export default {
    listProject(page, query, completion, error) {
        axios
            .get(`${root_uri}/?page=${page}`, {
                params: query
            })
            .then((response) => {
                completion(response.data)
            })
            .catch((err) => {
                if (error) {
                    error(err)
                }
            })
    },

    create(data, completion, error) {
        axios
            .post(`${root_uri}/create`, data)
            .then((response) => {
                completion(response.data)
            })
            .catch((err) => {
                if (error) {
                    error(err)
                }
            })
    },

    detail(id,completion, error) {
        axios
            .get(`${root_uri}/detail/${id}`)
            .then((response) => {
                completion(response.data)
            })
            .catch((err) => {
                if (error) {
                    error(err)
                }
            })
    },

    listOwnerProject(page, query, completion, error) {
        axios
            .get(`${root_uri}/list-owner/?page=${page}`, {
                params: query
            })
            .then((response) => {
                completion(response.data)
            })
            .catch((err) => {
                if (error) {
                    error(err)
                }
            })
    },

    listProjectOptions(query, completion, error) {
        axios
            .get(`${root_uri}/list-project-options`, {
                params: query
            })
            .then((response) => {
                completion(response.data)
            })
            .catch((err) => {
                if (error) {
                    error(err)
                }
            })
    },
}