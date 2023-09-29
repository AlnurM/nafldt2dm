import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { withAuth } from '@/entities/auth'

const Statistics = () => {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{t('statistics.title')}</title>
      </Head>
    </>
  )
}

export const getServerSideProps = withAuth(async (context) => {
  const { locale } = context
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    },
  }
})

export default Statistics
