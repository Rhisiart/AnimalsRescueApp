import Map from "@/components/map";
import { styles } from "@/styles/styles";
import * as Location from "expo-location";
import React, { useEffect } from "react";
import { Text, View } from "react-native";



export default function Find() {
  const [status, requestPermission] = Location.useForegroundPermissions();

  useEffect(() => {
    requestPermission();
  }, [])

  return (
    <View style={styles.container}>
    {
      status && status.granted 
      ? <Map />
      : <Text>Need to accept the permissions to give access to location</Text>
    }
    </View>
  )
}