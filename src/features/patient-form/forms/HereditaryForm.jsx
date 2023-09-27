import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import { postPatient } from '@/entities/patients'

const initForm = {
  diabetes: false,
  hypertension: false,
  obese: false,
  dyslipidaemia: false,
  thyroid: false,
  polycystic: false,
  psoriasis: false
}
const HereditaryForm = ({ data }) => {
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
    router.query.step = 'medical'
    router.push(router)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="diabetes" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.hereditary.diabetes')}
              </label>
              <div className="mt-2">
                <select
                  id="diabetes"
                  name="diabetes"
                  value={form.diabetes}
                  onChange={onChange}
                  autoComplete="diabetes"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.hereditary.yes')}</option>
                  <option value={false}>{t('steps.hereditary.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="hypertension" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.hereditary.hypertension')}
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
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.hereditary.yes')}</option>
                  <option value={false}>{t('steps.hereditary.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="obese" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.hereditary.obese')}
              </label>
              <div className="mt-2">
                <select
                  id="obese"
                  name="obese"
                  value={form.obese}
                  onChange={onChange}
                  autoComplete="obese"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.hereditary.yes')}</option>
                  <option value={false}>{t('steps.hereditary.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="dyslipidaemia" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.hereditary.dyslipidaemia')}
              </label>
              <div className="mt-2">
                <select
                  id="dyslipidaemia"
                  name="dyslipidaemia"
                  value={form.dyslipidaemia}
                  onChange={onChange}
                  autoComplete="dyslipidaemia"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.hereditary.yes')}</option>
                  <option value={false}>{t('steps.hereditary.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="thyroid" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.hereditary.thyroid')}
              </label>
              <div className="mt-2">
                <select
                  id="thyroid"
                  name="thyroid"
                  value={form.thyroid}
                  onChange={onChange}
                  autoComplete="thyroid"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.hereditary.yes')}</option>
                  <option value={false}>{t('steps.hereditary.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="polycystic" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.hereditary.polycystic')}
              </label>
              <div className="mt-2">
                <select
                  id="polycystic"
                  name="polycystic"
                  value={form.polycystic}
                  onChange={onChange}
                  autoComplete="polycystic"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.hereditary.yes')}</option>
                  <option value={false}>{t('steps.hereditary.no')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="psoriasis" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.hereditary.psoriasis')}
              </label>
              <div className="mt-2">
                <select
                  id="psoriasis"
                  name="psoriasis"
                  value={form.psoriasis}
                  onChange={onChange}
                  autoComplete="psoriasis"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={undefined}></option>
                  <option value={true}>{t('steps.hereditary.yes')}</option>
                  <option value={false}>{t('steps.hereditary.no')}</option>
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

export default HereditaryForm