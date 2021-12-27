import React from "react";
import { Formik } from "formik";
const AppForm = ({children,initialValues, onSubmit, validationSchema}) =>{
 return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {()=>(<>{children}</>)}
    </Formik>
 );
    }

export default AppForm;