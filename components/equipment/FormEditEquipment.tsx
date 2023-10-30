import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

type Props = {
    idEquipment: string,
    equipment: any,
    setEquipment: any,
    handleEdit: (id: string, equipment: any) => void,
    handleCloseModal: () => void,
    careCenters: any,
    medicalServices: any,
    loadingMedicalServices: boolean,
    loadMedicalServices: (CareCenterid: string) => void
}

function FormEditEquipment({ idEquipment, equipment, setEquipment, handleEdit, handleCloseModal, careCenters, medicalServices, loadingMedicalServices, loadMedicalServices }: Props) {



    return (
        <form className="grid grid-cols-2 gap-6 p-4">
            {/* Nombre del Equipo */}
            <TextField
                variant="outlined"
                label="Nombre"
                fullWidth
                value={equipment.name}
                onChange={(e) => setEquipment({ ...equipment, name: e.target.value })}
            />

            {/* Marca del Equipo */}
            <TextField
                variant="outlined"
                label="Marca"
                fullWidth
                value={equipment.brand}
                onChange={(e) => setEquipment({ ...equipment, brand: e.target.value })}
            />


            {/* Modelo del Equipo */}
            <TextField
                variant="outlined"
                label="Modelo"
                fullWidth
                value={equipment.model}
                onChange={(e) => setEquipment({ ...equipment, model: e.target.value })}
            />


            {/* Descripcion del Equipo */}
            <TextField
                variant="outlined"
                label="Descripcion"
                fullWidth
                value={equipment.description}
                onChange={(e) => setEquipment({ ...equipment, description: e.target.value })}
            />


            {/* Operativo del Equipo */}
            <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">Estado</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    label="Estado"
                    value={equipment.operative ? "true" : "false"}
                    onChange={(e) => setEquipment({ ...equipment, operative: e.target.value === "true" })}
                >
                    <MenuItem value="true">Operativo	</MenuItem>
                    <MenuItem value="false">Inoperativo	</MenuItem>

                </Select>
            </FormControl>



            {/* Condicion del Equipo */}
            <TextField
                variant="outlined"
                label="Condicion"
                fullWidth
                value={equipment.condition}
                onChange={(e) => setEquipment({ ...equipment, condition: e.target.value })}
            />

            {/* Serial del Equipo */}
            <TextField
                variant="outlined"
                label="Serial"
                fullWidth
                value={equipment.key}
                onChange={(e) => setEquipment({ ...equipment, key: e.target.value })}
            />

            {/* Bien Nacional del Equipo */}
            <TextField
                variant="outlined"
                label="Bien Nacional"
                fullWidth
                value={equipment.nationalKey}
                onChange={(e) => setEquipment({ ...equipment, nationalKey: e.target.value })}
            />

            {/* Centros de salud*/}
            <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">Centro de Salud</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    label="Centro de Salud"
                    value={`${equipment.CareCenter?.name}`}
                    onChange={(e) => {
                        const selectedCenterName = e.target.value as string;
                        const selectedCenter = careCenters.find((center: { id: string, name: string }) => center.name === selectedCenterName);
                        setEquipment({
                            ...equipment, CareCenterId: selectedCenter.id,
                            CareCenter: selectedCenter
                        })
                        loadMedicalServices(selectedCenter.id)
                    }

                    }
                >
                    {careCenters.map((center: { id: string, name: string }) => (
                        <MenuItem key={center.id} value={center.name}>
                            {center.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Servicio Medico */}
            <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">Servicio Medico</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    label="Servicio Medico"
                    value={equipment.MedicalService?.service || ''}
                    onChange={(e) => {
                        const selectedMedicalServiceName = e.target.value as string;
                        const selectedMedicalService = medicalServices.find((medicalService: { id: string, service: string }) => medicalService.service === selectedMedicalServiceName);
                        setEquipment({
                            ...equipment, MedicalServiceId: selectedMedicalService.id,
                            MedicalService: selectedMedicalService
                        })
                    }}
                >
                    {medicalServices.length === 0 ? (
                        <MenuItem value="" disabled>
                            Sin servicios medicos
                        </MenuItem>
                    ) : loadingMedicalServices ? (
                        <MenuItem value="" disabled>
                            Cargando servicios médicos...
                        </MenuItem>
                    ) : (
                        medicalServices.map((medicalService: { id: string, service: string }) => (
                            <MenuItem key={medicalService.id} value={medicalService.service}>
                                {medicalService.service}
                            </MenuItem>
                        ))
                    )}
                </Select>
            </FormControl>


            {/* Botones */}
            <div className="space-x-2 col-span-2 flex justify-center">
                <Button variant="outlined" startIcon={<CancelPresentationIcon />} onClick={handleCloseModal}>
                    Cancelar
                </Button>
                <Button variant="outlined" color="success" onClick={() => {



                    handleEdit(idEquipment, equipment)
                    handleCloseModal()
                }}
                    startIcon={<DeleteIcon />}>
                    Guardar
                </Button>
            </div>
        </form>
    )
}

export default FormEditEquipment