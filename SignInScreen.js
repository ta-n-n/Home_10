import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground,Image } from 'react-native';
import PhoneInput from 'react-native-phone-number-input'; // Import PhoneInput

const SignInScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef(null); // Tạo tham chiếu cho PhoneInput

  return (
    <ImageBackground
      source={require('../kiemtra/assets/signinbackground.jpg')} // Đường dẫn ảnh nền
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>Get your groceries with nectar</Text>

          {/* Phần nhập số điện thoại */}
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            defaultCode="VN"
            layout="first"
            placeholder="Nhập số điện thoại"
            onChangeText={(text) => {
              setPhoneNumber(text); // Sử dụng setPhoneNumber
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withShadow
            autoFocus
            containerStyle={styles.phoneInputContainer}
            textContainerStyle={styles.phoneInputTextContainer}
          />

          {/* Nút Continue with Google */}
          <TouchableOpacity style={styles.googleButton}>
            <Image 
              source={require('../kiemtra/assets/googlelogo.png')} // Đường dẫn logo Google
              style={styles.googleLogo} // Sử dụng style riêng cho logo Google
            />
            <Text style={styles.buttonTextGoogle}>Continue with Google</Text>
          </TouchableOpacity>

          {/* Nút Continue with Facebook */}
          <TouchableOpacity style={styles.facebookButton}>
            <Image 
              source={require('../kiemtra/assets/facebooklogo.png')} // Đường dẫn logo Facebook
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
  phoneInputContainer: {
    width: '100%',  // Để nút chiếm toàn bộ chiều rộng
    borderRadius: 25,
    marginBottom: 20,
    backgroundColor: '#fff', // Nền trắng cho ô nhập
  },
  phoneInputTextContainer: {
    backgroundColor: '#fff', // Nền trắng cho ô nhập
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
