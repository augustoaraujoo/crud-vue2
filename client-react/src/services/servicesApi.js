import Api from './Api'

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    async createNewEmployee(employee) {
        try {
            const response = await Api().post('/employees', employee)
            return response.data
        } catch (error) {
            return console.log(error);
        }
    }

}
