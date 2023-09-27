import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import { postPatient } from '@/entities/patients'

const initForm = {
  fullname: '',
  id: '',
  birthdate: '',
  gender: '',
  address: '',
  phone: '',
  occupation: ''
}
const PassportForm = ({ data }) => {
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
    if (!router.query.id) {
      router.push(`/patients/${form.id}?step=hereditary`)
      return
    }
    router.query.step = 'hereditary'
    router.push(router)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="fullname" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.passport.fullname')}
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  value={form.fullname}
                  onChange={onChange}
                  autoComplete="given-name"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="id" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.passport.id')}
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="id"
                  id="id"
                  value={form.id}
                  onChange={onChange}
                  autoComplete="iin"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="birthdate" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.passport.birthdate')}
              </label>
              <div className="mt-2">
                <input
                  id="birthdate"
                  name="birthdate"
                  type="date"
                  value={form.birthdate}
                  onChange={onChange}
                  autoComplete="birthdate"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.passport.phone')}
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={form.phone}
                  onChange={onChange}
                  autoComplete="phone"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.passport.gender.title')}
              </label>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  value={form.gender}
                  onChange={onChange}
                  autoComplete="gender"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value="male">{t('steps.passport.gender.male')}</option>
                  <option value="female">{t('steps.passport.gender.female')}</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.passport.address')}
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={form.address}
                  onChange={onChange}
                  autoComplete="address"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="occupation" className="block text-sm font-medium leading-6 text-gray-900">
                {t('steps.passport.occupation.title')}
              </label>
              <div className="mt-2">
                <select
                  id="occupation"
                  name="occupation"
                  value={form.occupation}
                  onChange={onChange}
                  autoComplete="occupation"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=""></option>
                  <option value="worker">{t('steps.passport.occupation.worker')}</option>
                  <option value="employee">{t('steps.passport.occupation.employee')}</option>
                  <option value="learner">{t('steps.passport.occupation.learner')}</option>
                  <option value="student">{t('steps.passport.occupation.student')}</option>
                  <option value="pensioner">{t('steps.passport.occupation.pensioner')}</option>
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

export default PassportForm
