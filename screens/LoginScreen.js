import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import BackButton from "../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (mail && password) {
      try {
        await signInWithEmailAndPassword(auth, mail, password);
      } catch (err) {
        Alert.alert("Error", "Please Enter valid mail address and password...");
      }
    } else {
      Alert.alert("Error", "Please Enter valid data");
    }
  };

  return (
    <LinearGradient
      colors={["rgba(203, 133, 255, 1)", "rgba(203, 176, 255, 1)"]}
      className="h-full w-full flex-1"
    >
      <BackButton />
      <View className="items-center">
        <Image
          source={require("../image/Login.png")}
          style={{ height: 300, width: 300 }}
        />
      </View>
      <View
        className="flex-1 bg-white"
        style={{ borderTopRightRadius: 50, borderTopLeftRadius: 50 }}
      >
        <Text className="text-center font-bold text-2xl pt-4">
          Welcome Back!
        </Text>
        <View className="form mt-5">
          <Text className="font-bold text-lg ml-4">Email Address</Text>
          <TextInput
            className="p-5 bg-purple-200 m-3 rounded-2xl mb-5"
            value={mail}
            onChangeText={(v) => setMail(v)}
          />
          <Text className="font-bold text-lg ml-4">Password</Text>
          <TextInput
            className="p-5 bg-purple-200 m-3 rounded-2xl mb-5"
            secureTextEntry
            value={password}
            onChangeText={(v) => setPassword(v)}
          />
        </View>
        <View className="p-5 bg-blue-200 ml-20 mr-20 mt-5 rounded-2xl mb-5">
          <TouchableOpacity onPress={handleLogin}>
            <Text className="text-center font-bold text-lg">SignIn</Text>
          </TouchableOpacity>
        </View>
        <View className="items-end mr-5">
          <TouchableOpacity
            className="flex-row"
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text className="font-bold text-lg">Create a new account!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;
