import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { PatientForm } from '@/features/patient-form'
import { withAuth } from '@/entities/auth'
import { Steps } from '@/entities/patients'

const PatientCreate = () => {
  const { t } = useTranslation()

  const steps = [
    { id: '01', name: t('patients.steps.passport.title'), key: 'passport', href: '?step=passport' },
    { id: '02', name: t('patients.steps.hereditary.title'), key: 'hereditary', href: '?step=hereditary' },
    { id: '03', name: t('patients.steps.medical.title'), key: 'medical', href: '?step=medical' },
    { id: '04', name: t('patients.steps.diagnosis.title'), key: 'diagnosis', href: '?step=diagnosis' },
    { id: '05', name: t('patients.steps.risk.title'), key: 'risk', href: '?step=risk' },
    { id: '06', name: t('patients.steps.clinical.title'), key: 'clinical', href: '?step=clinical' },
  ]
  return (
    <>
      <Head>
        <title>{t('patients.title')} | {t('patients.create')}</title>
      </Head>
      <div className="mx-auto max-w-7xl py-10 px-4 sm:px-0">
        <Steps steps={steps} />
        <PatientForm />
      </div>
    </>
  )
}

export const getServerSideProps = withAuth(async (context) => {
  const { locale, query } = context
  const steps = [
    'passport',
    'hereditary',
    'medical',
    'diagnosis',
    'risk',
    'clinical',
  ]
  if (!query.step || !steps.includes(query.step)) {
    return {
      redirect: {
        destination: '/patients',
        status: 404
      }
    }
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    },
  }
})

export default PatientCreate
