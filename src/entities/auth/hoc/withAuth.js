import jwtDecode from 'jwt-decode'

const withAuth = gssp => {
  return async context => {
    try {
      const { req } = context
      const access_token = req.cookies.access_token
      const decoded = jwtDecode(access_token || '')
      const { user_id } = decoded
      if (!user_id) {
        return {
          redirect: {
            destination: '/login',
            status: 302
          }
        }
      }
      return await gssp(context)
    } catch (e) {
      return {
        redirect: {
          destination: '/login',
          status: 302
        }
      }
    }
  }
}

export default withAuth
