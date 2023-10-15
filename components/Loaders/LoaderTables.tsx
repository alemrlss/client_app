import { Box, Skeleton } from '@mui/material'
import React from 'react'

type Props = {}

function LoaderTables({ }: Props) {
    return (
        <Box sx={{ width: '100%', margin: "0px 10px" }}>
            <Skeleton height={50} />
            <Skeleton animation="wave" height={60} />
            <Skeleton animation="wave" height={60} />
            <Skeleton animation="wave" height={60} />
            <Skeleton animation="wave" height={60} />
            <Skeleton animation="wave" height={60} />
            <Skeleton animation="wave" height={60} />
            <Skeleton animation="wave" height={60} />
            <Skeleton animation="wave" height={60} />
            <Skeleton animation="wave" height={60} />
        </Box>
    )
}

export default LoaderTables