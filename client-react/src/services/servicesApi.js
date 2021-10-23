import Api from './Api'

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    async getEmployees() {
        try {
            const response = await Api().get('/employees')
            return response.data
        } catch (error) {
            return console.log(error);
        }
    },

    async createNewEmployee(employee) {
        try {
            const response = await Api().post('/employees', employee)
            return response.data
        } catch (error) {
            return console.log(error);
        }
    },

    async deleteEmployee(id) {
        try {
            const resposne = await Api.delete(`/employees/${id}`)
            return resposne.data
        } catch (error) {
            return console.log(error);
        }
    }

}
