import config from '@/config'

import axios from 'axios'

const url = `${config.api.host}:${config.api.port}/api/auth`

class AuthController {
  async authenticateUser(login: string, password: string) {
    console.log('socorro')
    const response = await axios.post(url, {
      login,
      password,
    })
    return response
  }
}

export default AuthController
