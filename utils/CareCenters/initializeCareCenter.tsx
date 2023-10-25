import { CareCenter } from '@/types/CareCenter';

export const initializeCareCenter = (): CareCenter => {
    return {
        id: "",
        name: '',
        tipo: '',
        typeCenter: 0,
        municipality:{
            name:''
        },
        address: '',
        director: '',
        phoneNumber: '',
        State: {
            name: ''
        }
    };
}