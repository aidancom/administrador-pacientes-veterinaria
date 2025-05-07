import { create } from "zustand"
import type { DraftPatient, Patient } from "./types"
import { v4 as uudi } from "uuid"

type PatientState = {
  patients: Patient[]
  activeId: Patient['id']
  addPatient: (data: DraftPatient) => void
  removePatient: (data: Patient) => void
  getPatientId: (data: Patient) => void
  updatePatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient): Patient => {
  return {...patient, id: uudi()}
}

export const usePatientStore = create<PatientState>((set) => ({
    patients: [],
    activeId: '',
    addPatient: (data) => {
      const newPatient = createPatient(data)
      set((state) => ({
        patients: [...state.patients, newPatient]
      }))
    },
    removePatient: (data) => {
      set((state) => ({
        patients: state.patients.filter(patient => patient.id !== data.id)
      }))
    },
    getPatientId: (data) => {
      set(() => ({
        activeId: data.id
      }))
    },
    updatePatient: (data) => {
      set((state) => ({
        patients: state.patients.map(patient => patient.id === state.activeId ? {id: patient.id, ...data} : patient),
        activeId: ''
      }))
    }
}))