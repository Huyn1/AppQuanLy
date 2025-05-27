import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [branch, setBranch] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  // Validate form dữ liệu
  const validateForm = () => {
    if (!branch.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập chi nhánh');
      return false;
    }
    if (!username.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập tên đăng nhập');
      return false;
    }
    if (!password.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập mật khẩu');
      return false;
    }
    return true;
  };

  const handleCashierLogin = () => {
    if (validateForm()) {
      // TODO: Thêm xác thực tài khoản ở đây nếu cần
      navigation.navigate('MainApp');
    }
  };

  const handleOrderLogin = () => {
    if (validateForm()) {
      // TODO: Thêm xác thực tài khoản ở đây nếu cần
      navigation.navigate('MainApp');
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Chi nhánh"
        value={branch}
        onChangeText={setBranch}
        mode="outlined"
        style={styles.input}
        left={<TextInput.Icon icon="store" />}
      />

      <TextInput
        label="Tên đăng nhập"
        value={username}
        onChangeText={setUsername}
        mode="outlined"
        style={styles.input}
        left={<TextInput.Icon icon="account" />}
      />

      <TextInput
        label="Mật khẩu"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={hidePassword}
        mode="outlined"
        style={styles.input}
        left={<TextInput.Icon icon="lock" />}
        right={
          <TextInput.Icon
            icon={hidePassword ? 'eye-off' : 'eye'}
            onPress={() => setHidePassword(!hidePassword)}
          />
        }
      />

      <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
        <Text style={{ color: 'orange' }}>Quên mật khẩu?</Text>
      </TouchableOpacity>

      <Button
        mode="contained"
        onPress={handleCashierLogin}
        style={styles.button}
        labelStyle={{ color: 'white', fontWeight: 'bold' }}
      >
        MÀN HÌNH THU NGÂN
      </Button>

      <Button
        mode="outlined"
        onPress={handleOrderLogin}
        style={styles.buttonOutline}
        labelStyle={{ color: 'orange', fontWeight: 'bold' }}
      >
        NHÂN VIÊN ORDER
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    marginVertical: 5,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginVertical: 5,
  },
  button: {
    marginTop: 15,
    backgroundColor: 'orange',
    paddingVertical: 5,
  },
  buttonOutline: {
    marginTop: 10,
    borderColor: 'orange',
    borderWidth: 1,
    paddingVertical: 5,
  },
});
