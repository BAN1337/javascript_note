import Api from './api'

const UsersService = {
    register: (params) => Api.post('/users/register', params),
    login: async (params) => {
        const response = await Api.post('/users/login', params)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('name', response.data.user.name)
        localStorage.setItem('email', response.data.user.email)
    },
    logout: () => {
        localStorage.removeItem('user', null)
        localStorage.removeItem('token', null)
        localStorage.removeItem('name', null)
        localStorage.removeItem('email', null)
    },
    delete: async (id) => {
        await Api.delete(`/users/edit/${id}`, {
            headers: { 'x-access-token': localStorage.getItem('token') }
        })
        localStorage.removeItem('user', null)
        localStorage.removeItem('token', null)
        localStorage.removeItem('name', null)
        localStorage.removeItem('email', null)
    },
    editName: async (id, params) => {
        await Api.put(`/users/edit/name/${id}`, params, {
            headers: { 'x-access-token': localStorage.getItem('token') }
        })
        localStorage.setItem('name', params.newName)
    },
    editEmail: async (id, params) => {
        await Api.put(`/users/edit/email/${id}`, params, {
            headers: { 'x-access-token': localStorage.getItem('token') }
        })
        localStorage.removeItem('user', null)
        localStorage.removeItem('token', null)
        localStorage.removeItem('name', null)
        localStorage.removeItem('email', null)
    },
    editPassword: async (id, params) => {
        await Api.put(`/users/edit/password/${id}`, params, {
            headers: { 'x-access-token': localStorage.getItem('token') }
        })
        localStorage.removeItem('user', null)
        localStorage.removeItem('token', null)
        localStorage.removeItem('name', null)
        localStorage.removeItem('email', null)
    }
}

export default UsersService