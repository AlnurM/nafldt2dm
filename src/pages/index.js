import { withAuth } from "@/entities/auth"

const Home = () => {
  return (
    <>
    </>
  )
}

export const getServerSideProps = withAuth(async (context) => {
  return {
    props: {}
  }
})

export default Home
