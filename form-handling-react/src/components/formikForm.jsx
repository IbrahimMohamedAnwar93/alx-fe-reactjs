import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./RegistrationForm.css";

// Validation schema with Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const FormikForm = () => {
  return (
    <div>
      <h2>Register</h2>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // This is where you would handle the form submission
          alert(
            "Form submitted with values: " + JSON.stringify(values, null, 2)
          );
        }}
      >
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="span" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="span" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="span" />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
