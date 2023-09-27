import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import { postPatient } from '@/entities/patients'

const initForm = {
  weight: '',
  bmi: '',
  activity: '',
  insomnia: '',
  smoking: '',
  hypertension: '',
  hypothyroidism: '',
  polycistic: '',
  apnoea: '',
  hypogonadism: '',
  hypopituitarism: '',
  menopause: '',
}
const RiskForm = ({ data }) => {
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
    router.query.step = 'clinical'
    router.push(router)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label htmlFor="weight" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.risk.weight')}
              </label>
              <div className="mt-2">
                <select
                  id="weight"
                  name="weight"
                  value={form.weight}
                  onChange={onChange}
                  autoComplete="weight"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value="to1000">{t('steps.risk.to1000')}</option>
                  <option value="1000to1499">{t('steps.risk.1000to1499')}</option>
                  <option value="1500to2499">{t('steps.risk.1500to2499')}</option>
                  <option value="over2500">{t('steps.risk.over2500')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="bmi" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.risk.bmi')}
              </label>
              <div className="mt-2">
                <select
                  id="bmi"
                  name="bmi"
                  value={form.bmi}
                  onChange={onChange}
                  autoComplete="bmi"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value="16to18">{t('steps.risk.16to18')}</option>
                  <option value="18to25">{t('steps.risk.18to25')}</option>
                  <option value="25to30">{t('steps.risk.25to30')}</option>
                  <option value="30to35">{t('steps.risk.30to35')}</option>
                  <option value="35to40">{t('steps.risk.35to40')}</option>
                  <option value="over40">{t('steps.risk.over40')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="bmi" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.risk.activity')}
              </label>
              <div className="mt-2">
                <select
                  id="activity"
                  name="activity"
                  value={form.activity}
                  onChange={onChange}
                  autoComplete="activity"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value="low">{t('steps.risk.low')}</option>
                  <option value="medium">{t('steps.risk.medium')}</option>
                  <option value="high">{t('steps.risk.high')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="bmi" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.risk.insomnia')}
              </label>
              <div className="mt-2">
                <select
                  id="insomnia"
                  name="insomnia"
                  value={form.insomnia}
                  onChange={onChange}
                  autoComplete="insomnia"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value={true}>{t('steps.risk.yes')}</option>
                  <option value={false}>{t('steps.risk.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="bmi" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.risk.smoking')}
              </label>
              <div className="mt-2">
                <select
                  id="smoking"
                  name="smoking"
                  value={form.smoking}
                  onChange={onChange}
                  autoComplete="smoking"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value={true}>{t('steps.risk.yes')}</option>
                  <option value={false}>{t('steps.risk.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="bmi" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.risk.hypertension')}
              </label>
              <div className="mt-2">
                <select
                  id="hypertension"
                  name="hypertension"
                  value={form.hypertension}
                  onChange={onChange}
                  autoComplete="hypertension"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value="normal">{t('steps.risk.normal')}</option>
                  <option value="prehyper">{t('steps.risk.prehyper')}</option>
                  <option value="ag1">{t('steps.risk.ag1')}</option>
                  <option value="ag2">{t('steps.risk.ag2')}</option>
                  <option value="ag3">{t('steps.risk.ag3')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="bmi" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.risk.hypothyroidism')}
              </label>
              <div className="mt-2">
                <select
                  id="hypothyroidism"
                  name="hypothyroidism"
                  value={form.hypothyroidism}
                  onChange={onChange}
                  autoComplete="hypothyroidism"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value={true}>{t('steps.risk.yes')}</option>
                  <option value={false}>{t('steps.risk.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="bmi" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.risk.polycistic')}
              </label>
              <div className="mt-2">
                <select
                  id="polycistic"
                  name="polycistic"
                  value={form.polycistic}
                  onChange={onChange}
                  autoComplete="polycistic"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value={true}>{t('steps.risk.yes')}</option>
                  <option value={false}>{t('steps.risk.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="bmi" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.risk.apnoea')}
              </label>
              <div className="mt-2">
                <select
                  id="apnoea"
                  name="apnoea"
                  value={form.apnoea}
                  onChange={onChange}
                  autoComplete="apnoea"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value={true}>{t('steps.risk.yes')}</option>
                  <option value={false}>{t('steps.risk.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="bmi" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.risk.hypogonadism')}
              </label>
              <div className="mt-2">
                <select
                  id="hypogonadism"
                  name="hypogonadism"
                  value={form.hypogonadism}
                  onChange={onChange}
                  autoComplete="hypogonadism"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value={true}>{t('steps.risk.yes')}</option>
                  <option value={false}>{t('steps.risk.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="bmi" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.risk.hypopituitarism')}
              </label>
              <div className="mt-2">
                <select
                  id="hypopituitarism"
                  name="hypopituitarism"
                  value={form.hypopituitarism}
                  onChange={onChange}
                  autoComplete="hypopituitarism"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value={true}>{t('steps.risk.yes')}</option>
                  <option value={false}>{t('steps.risk.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="bmi" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.risk.menopause')}
              </label>
              <div className="mt-2">
                <select
                  id="menopause"
                  name="menopause"
                  value={form.menopause}
                  onChange={onChange}
                  autoComplete="menopause"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value="early">{t('steps.risk.early')}</option>
                  <option value="late">{t('steps.risk.late')}</option>
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

export default RiskForm