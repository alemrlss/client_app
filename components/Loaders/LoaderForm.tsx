import { Box, Skeleton } from '@mui/material'
import React from 'react'

type Props = {}

function LoaderTables({ }: Props) {
    return (
        <Box sx={{ width: '100%', margin: "0px 0px" }}>
            <Skeleton height={90} />
            <Skeleton height={80} />
            <Skeleton animation='pulse' height={80} />
            <Skeleton animation='pulse' height={80} />
            <Skeleton animation='pulse' height={80} />
            <Skeleton animation='pulse' height={80} />
            <Skeleton animation='wave' height={80} />
        </Box>
    )
}

export default LoaderTables