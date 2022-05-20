import { Grid } from '@mui/material'
import React from 'react'
import FormularioRegistro from '../../components/formulario/FormularioRegistro'
import EnConstruccion from '../../components/UnderConstruction/EnConstruccion'


export default function RegisterPage() {
    return (
        
        <div>
        <EnConstruccion />
        <Grid container>
            <Grid item xs={12} sm={6}>
                <FormularioRegistro />
            </Grid>
        </Grid>
        
    </div>

    )
}