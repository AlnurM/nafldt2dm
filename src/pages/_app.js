import { appWithTranslation } from 'next-i18next';
import '@/shared//styles/globals.css'

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default appWithTranslation(App)