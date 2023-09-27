import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { withAuth } from '@/entities/auth'
import { useDoctorsStore } from '@/entities/doctors'

const Patients = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const { list, getDoctors } = useDoctorsStore()

  useEffect(() => {
    getDoctors()
  }, [])
  return (
    <>
      <Head>
        <title>{t('patients.title')}</title>
      </Head>
      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">{t('patients.title')}</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <p className="mt-2 text-sm text-gray-700">
                  {t('patients.subtitle')}
                </p>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button
                  type="button"
                  className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() => router.push('/patients/create?step=passport')}
                >
                  {t('patients.add')}
                </button>
              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                      <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                          {t('patients.name')}
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          {t('patients.phone')}
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          {t('patients.email')}
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                          <span className="sr-only">{t('patients.edit')}</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {list.map((person) => (
                        <tr key={person.email}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            {person.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.phone}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                            <Link href={`/patients/${person.id}`}>
                              <span className="text-indigo-600 hover:text-indigo-900">
                                {t('patients.edit')}<span className="sr-only">, {person.name}</span>
                              </span>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
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

export default Patients
