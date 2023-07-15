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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import Loading from "../components/Loading";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    if (mail && password) {
      try {
        await createUserWithEmailAndPassword(auth, mail, password);
      } catch (err) {
        Alert.alert("Error", "Please Enter valid mail address and password...");
      }
    } else {
      Alert.alert("Error", "Please Enter the Valid Data");
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
          source={require("../image/signup.png")}
          style={{ height: 300, width: 300 }}
        />
      </View>
      <View
        className="flex-1 bg-white"
        style={{ borderTopRightRadius: 50, borderTopLeftRadius: 50 }}
      >
        <View className="form mt-5">
          <Text className="font-bold text-lg ml-4">Full Name</Text>
          <TextInput
            className="p-4 bg-purple-200 m-3 rounded-2xl mb-2"
            placeholder="Full Name"
          />
          <Text className="font-bold text-lg ml-4">Email Address</Text>
          <TextInput
            className="p-4 bg-purple-200 m-3 rounded-2xl mb-2"
            value={mail}
            onChangeText={(value) => setMail(value)}
            placeholder="Email Address"
          />
          <Text className="font-bold text-lg ml-4">Password</Text>
          <TextInput
            className="p-4 bg-purple-200 m-3 rounded-2xl mb-2"
            secureTextEntry
            placeholder="Password"
            value={password}
            onChangeText={(v) => setPassword(v)}
          />
        </View>

        <View className="p-3 bg-blue-200 ml-20 mr-20 mt-2 rounded-2xl mb-5">
          <TouchableOpacity onPress={handleSignUp}>
            <Text className="text-center font-bold text-lg">SignUp</Text>
          </TouchableOpacity>
        </View>

        <View className="items-end mr-5">
          <TouchableOpacity
            className="flex-row"
            onPress={() => navigation.navigate("Login")}
          >
            <Text className="font-bold text-lg">Already have an account!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default SignUpScreen;
