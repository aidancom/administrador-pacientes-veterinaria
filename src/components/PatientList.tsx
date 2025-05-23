
import { usePatientStore } from '../store'
import PatientDetails from './PatientDetails'

const PatientList = () => {
  const patients = usePatientStore((state) => state.patients)

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {patients.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Listado de pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>Administra tus pacientes</p>
          {patients.map(patient => (
            <PatientDetails key={patient.id} patient={patient}/>
          ))}
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>Empieza a agregar pacientes</p>
        </>
      )}
    </div>
  )
}

export default PatientList
