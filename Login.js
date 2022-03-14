import React from 'react';
import { Text } from 'react-native'

const Login = ({navigation}) => {
  
  const goToRegister = () => {
       navigation.navigate('Register');

  }
  
  
  
  return(
       <Text onPress={goToRegister}>Ir para o Login</Text>
  );
}


export default Login;
