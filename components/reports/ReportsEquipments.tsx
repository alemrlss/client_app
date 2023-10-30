"use client"
import React, { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { Box, FormControl, InputLabel, MenuItem, Snackbar } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';
import { getReport } from '@/utils/Reports/getReport';
import SnackBar from './SnackBar';
import { getCareCenters } from '@/utils/carecentersService';

function ReportsEquipments() {
  const [centrosDeSalud, setCentrosDeSalud] = useState([]);


  useEffect(() => {
    // Cargar la lista de centros de salud cuando el componente se monte
    getCareCenters()
      .then((centros) => {
        setCentrosDeSalud(centros);
      })
      .catch((error) => {
        // Manejar errores, por ejemplo, mostrando una notificación
        console.error('Error al cargar la lista de centros de salud', error);
      });
  }, []);

  //Reinicio del formulario
  const resetForm = () => {
    setFilterNameEnable(false);
    setFilterBrandEnable(false);
    setFilterCareCenterEnable(false);
    setFilterStatusEnable(false);
    setName('');
    setBrand('');
    setCareCenter('default');
  };

  //Notificaciones
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [snackbarMessage, setSnackbarMessage] = useState('');


  //Estados de el formulario
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [careCenter, setCareCenter] = useState('default');
  const [operative, setOperative] = useState(false);
  const [filterNameEnable, setFilterNameEnable] = useState(false);
  const [filterBrandEnable, setFilterBrandEnable] = useState(false);
  const [filterCareCenterEnable, setFilterCareCenterEnable] = useState(false);
  const [filterStatusEnable, setFilterStatusEnable] = useState(false);

  //Genera informe
  const handleGenerarInforme = () => {
    const filters: { name?: string, brand?: string, CareCenterId?: string, operative?: string } = {};
    if (filterNameEnable && name.trim() !== '') {
      filters.name = name;
    }
    if (filterBrandEnable && brand.trim() !== '') {
      filters.brand = brand;
    }
    if (filterCareCenterEnable && careCenter !== 'default') {
      filters.CareCenterId = careCenter;
    }
    if (filterStatusEnable) {
      filters.operative = operative.toString();
    }
    const queryParams = new URLSearchParams(filters as Record<string, string>).toString();
    console.log("El QueryParams es: ", queryParams)
    getReport(queryParams)
      .then((response) => {
        if (response.file) {
          // Éxito: Archivo descargado
          setSnackbarSeverity('success');
          setSnackbarMessage('Informe generado y archivo descargado con éxito');
          resetForm();
        } else {
          // Error: No se descargó el archivo
          setSnackbarSeverity('error');
          setSnackbarMessage('Error al generar el informe');
          resetForm();

        }
        setSnackbarOpen(true);
      })
      .catch((error) => {
        setSnackbarSeverity('error');
        setSnackbarMessage('Error en la petición al servidor');
        setSnackbarOpen(true);
      });


  };



  return (
    <div className="container mx-auto p-4">
      <form className="bg-white p-4 rounded shadow-md space-y-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Generar Reporte de Equipos Tecnológicos</h2>
        <p className="text-xl font-semibold mb-1">Filtros</p>

        <Box className="flex space-x-2">
          <div className="flex items-center bg-gray-200 p-1 rounded">
            <label className="mr-2">
              Estado
            </label>
            <Switch

              checked={filterStatusEnable}
              onChange={() => setFilterStatusEnable(!filterStatusEnable)}
            />
          </div>

          <div className="flex items-center bg-gray-200 p-1 rounded">
            <label className={`mr-2 text-gray-400 ${filterStatusEnable ? 'font-bold text-gray-900' : ''}`}>
              Inoperativos
            </label>
            <Switch
              disabled={!filterStatusEnable}
              checked={operative}
              onChange={() => setOperative(!operative)}
              color={operative ? "primary" : "default"} // Cambia el color a "primary" cuando está activado y a "default" cuando no lo está
              sx={{
                '& .MuiSwitch-thumb': {
                  width: 20,
                  height: 20,
                },
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#4caf50',
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: '#4caf50',
                },
                '& .MuiSwitch-switchBase:not(.Mui-checked)': {
                  color: '#F83D3D', // Cambia el color cuando el Switch está deshabilitado y no activado
                },

                '& .MuiSwitch-switchBase:not(.Mui-checked) + .MuiSwitch-track': {
                  backgroundColor: '#F83D3D',
                },
              }}
            />

            <label className={`mr-2 text-gray-400 ${filterStatusEnable ? 'font-bold text-gray-900' : ''}`}>
              Operativos
            </label>
          </div>

        </Box>

        <Box className="flex items-center justify-between space-x-2">
          <div className="w-2/6 bg-gray-200 rounded py-2 px-1">
            <label className="m-1">
              Nombre
            </label>
            <Switch
              checked={filterNameEnable}
              onChange={() => setFilterNameEnable(!filterNameEnable)}
            />
          </div>
          <div className="w-4/6  ">
            <Input
              placeholder="Nombre del equipo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!filterNameEnable}
              className='w-full'
            />
          </div>
        </Box>

        <Box className="flex items-center space-x-2 ">
          <div className="w-2/6 bg-gray-200 p-1 rounded">
            <label className="m-1">
              Centro de Salud
            </label>
            <Switch
              checked={filterCareCenterEnable}
              onChange={() => setFilterCareCenterEnable(!filterCareCenterEnable)}
            />
          </div>
          <div className="w-4/6">
            <FormControl variant="standard" fullWidth>
              <InputLabel id="centro-select-label">Centro de Salud</InputLabel>
              <Select
                labelId="centro-select-label"
                label="Centro de Salud"
                value={careCenter}
                onChange={(e) => setCareCenter(e.target.value)}
                disabled={!filterCareCenterEnable}
              >
                <MenuItem value="default">Seleccione un centro de salud</MenuItem>
                {centrosDeSalud.map((centro) => (
                  <MenuItem key={centro.id} value={centro.id}>
                    {centro.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </Box>

        <Box className="flex items-center justify-between space-x-2">
          <div className="w-2/6 bg-gray-200 rounded py-2 px-1">
            <label className="m-1">
              Marca
            </label>
            <Switch
              checked={filterBrandEnable}
              onChange={() => setFilterBrandEnable(!filterBrandEnable)}
            />
          </div>
          <div className="w-4/6  ">
            <Input
              placeholder="Nombre de la marca.. Ej: Meheco"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              disabled={!filterBrandEnable}
              className='w-full'
            />
          </div>
        </Box>

        <Box className='flex justify-center'>
          <Button
            sx={{ mt: 2 }}
            size='large'
            variant="outlined"
            color="primary"
            startIcon={<GetAppIcon />} // Agrega el ícono de reporte al botón
            onClick={handleGenerarInforme}
          >
            Generar Informe
          </Button>
        </Box>

      </form>
      <SnackBar notificationOpen={snackbarOpen} notificationMessage={snackbarMessage} setNotificationOpen={setSnackbarOpen} notificationSeverity={snackbarSeverity} />
    </div>
  );
}

export default ReportsEquipments;
