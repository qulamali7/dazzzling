import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export const AddForm = () => {
    function handleSubmit(values) {
        fetch('http://localhost:3100/blogs', {
            method: 'POST',
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
        })
    }
    return (
        <Formik
            initialValues={{ img: '', title: '', category: '', description: '' }}
            validationSchema={Yup.object({
                img: Yup.string()
                    .required('Required'),
                title: Yup.string()
                    .required('Required'),
                category: Yup.string().required('Required'),
                description: Yup.string().required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                handleSubmit(values)
                setSubmitting(false);
            }}
        >
            <Form>
                <label htmlFor="img">Img Url</label>
                <Field name="img" type="text" />
                <ErrorMessage name="img" />

                <label htmlFor="title">Title</label>
                <Field name="title" type="text" />
                <ErrorMessage name="title" />

                <label htmlFor="category">Category</label>
                <Field name="category" type="text" />
                <ErrorMessage name="category" />

                <label htmlFor="description">Description</label>
                <Field name="description" type="text" />
                <ErrorMessage name="description" />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};