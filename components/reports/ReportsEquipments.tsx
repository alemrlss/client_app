"use client"
import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { Box, FormControl, InputLabel, MenuItem } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';

function ReportsEquipments() {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('default');
  const [careCenter, setCareCenter] = useState('default');
  const [operative, setOperative] = useState(false);
  const [filterNameEnable, setFilterNameEnable] = useState(false);
  const [filterBrandEnable, setFilterBrandEnable] = useState(false);
  const [filterCareCenterEnable, setFilterCareCenterEnable] = useState(false);
  const [filterStatusEnable, setFilterStatusEnable] = useState(false);
  const [errors, setErrors] = useState({});


  const handleGenerarInforme = () => {
    const newErrors = {}; // Objeto para almacenar los errores

    if (filterNameEnable && name.trim() === '') {
      newErrors.name = 'El campo Nombre no puede estar vacío.';
    }

    if (filterCareCenterEnable && careCenter === 'default') {
      newErrors.careCenter = 'Por favor, seleccione un Centro de Salud.';
    }

    if (filterBrandEnable && brand === 'default') {
      newErrors.brand = 'Por favor, seleccione una Marca.';
    }

    // Verificar si hay errores
    if (Object.keys(newErrors).length > 0) {
      // Mostrar los errores
      setErrors(newErrors);
    } else {
      // Si no hay errores, continuar con la generación del informe
      const filters = {
        name: filterNameEnable ? name : null,
        brand: filterBrandEnable ? brand : null,
        careCenter: filterCareCenterEnable ? careCenter : null,
        operative: filterStatusEnable ? operative : null,
      };

      console.log('Esto es lo que se va a enviar al backend', filters);

      // Limpiar los errores
      setErrors({});
    }
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
                <MenuItem value="Centro1">Centro 1</MenuItem>
                <MenuItem value="Centro2">Centro 2</MenuItem>
                <MenuItem value="Centro3">Centro 3</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Box>

        <Box className="flex items-center space-x-2">
          <div className="w-2/6 bg-gray-200 p-1 rounded">
            <label className="m-1">
              Marca
            </label>
            <Switch
              checked={filterBrandEnable}
              onChange={() => setFilterBrandEnable(!filterBrandEnable)}
            />
          </div>
          <div className=" w-4/6">
            <FormControl variant="standard" fullWidth>
              <InputLabel id="marca-select-label">Marca</InputLabel>
              <Select
                labelId="marca-select-label"
                label="Marca"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                disabled={!filterBrandEnable}
              >
                <MenuItem value="default">Seleccione una Marca</MenuItem>
                <MenuItem value="Maracaibo">Maracaibo</MenuItem>
                <MenuItem value="San Francisco">San Francisco</MenuItem>
                <MenuItem value="Ciudad Ojeda">Ciudad Ojeda</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Box>
        {errors.name && (
          <p className="text-red-500">{errors.name}</p>
        )}
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
    </div>
  );
}

export default ReportsEquipments;
