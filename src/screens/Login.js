/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { View, Image, Button, Keyboard, SafeAreaView, KeyboardAvoidingView, StyleSheet, Platform, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native';
import { Input } from '../components/Input';
import { loginFun } from '../utils/queries';
// import AsyncStorage from '@react-native-community/async-storage';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Required')
    .email('Please input a correct Email'),
  password: Yup.string().required('Required'),
});


const LoginView = ({ navigation }) => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const submitForm = (values) => {
    setLoading(true);
    Keyboard.dismiss();
    const payload = {
      email: values.email.toString().toLowerCase(),
      password: values.password,
    };
    loginFun(payload)
      .then(res => {
        console.log(res, "api_response");
        setLoading(false);
        navigation.reset({
          index: 0,
          routes: [
            { name: 'Home', params: { first_name: res.data.first_name, last_name: res.data.last_name } },
          ],
        });
      })
      .catch(err => {
        setLoading(false);
        showToast(err.response.data.message);
      });
  };

  const showToast = (data) => {
    ToastAndroid.showWithGravity(
      data,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  return (
    <SafeAreaView style={styles.flexOne}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flexOne}>
        <View style={styles.loginForm}>
          {loading &&
            <View style={{ ...styles.acti, left: '50%', top: 50 }}>
              <ActivityIndicator size="large" color="blue" />
            </View>
          }
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => submitForm(values)}
            validationSchema={validationSchema}>
            
            {
            (
              {
              handleChange,
              handleBlur,
              handleSubmit,
              touched,
              errors,
              isSubmitting,
              values,
              }
            ) => (
              <View>
                <Input
                  inputStyle={styles.text}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"
                  value={values.email}
                  touched={touched.email}
                  error={errors.email}
                  label="Email ID:"
                  required={true}
                />

                <View style={styles.psswordWarp}>
                  <Input
                    inputStyle={styles.text}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={secureTextEntry}
                    touched={touched.password}
                    error={errors.password}
                    label="Password:"
                    required={true}
                  />
                  <TouchableOpacity
                    onPress={() => setSecureTextEntry(!secureTextEntry)}
                  >
                    <Image
                      style={
                        secureTextEntry
                          ? styles.eyeClosedIcon
                          : styles.eyeOpenIcon
                      }
                      source={
                        secureTextEntry
                          ? require('../images/closedEye.png')
                          : require('../images/paswordEye.png')
                      }
                    />
                  </TouchableOpacity>
                </View>
                <Button title={'Log In'} onPress={handleSubmit} />
              </View>  
            )
            }
          
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  acti: {
    flex: 1,
    position: 'absolute',
  },
  flexOne: { flex: 1 },
  loginForm: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  text: {
    width: 250,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(116, 134, 146, 0.5)',
    marginBottom: 30,
    paddingTop: 0,
    paddingBottom: 0,
  },
  psswordWarp: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeClosedIcon: {
    width: 30,
    height: 25,
  },
  eyeOpenIcon: {
    width: 30,
    height: 18,
  },
});

export default LoginView;
