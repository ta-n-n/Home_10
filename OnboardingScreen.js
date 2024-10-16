import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../kiemtra/assets/onboardingbackground.jpg')} // Đường dẫn ảnh nền
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Image
              source={require('../kiemtra/assets/carrot.png')} // Đường dẫn hình cà rốt
              style={styles.carrotImage} // Sử dụng style cho hình cà rốt
            />
            <Text style={styles.title}>Welcome to our store</Text>
          </View>
          <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>

          {/* Nút Get Started */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
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
    justifyContent: 'flex-end',  // Đẩy nội dung xuống dưới
    paddingBottom: 140,  // Khoảng cách từ nội dung tới đáy màn hình
  },
  content: {
    alignItems: 'center',
    marginBottom: 30,  // Điều chỉnh khoảng cách nội dung với nút
  },
  titleContainer: {
    alignItems: 'center', // Căn giữa theo chiều ngang
    marginBottom: 10,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10, // Khoảng cách từ hình cà rốt đến chữ "Welcome"
  },
  carrotImage: {
    width: 60, // Giảm chiều rộng của hình cà rốt
    height: 60, // Giảm chiều cao của hình cà rốt
    resizeMode: 'contain', // Giữ tỉ lệ khung hình
    position: 'absolute', // Đặt hình ở vị trí tuyệt đối
    bottom: 120, // Giảm giá trị này để di chuyển hình cà rốt lên cao hơn
  },
  subtitle: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',  // Màu nền xanh lá cây
    paddingVertical: 25,
    paddingHorizontal: 100,
    borderRadius: 25,  // Bo tròn góc
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',  // Màu chữ trắng
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
