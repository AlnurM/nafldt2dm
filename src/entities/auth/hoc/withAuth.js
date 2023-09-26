import jwtDecode from 'jwt-decode'
import { getUser } from '../requests'

const withAuth = gssp => {
  return async context => {
    try {
      const { req, res } = context
      const access_token = req.cookies?.access_token
      const role = req.cookies?.role
      const decoded = jwtDecode(access_token || '')
      const { user_id } = decoded
      if (!role) {
        const user = await getUser(user_id)
        res.setHeader(
          'Set-Cookie',
          `role=${encodeURIComponent(user.role)}; Max-Age=3600; Path=/;`
        );
      }
      if (!user_id) {
        return {
          redirect: {
            destination: '/login',
            status: 302
          }
        }
      }
      return await gssp({...context, user_id, role})
    } catch (e) {
      console.log(e.message)
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
