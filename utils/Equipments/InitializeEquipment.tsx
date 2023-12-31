import { Equipments } from '@/types/Equipment'

export const initializeEquipmment = (): Equipments => {
    return {
        id: '',
        name: '',
        model: '',
        brand: '',
        key: '',
        serial: '',
        nationalKey: '',
        operative: false,
        CareCenter: {
            name: ''
        },
        MedicalService: {
            id: '',
            service: '',
            floor: 0,
        },
        Repairs: [],
        description: '',
        condition: '',
        CareCenterId: '',
        MedicalServiceId: ''
    };
}