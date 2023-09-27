import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import { postPatient } from '@/entities/patients'

const initForm = {
  'E11': '',
  'E11-2': '',
  'E11-3': '',
  'E11-4': '',
  'E11-5': '',
  'E11-6': '',
  'E11-7': '',
  'E11-8': '',
  'K76': '',
  'I10': '',
  'I11': '',
  'I12': '',
  'I13': '',
  'I15': '',
  'E66': '',
  'E66-8': '',
  'E03-8': '',
  'E28-2': '',
  'E78': '',
  'E78-1': '',
}
const DiagnosisForm = ({ data }) => {
  const { t } = useTranslation('', { keyPrefix: 'patients' })
  const router = useRouter()
  const [form, setForm] = useState(data || initForm)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    await postPatient(form)
    router.query.step = 'risk'
    router.push(router)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label htmlFor="E11" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.diagnosis.E11')}
              </label>
              <div className="mt-2">
                <select
                  id="E11"
                  name="E11"
                  value={form['E11']}
                  onChange={onChange}
                  autoComplete="E11"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.diagnosis.yes')}</option>
                  <option value={false}>{t('steps.diagnosis.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="E11-2" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.diagnosis.E11-2')}
              </label>
              <div className="mt-2">
                <select
                  id="E11-2"
                  name="E11-2"
                  value={form['E11-2']}
                  onChange={onChange}
                  autoComplete="E11-2"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.diagnosis.yes')}</option>
                  <option value={false}>{t('steps.diagnosis.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="E11-3" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.diagnosis.E11-3')}
              </label>
              <div className="mt-2">
                <select
                  id="E11-3"
                  name="E11-3"
                  value={form['E11-3']}
                  onChange={onChange}
                  autoComplete="E11-3"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.diagnosis.yes')}</option>
                  <option value={false}>{t('steps.diagnosis.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="E11-4" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.diagnosis.E11-4')}
              </label>
              <div className="mt-2">
                <select
                  id="E11-4"
                  name="E11-4"
                  value={form['E11-4']}
                  onChange={onChange}
                  autoComplete="E11-4"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.diagnosis.yes')}</option>
                  <option value={false}>{t('steps.diagnosis.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="E11-5" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.diagnosis.E11-5')}
              </label>
              <div className="mt-2">
                <select
                  id="E11-5"
                  name="E11-5"
                  value={form['E11-5']}
                  onChange={onChange}
                  autoComplete="E11-5"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.diagnosis.yes')}</option>
                  <option value={false}>{t('steps.diagnosis.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="E11-6" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.diagnosis.E11-6')}
              </label>
              <div className="mt-2">
                <select
                  id="E11-6"
                  name="E11-6"
                  value={form['E11-6']}
                  onChange={onChange}
                  autoComplete="E11-6"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.diagnosis.yes')}</option>
                  <option value={false}>{t('steps.diagnosis.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="E11-7" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.diagnosis.E11-7')}
              </label>
              <div className="mt-2">
                <select
                  id="E11-7"
                  name="E11-7"
                  value={form['E11-7']}
                  onChange={onChange}
                  autoComplete="E11-7"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.diagnosis.yes')}</option>
                  <option value={false}>{t('steps.diagnosis.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="E11-8" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.diagnosis.E11-8')}
              </label>
              <div className="mt-2">
                <select
                  id="E11-8"
                  name="E11-8"
                  value={form['E11-8']}
                  onChange={onChange}
                  autoComplete="E11-8"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.diagnosis.yes')}</option>
                  <option value={false}>{t('steps.diagnosis.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="K76" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.diagnosis.K76')}
              </label>
              <div className="mt-2">
                <select
                  id="K76"
                  name="K76"
                  value={form['K76']}
                  onChange={onChange}
                  autoComplete="K76"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.diagnosis.yes')}</option>
                  <option value={false}>{t('steps.diagnosis.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="I10" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.diagnosis.I10')}
              </label>
              <div className="mt-2">
                <select
                  id="I10"
                  name="I10"
                  value={form['I10']}
                  onChange={onChange}
                  autoComplete="I10"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.diagnosis.yes')}</option>
                  <option value={false}>{t('steps.diagnosis.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="I11" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.diagnosis.I11')}
              </label>
              <div className="mt-2">
                <select
                  id="I11"
                  name="I11"
                  value={form['I11']}
                  onChange={onChange}
                  autoComplete="I11"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.diagnosis.yes')}</option>
                  <option value={false}>{t('steps.diagnosis.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="I12" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.diagnosis.I12')}
              </label>
              <div className="mt-2">
                <select
                  id="I12"
                  name="I12"
                  value={form['I12']}
                  onChange={onChange}
                  autoComplete="I12"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.diagnosis.yes')}</option>
                  <option value={false}>{t('steps.diagnosis.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="I13" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.diagnosis.I13')}
              </label>
              <div className="mt-2">
                <select
                  id="I13"
                  name="I13"
                  value={form['I13']}
                  onChange={onChange}
                  autoComplete="I13"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.diagnosis.yes')}</option>
                  <option value={false}>{t('steps.diagnosis.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="I15" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.diagnosis.I15')}
              </label>
              <div className="mt-2">
                <select
                  id="I15"
                  name="I15"
                  value={form['I15']}
                  onChange={onChange}
                  autoComplete="I15"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.diagnosis.yes')}</option>
                  <option value={false}>{t('steps.diagnosis.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="E66" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.diagnosis.E66')}
              </label>
              <div className="mt-2">
                <select
                  id="E66"
                  name="E66"
                  value={form['E66']}
                  onChange={onChange}
                  autoComplete="E66"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.diagnosis.yes')}</option>
                  <option value={false}>{t('steps.diagnosis.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="E66-8" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.diagnosis.E66-8')}
              </label>
              <div className="mt-2">
                <select
                  id="E66-8"
                  name="E66-8"
                  value={form['E66-8']}
                  onChange={onChange}
                  autoComplete="E66-8"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.diagnosis.yes')}</option>
                  <option value={false}>{t('steps.diagnosis.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="E03-8" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.diagnosis.E03-8')}
              </label>
              <div className="mt-2">
                <select
                  id="E03-8"
                  name="E03-8"
                  value={form['E03-8']}
                  onChange={onChange}
                  autoComplete="E03-8"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.diagnosis.yes')}</option>
                  <option value={false}>{t('steps.diagnosis.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="E28-2" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.diagnosis.E28-2')}
              </label>
              <div className="mt-2">
                <select
                  id="E28-2"
                  name="E28-2"
                  value={form['E28-2']}
                  onChange={onChange}
                  autoComplete="E28-2"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.diagnosis.yes')}</option>
                  <option value={false}>{t('steps.diagnosis.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="E78" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.diagnosis.E78')}
              </label>
              <div className="mt-2">
                <select
                  id="E78"
                  name="E78"
                  value={form['E78']}
                  onChange={onChange}
                  autoComplete="E78"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.diagnosis.yes')}</option>
                  <option value={false}>{t('steps.diagnosis.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="E78-1" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.diagnosis.E78-1')}
              </label>
              <div className="mt-2">
                <select
                  id="E78-1"
                  name="E78-1"
                  value={form['E78-1']}
                  onChange={onChange}
                  autoComplete="E78-1"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.diagnosis.yes')}</option>
                  <option value={false}>{t('steps.diagnosis.no')}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => router.back()}>
            {t('cancel')}
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {t('save')}
          </button>
        </div>
      </form>
    </>
  )
}

export default DiagnosisForm