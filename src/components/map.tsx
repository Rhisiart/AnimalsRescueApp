import { styles } from "@/styles/styles";
import { Accuracy, LocationObject, LocationOptions, getCurrentPositionAsync, } from "expo-location";
import React from "react";
import { View } from "react-native";
import MapView from "react-native-maps";

interface IProps {

}

const Map : React.FC<IProps> = () => {
  const [currentLocation, setCurrentLocation] = React.useState<LocationObject>();

  const getCurrentLocation = async () => {
    try {
      const options : LocationOptions = {
        accuracy: Accuracy.Highest,
        mayShowUserSettingsDialog: true
      }
      const locationObj = await getCurrentPositionAsync(options);

      setCurrentLocation(locationObj);
    } catch (error) {
      console.log(error);
    }
  }


  React.useEffect(() => {
    getCurrentLocation();
  }, [])

  return (
    <View style={styles.container}>
    {
      currentLocation &&
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
          latitudeDelta : 0.0922,
          longitudeDelta: 0.0421
        }}
      >
      </MapView>
    }
    </View>
  )
}

export default React.memo(Map);