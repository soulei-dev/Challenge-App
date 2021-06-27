import React from "react";
import { View, StyleSheet, Button } from "react-native";
import Copyright from "../components/Copyright";
import Input from "../components/Input";
import { Formik } from "formik";
import * as yup from "yup";
import styled from "styled-components";

// Function to contact validation
const contactValidationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Adress is required"),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validateOnMount={true}
      onSubmit={(values) => alert(JSON.stringify(values))}
      validationSchema={contactValidationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <View style={styles.container}>
          <View>
            <Logo
              source={require("../../assets/images/undraw_contact_us_15o2.png")}
            />
          </View>
          {/* Inputs content */}
          <View style={{ alignItems: "center" }}>
            <Input
              placeholder="Name"
              label="Name"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
            />
            {errors.name && touched.name && <Errors>{errors.name}</Errors>}
            <Input
              placeholder="Email"
              label="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {errors.email && touched.email && <Errors>{errors.email}</Errors>}
            <Input
              placeholder="Message"
              label="Message"
              onChangeText={handleChange("message")}
              onBlur={handleBlur("message")}
              value={values.message}
            />
            {errors.message && touched.message && (
              <Errors>{errors.message}</Errors>
            )}
            {/* Submit button */}
            <Button
              title="Submit"
              onPress={handleSubmit}
              rounded
              disabled={!isValid}
            />
          </View>
          {/* Footer */}
          <Copyright />
        </View>
      )}
    </Formik>
  );
};

const Errors = styled.Text`
  color: red;
  font-size: 12px;
  font-weight: bold;
  margin-top: 5px;
`;

const Logo = styled.Image`
  width: 390px;
  height: 290px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Contact;
