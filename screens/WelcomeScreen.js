import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["rgba(203, 133, 255, 1)", "rgba(203, 176, 255, 1)"]}
      className="h-full w-full flex-1"
    >
      <View className="flex-1 justify-around">
        <Text className="font-bold text-center text-3xl">
          Let's get Started
        </Text>
        <View className="items-center">
          <Image
            source={require("../image/Welcome.png")}
            style={{ height: 340, width: 340 }}
          />
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
          <View className="p-5 bg-blue-200 rounded-2xl m-4 shadow">
            <Text className="text-2xl font-bold text-center text-gray-900">
              SignUp
            </Text>
          </View>
        </TouchableOpacity>

        <View className="flex-row">
          <Text className="text-center ml-28 mt-auto text-lg">
            Already have an account?
          </Text>
          <TouchableOpacity className="ml-1" onPress={()=> navigation.navigate('Login')}>
            <Text className="font-bold text-center text-lg">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default WelcomeScreen;
