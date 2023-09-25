import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useAuthStore } from '@/entities/auth'

const Login = () => {
  const { t } = useTranslation()
  const { form, onChange, login } = useAuthStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    login()
  }
  return (
    <>
      <Head>
        <title>{t('login.title')}</title>
      </Head>
      <div className="w-full h-[100vh] bg-white">
        <div className="flex min-h-full flex-col justify-center px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-20 w-auto" src="/assets/logo.png" alt="Your Company"/>
            <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{t('login.title')}</h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">{t('login.email')}</label>
                <div className="mt-2">
                  <input 
                    id="email" 
                    name="email" 
                    type="email"
                    value={form.email}
                    autoComplete="email" 
                    required 
                    onChange={onChange}
                    className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">{t('login.password')}</label>
                  {/* <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                  </div> */}
                </div>
                <div className="mt-2">
                  <input 
                    id="password" 
                    name="password" 
                    type="password" 
                    value={form.password}
                    autoComplete="current-password" 
                    required 
                    onChange={onChange}
                    className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {t('login.enter')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  const { locale } = context
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default Login
