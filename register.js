import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const witheTheme = {
  colors: { primary: 'white', text: 'white', placeholder: 'white' },
};

const Register = () => {
  const [name, setName] = React.useState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>groovy</Text>
      <TextInput
        label="Your Namee"
        value={name}
        style={styles.input}
        theme={witheTheme}
        underlineColor="white"
      />
      <TextInput
        label="Email"
        value={name}
        onChangeText={(text) => setName(text)}
        mode="flat"
        style={styles.input}
        theme={witheTheme}
        underlineColor="white"
      />
      <TextInpute
        label="Password"
        value={name}
        onChangeText={(text) => setName(text)}
        mode="flat"
        style={styles.input}
        theme={witheTheme}
        underlineColor="white"
      />
      <Button
        icon="rocket"
        mode="contained"
        style={styles.button}
        labelStyle={styles.colorBlack}
        onPress={() => console.log('Pressed')}>
        Let's go
      </Button>
      <View style={styles.row}>
        <Text style={styles.textWhite}>Already Have an account? </Text>
        <Text style={styles.textWhite} onPress={() => console.log('login')}>
          Login
        </Text>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    height: '100%',
    backgroundColor: '#000000',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 30,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 700,
  },
  input: {
    backgroundColor: '#000000',
    width: '100%',
  },
  textWhite: {
    color: 'white',
  },
  row: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: '100%',
    marginTop: 20,
    borderRadius: 50,
    backgroundColor: '#1DE9B6',
  },
  colorBlack: {
    color: '#000000',
  },
});
