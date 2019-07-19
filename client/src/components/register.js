import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Register({ values, errors, touched, }){

    return(
        <Form className="form">
            <div className="form-group">
                <label className="label">Username: </label>
                <Field
                    className="input"
                    name="username"
                    type="text"
                    autoComplete="off"
                />
            </div>
            <div className="form-group">
                <label className="label">Password: </label>
                <Field
                    className="input"
                    name="password"
                    type="password"
                    autoComplete="off"
                />
            </div>
            <button className="btn">Register &rarr;</button>
        </Form>
    );

}


export default withFormik({
    mapPropsToValues(token, setToken, username, password){
        return{
            username: username || '',
            password: password || '',
            token: token,
            setToken: setToken
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required(),
        password: Yup.string()
            .min(8)
            .required()
    }),
    handleSubmit(values) {
        const url = 'http://localhost:5000/api/register';
        axios
            .post(url, values)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                values.token.setToken(res.data.token)
            })
            .catch(err => {
                console.log(err);
            });
    }
})(Register);