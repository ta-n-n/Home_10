import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground, Image } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <ImageBackground
      source={require('../kiemtra/signinbackground.jpg')} // Đường dẫn ảnh nền
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>Get your groceries with nectar</Text>

          {/* Phần nhập số điện thoại */}
          <TextInput
            style={styles.phoneInput}
            placeholder="Enter your phone number"
            placeholderTextColor="#aaa"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />

          {/* Nút Continue with Google */}
          <TouchableOpacity style={styles.googleButton}>
            <Image 
              source={require('../kiemtra/googlelogo.png')} // Đường dẫn logo Google
              style={styles.googleLogo} // Sử dụng style riêng cho logo Google
            />
            <Text style={styles.buttonTextGoogle}>Continue with Google</Text>
          </TouchableOpacity>

          {/* Nút Continue with Facebook */}
          <TouchableOpacity style={styles.facebookButton}>
            <Image 
              source={require('../kiemtra/facebooklogo.png')} // Đường dẫn logo Facebook
              style={styles.facebookLogo} // Sử dụng style riêng cho logo Facebook
            />
            <Text style={styles.buttonTextFacebook}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',  // Căn giữa nội dung theo chiều dọc
    padding: 20,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  phoneInput: {
    width: '100%',  // Để nút chiếm toàn bộ chiều rộng
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
    width: '100%',  // Để nút chiếm toàn bộ chiều rộng
    borderColor: '#357AE8',
    borderWidth: 2,
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3b5998',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
width: '100%',  // Để nút chiếm toàn bộ chiều rộng
    borderColor: '#29487d',
    borderWidth: 2,
  },
  googleLogo: {
    width: 24,  // Chiều rộng logo Google
    height: 24,  // Chiều cao logo Google
    marginRight: 10,
  },
  facebookLogo: {
    width: 28,  // Chiều rộng logo Facebook
    height: 28,  // Chiều cao logo Facebook
    marginRight: 10,
  },
  buttonTextGoogle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonTextFacebook: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignInScreen;