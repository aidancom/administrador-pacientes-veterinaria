import React from 'react'
import type { Patient } from '../types'
import PatientDetailItem from './PatientDetailItem'
import { usePatientStore } from '../store'
import { toast } from 'react-toastify'

type PatientDetailsProp = {
  patient: Patient
}

const PatientDetails = ({patient}: PatientDetailsProp) => {

  const deletePatient = usePatientStore(state => state.removePatient)
  const getPatientId = usePatientStore(state => state.getPatientId)

  const handleDelete = (patient: Patient) => {
    deletePatient(patient)
    toast.success("Paciente eliminado con éxito")
  }

  return (
    <div className='mx-5 my-10 px-5 py-10 bg-white rounded-xl shadow-md'>
      <PatientDetailItem label="Nombre" data={patient.name}/>
      <PatientDetailItem label="Propietario" data={patient.caretaker}/>
      <PatientDetailItem label="Email" data={patient.email}/>
      <PatientDetailItem label="Fecha de alta" data={patient.date.toString()}/>
      <PatientDetailItem label="Síntomas" data={patient.symptoms}/>

      <div className='flex justify-between'>
        <button 
          type='button'
          onClick={() => getPatientId(patient)}
          className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
        >Editar</button>
        <button 
          type='button'
          onClick={() => handleDelete(patient)}
          className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
        >Eliminar</button>
      </div>

    </div>
  )
}

export default PatientDetails
