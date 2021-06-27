import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Button,
  Text,
  ScrollView,
} from "react-native";
import Copyright from "../components/Copyright";
import Input from "../components/Input";
import { Formik } from "formik";
import * as yup from "yup";

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
          <ScrollView>
            <View>
              <Image
                source={require("../../assets/images/undraw_contact_us_15o2.png")}
                style={styles.logo}
              />
            </View>
            {/* Input */}
            <View style={{ alignItems: "center" }}>
              <Input
                placeholder="Name"
                label="Name"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              {errors.name && touched.name && (
                <Text style={styles.errors}>{errors.name}</Text>
              )}
              <Input
                placeholder="Email"
                label="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {errors.email && touched.email && (
                <Text style={styles.errors}>{errors.email}</Text>
              )}
              <Input
                placeholder="Message"
                label="Message"
                onChangeText={handleChange("message")}
                onBlur={handleBlur("message")}
                value={values.message}
              />
              {errors.message && touched.message && (
                <Text style={styles.errors}>{errors.message}</Text>
              )}
              <Button
                title="Submit"
                onPress={handleSubmit}
                rounded
                disabled={!isValid}
              />
            </View>
          </ScrollView>
          <Copyright />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 390,
    height: 290,
  },
  errors: {
    color: "red",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default Contact;
