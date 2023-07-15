import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase'

const HomeScreen = () => {

  const handleLogout = async()=>{
    await signOut(auth)
  }

  return (
    <LinearGradient
      colors={["rgba(203, 133, 255, 1)", "rgba(203, 176, 255, 1)"]}
      className="h-full w-full flex-1"
    >
    <View className="items-center">
    <Image source={require('../image/Welcome.png')} style={{height:200, width:200}}/>
    </View>
    
    <Text className="font-bold text-xl text-center mt-15">Welcome To the Home Screen. This is Our Home Screen of our application. If you want to logout please click the Given Button.</Text>
    <View>
        <TouchableOpacity className="bg-blue-200 m-20 rounded-2xl p-3" onPress={handleLogout}>
            <Text className="text-center text-2xl font-bold">
                Logout
            </Text>
        </TouchableOpacity>
    </View>
    </LinearGradient>
  )
}

export default HomeScreen