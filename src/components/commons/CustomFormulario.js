//formik
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field, Form, Formik, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const CustomFormulario = ({ initialValues, urlFetch, urlNavigate, }) => {
    const navigate = useNavigate();
    const [formulario, setFormulario] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            setLoading(true);
            setError(false);
            fetch(urlFetch, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setLoading(false);
                    alert('Formulario enviado correctamente');
                    navigate(urlNavigate);
                    
                }
                )
                .catch(error => {
                    setError(true);
                    setLoading(false);
                }
                );
        },
        setFieldError: (field, message) => {
            setError(true);
            setLoading(false);
        }
        
    });

    useEffect(() => {
        setFormulario(initialValues);
    }
        , [initialValues]);

    useEffect(() => {
        if (error) {
            formik.setFieldError('mensaje', 'Error en el servidor');
        }
    }, [error]);



    return (
        <Formik {...formik}>
            <Form onSubmit={formik.handleSubmit}>
                {formulario.map(item => (
                    <div key={item.name}>
                        <label htmlFor={item.name}>{item.label}</label>
                        <Field name={item.name} type={item.type} id={item.name} />
                        
                    </div>
                ))}
                <button type="submit">{loading ? 'Cargando...' : 'Enviar'}</button>
                {error && <p>Error al enviar el formulario</p>}
            </Form>
        </Formik>
    );
    


};

CustomFormulario.propTypes = {
    initialValues: PropTypes.array.isRequired,
    urlFetch: PropTypes.string.isRequired,
    urlNavigate: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
}
export default CustomFormulario;

