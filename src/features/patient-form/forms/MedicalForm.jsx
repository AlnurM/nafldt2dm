import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import { postPatient } from '@/entities/patients'

const initForm = {
  ageNafld: '',
  yearsNafld: '',
  ageDiabetes: '',
  yearsDiabetes: '',
}
const MedicalForm = ({ data }) => {
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
    router.query.step = 'diagnosis'
    router.push(router)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="ageNafld" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.medical.ageNafld')}
              </label>
              <div className="mt-2">
                <select
                  id="ageNafld"
                  name="ageNafld"
                  value={form.ageNafld}
                  onChange={onChange}
                  autoComplete="ageNafld"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value="18to44">{t('steps.medical.18to44')}</option>
                  <option value="45to59">{t('steps.medical.45to59')}</option>
                  <option value="60to74">{t('steps.medical.60to74')}</option>
                  <option value="75to90">{t('steps.medical.75to90')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="yearsNafld" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.medical.yearsNafld')}
              </label>
              <div className="mt-2">
                <select
                  id="yearsNafld"
                  name="yearsNafld"
                  value={form.yearsNafld}
                  onChange={onChange}
                  autoComplete="yearsNafld"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value="1to5">{t('steps.medical.1to5')}</option>
                  <option value="6to10">{t('steps.medical.6to10')}</option>
                  <option value="11to15">{t('steps.medical.11to15')}</option>
                  <option value="16to20">{t('steps.medical.16to20')}</option>
                  <option value="over20">{t('steps.medical.over20')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="ageDiabetes" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.medical.ageDiabetes')}
              </label>
              <div className="mt-2">
                <select
                  id="ageDiabetes"
                  name="ageDiabetes"
                  value={form.ageDiabetes}
                  onChange={onChange}
                  autoComplete="ageDiabetes"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value="18to44">{t('steps.medical.18to44')}</option>
                  <option value="45to59">{t('steps.medical.45to59')}</option>
                  <option value="60to74">{t('steps.medical.60to74')}</option>
                  <option value="75to90">{t('steps.medical.75to90')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="yearsDiabetes" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.medical.yearsDiabetes')}
              </label>
              <div className="mt-2">
                <select
                  id="yearsDiabetes"
                  name="yearsDiabetes"
                  value={form.yearsDiabetes}
                  onChange={onChange}
                  autoComplete="yearsDiabetes"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value="1to5">{t('steps.medical.1to5')}</option>
                  <option value="6to10">{t('steps.medical.6to10')}</option>
                  <option value="11to15">{t('steps.medical.11to15')}</option>
                  <option value="16to20">{t('steps.medical.16to20')}</option>
                  <option value="over20">{t('steps.medical.over20')}</option>
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

export default MedicalForm