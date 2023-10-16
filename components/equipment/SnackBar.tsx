"use client"
import { Box, IconButton, Snackbar, SnackbarContent, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

import { useState } from 'react'
import React from 'react'

type Props = {
    notificationOpen: boolean,
    notificationMessage: string,
    setNotificationOpen: React.Dispatch<React.SetStateAction<boolean>>;
    notificationSeverity: string,
}

function SnackBar({ notificationOpen, notificationMessage, setNotificationOpen, notificationSeverity }: Props) {

    return (
        <Snackbar
            className='text-2xl'
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={notificationOpen}
            autoHideDuration={3000}
            onClose={() => setNotificationOpen(false)}
        >
            <SnackbarContent
                message={
                    <Box display="flex" alignItems="center">

                        {notificationSeverity === 'success' ? <CheckCircleIcon sx={{ fontSize: 30, marginRight: 1 }} /> : <ErrorIcon sx={{ fontSize: 30, marginRight: 1 }} />}

                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            {notificationMessage}
                        </Typography>
                    </Box>
                }
                action={
                    <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={() => setNotificationOpen(false)}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                }
                sx={{
                    backgroundColor: notificationSeverity === 'success' ? '#01A019' : '#D80A0A', // Colores personalizados para notificaciones de éxito y error

                }}
            />
        </Snackbar>)
}

export default SnackBar