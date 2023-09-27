import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { PassportForm, HereditaryForm, MedicalForm, DiagnosisForm, RiskForm, ClinicalForm } from './forms'

const config = {
  passport: (props) => <PassportForm {...props} />,
  hereditary: (props) => <HereditaryForm {...props} />,
  medical: (props) => <MedicalForm {...props} />,
  diagnosis: (props) => <DiagnosisForm {...props} />,
  risk: (props) => <RiskForm {...props} />,
  clinical: (props) => <ClinicalForm {...props} />,
}
const PatientForm = () => {
  const { t } = useTranslation()
  const { query } = useRouter()
  return (
    <>
      {config[query.step]()}
    </>
  )
}

export default PatientForm
