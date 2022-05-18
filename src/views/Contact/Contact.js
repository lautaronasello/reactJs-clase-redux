import { Grid } from '@mui/material';
import React from 'react';
import FormularioContacto from '../../components/formulario/FormularioContacto';
import FormularioSugerencias from '../../components/formulario/FormularioSugerencias';
import EnConstruccion from '../../components/UnderConstruction/EnConstruccion';

const styles = {
	container: {
		margin: '40px 0 40px 0',
	},
};

const Contact = () => {
	return (
		<div style={styles.container}>
			<EnConstruccion />
			<Grid container>
				<Grid item xs={12} sm={6}>
					<FormularioContacto />
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormularioSugerencias />
				</Grid>
			</Grid>
			
		</div>
	);
};

export default Contact;
