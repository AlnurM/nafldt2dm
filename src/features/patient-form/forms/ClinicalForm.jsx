import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import { postPatient } from '@/entities/patients'

const initForm = {
  haemoglobin: '',
  homa: '',
  triglycerides: '',
  hdl: '',
  cytolysis: '',
  cholestasis: '',
  fib4: '',
  fibrosis: '',
  steatosis: '',
}
const ClinicalForm = ({ data }) => {
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
    router.push('/patients')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label htmlFor="haemoglobin" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.clinical.haemoglobin')}
              </label>
              <div className="mt-2">
                <select
                  id="haemoglobin"
                  name="haemoglobin"
                  value={form.haemoglobin}
                  onChange={onChange}
                  autoComplete="haemoglobin"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value="comp">{t('steps.clinical.comp')}</option>
                  <option value="subcomp">{t('steps.clinical.subcomp')}</option>
                  <option value="decomp">{t('steps.clinical.decomp')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="homa" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.clinical.homa')}
              </label>
              <div className="mt-2">
                <select
                  id="homa"
                  name="homa"
                  value={form.homa}
                  onChange={onChange}
                  autoComplete="homa"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value="exist">{t('steps.clinical.exist')}</option>
                  <option value="absent">{t('steps.clinical.absent')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="triglycerides" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.clinical.triglycerides')}
              </label>
              <div className="mt-2">
                <select
                  id="triglycerides"
                  name="triglycerides"
                  value={form.triglycerides}
                  onChange={onChange}
                  autoComplete="triglycerides"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value="to17">{t('steps.clinical.to17')}</option>
                  <option value="over17">{t('steps.clinical.over17')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="hdl" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.clinical.hdl')}
              </label>
              <div className="mt-2">
                <select
                  id="hdl"
                  name="hdl"
                  value={form.hdl}
                  onChange={onChange}
                  autoComplete="hdl"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value="to10">{t('steps.clinical.to10')}</option>
                  <option value="over10">{t('steps.clinical.over10')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="cytolysis" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.clinical.cytolysis')}
              </label>
              <div className="mt-2">
                <select
                  id="cytolysis"
                  name="cytolysis"
                  value={form.cytolysis}
                  onChange={onChange}
                  autoComplete="cytolysis"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value="minimal">{t('steps.clinical.minimal')}</option>
                  <option value="mild">{t('steps.clinical.mild')}</option>
                  <option value="moderate">{t('steps.clinical.moderate')}</option>
                  <option value="severe">{t('steps.clinical.severe')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="cholestasis" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.clinical.cholestasis')}
              </label>
              <div className="mt-2">
                <select
                  id="cholestasis"
                  name="cholestasis"
                  value={form.cholestasis}
                  onChange={onChange}
                  autoComplete="cholestasis"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value="easy">{t('steps.clinical.easy')}</option>
                  <option value="medium">{t('steps.clinical.medium')}</option>
                  <option value="hard">{t('steps.clinical.hard')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="fib4" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.clinical.fib4')}
              </label>
              <div className="mt-2">
                <select
                  id="fib4"
                  name="fib4"
                  value={form.fib4}
                  onChange={onChange}
                  autoComplete="fib4"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value="low">{t('steps.clinical.low')}</option>
                  <option value="grey">{t('steps.clinical.grey')}</option>
                  <option value="high">{t('steps.clinical.high')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="fibrosis" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.clinical.fibrosis')}
              </label>
              <div className="mt-2">
                <select
                  id="fibrosis"
                  name="fibrosis"
                  value={form.fibrosis}
                  onChange={onChange}
                  autoComplete="fibrosis"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value="f0">{t('steps.clinical.f0')}</option>
                  <option value="f1">{t('steps.clinical.f1')}</option>
                  <option value="f2">{t('steps.clinical.f2')}</option>
                  <option value="f3">{t('steps.clinical.f3')}</option>
                  <option value="f4">{t('steps.clinical.f4')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="steatosis" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.clinical.steatosis')}
              </label>
              <div className="mt-2">
                <select
                  id="steatosis"
                  name="steatosis"
                  value={form.steatosis}
                  onChange={onChange}
                  autoComplete="steatosis"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value="min">{t('steps.clinical.min')}</option>
                  <option value="mil">{t('steps.clinical.mil')}</option>
                  <option value="mod">{t('steps.clinical.mod')}</option>
                  <option value="sev">{t('steps.clinical.sev')}</option>
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

export default ClinicalForm