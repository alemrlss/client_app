"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

type Props = {
    setPassword: (password: string) => void;
    setEmail: (email: string) => void;
};


function InputsLogin({ setPassword, setEmail }: Props) {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    return (
        <Box className="space-y-4" sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', width: '100%' }}>



            <FormControl sx={{ width: '100%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                <OutlinedInput

                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>

            <FormControl sx={{ m: 0, width: '100%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                <OutlinedInput
                    onChange={(e) => setPassword(e.target.value)}

                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Contraseña"
                />
            </FormControl>




        </Box>
    )
}

export default InputsLogin


