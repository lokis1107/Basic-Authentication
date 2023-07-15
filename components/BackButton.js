import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {

    const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity className="m-2 mt-3" onPress={()=> navigation.goBack()}>
        <ArrowLeftIcon size={28} color={"black"} />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
