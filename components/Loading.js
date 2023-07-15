import { View, Text, ActivityIndicator } from 'react-native'
import React, { lazy } from 'react'

const Loading = () => {
  return (
    <View className="flex-row justify-center py-3">
      <ActivityIndicator size={'large'} color={'purple'}/>
    </View>
  )
}

export default Loading