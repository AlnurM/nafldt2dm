import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Header } from '@/widgets/header'
import { withAuth } from '@/entities/auth'

const Doctors = () => {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{t('doctors.title')}</title>
      </Head>
      <Header />
      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">{t('doctors.title')}</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>
    </>
  )
}

export const getServerSideProps = withAuth(async (context) => {
  const { locale } = context
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
})

export default Doctors
