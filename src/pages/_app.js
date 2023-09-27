import dynamic from 'next/dynamic';
import { appWithTranslation } from 'next-i18next';
import '@/shared//styles/globals.css'

const Header = dynamic(() => import('@/widgets/header').then(mod => mod.Header), {
  ssr: false,
})

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(App)