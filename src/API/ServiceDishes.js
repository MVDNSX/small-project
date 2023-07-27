import axios from 'axios'

export default class ServiceDishes{
  static async getAll(){
    try {
      const response = await axios.get(`https://6420700f25cb657210497359.mockapi.io/api/dishes`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
}