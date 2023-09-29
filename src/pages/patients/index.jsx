import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import * as XLSX from 'xlsx'
import { withAuth } from '@/entities/auth'
import { usePatientsStore, configKeys, configValues } from '@/entities/patients'

const Patients = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const { list, getPatients } = usePatientsStore()

  const translateKeys = (obj) => {
    const translatedObj = {};
    Object.keys(configKeys).forEach((key) => {
      if (obj[key] !== undefined) {
        const translatedKey = configKeys[key]
        if (key === 'cholestasis') {
          translatedObj[t(translatedKey)] = t(configValues[obj[key] + '_cholestasis']) || obj[key]
          return
        }
        if (key === 'fib4') {
          translatedObj[t(translatedKey)] = t(configValues[obj[key] + '_fib4']) || obj[key]
          return
        }
        translatedObj[t(translatedKey)] = t(configValues[obj[key]]) || obj[key]
      }
    });
    return translatedObj;
  }

  const handleDownload = () => {
    const json = list.map(item => translateKeys(item))
    const ws = XLSX.utils.json_to_sheet(json)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
    const range = XLSX.utils.decode_range(ws['!ref'])
    for (let i = range.s.c; i <= range.e.c; i++) {
      ws[XLSX.utils.encode_col(i) + '1'] = { t: 's', v: ws[XLSX.utils.encode_col(i) + '1'].v }
      ws[XLSX.utils.encode_col(i) + '1'].s = { font: { bold: true } }
      ws[XLSX.utils.encode_col(i) + '1'].z = '0' 
      let max_width = ws[XLSX.utils.encode_col(i) + '1'].v.length
      for (let j = range.s.r + 1; j <= range.e.r; j++) {
        const cell = ws[XLSX.utils.encode_col(i) + (j + 1)]
        if (cell && cell.v) {
          const cell_width = cell.v.toString().length
          if (cell_width > max_width) {
            max_width = cell_width
          }
        }
      }
      ws['!cols'] = ws['!cols'] || []
      ws['!cols'][i] = { wch: max_width + 2 }
    }
    XLSX.writeFile(wb, 'Report.xls')
  };
  

  useEffect(() => {
    getPatients()
  }, [])
  return (
    <>
      <Head>
        <title>{t('patients.title')}</title>
      </Head>
      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-lg sm:text-3xl font-bold text-indigo-600">
            {t('header.title')}
          </div>
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
              <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex">
                <button
                  type="button"
                  className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() => router.push('/patients/create?step=passport')}
                >
                  {t('patients.add')}
                </button>
                <button
                  type="button"
                  className="ml-3 block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  onClick={handleDownload}
                >
                  {t('patients.download')}
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
                          {t('patients.id')}
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          {t('patients.phone')}
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                          <span className="sr-only">{t('patients.edit')}</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {list?.map((person) => (
                        <tr key={person.id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            {person.fullname}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.id}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.phone}</td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                            <Link href={`/patients/${person.id}?step=passport`}>
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
