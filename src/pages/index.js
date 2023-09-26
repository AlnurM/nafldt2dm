import { withAuth } from '@/entities/auth'

const Home = () => {
  return (
    <>
    </>
  )
}

export const getServerSideProps = withAuth(async (context) => {
  return {
    redirect: {
      destination: '/login',
      status: 302
    }
  }
})

export default Home
