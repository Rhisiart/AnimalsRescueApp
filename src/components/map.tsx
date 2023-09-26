import { getAnimalByArea } from "@/services/controllers/animals";
import { ISighting } from "@/services/model/axios";
import { styles } from "@/styles/styles";
import { Accuracy, LocationObject, LocationOptions, getCurrentPositionAsync, } from "expo-location";
import React from "react";
import { View } from "react-native";
import MapView, { MarkerPressEvent } from "react-native-maps";
import Pin from "./pin";


interface IProps {

}

const Map : React.FC<IProps> = () => {
  const [currentLocation, setCurrentLocation] = React.useState<LocationObject>();
  const [closeSightings, setCloseSightings] = React.useState<ISighting[]>();

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

  const getCloseAnimalsFromCurrentLocation = async (currentLocation : LocationObject) => {
    try {
      const animals = await getAnimalByArea(currentLocation.coords.latitude, currentLocation.coords.longitude, 100);

      setCloseSightings(animals);
    } catch (error) {
      console.log(error);
    }
  }

  const pressMark = (event: MarkerPressEvent) => {
    console.log(event);
  }

  React.useEffect(() => {
    getCurrentLocation();
  }, [])

  React.useEffect(() => {
    if(!currentLocation) 
      return;

    getCloseAnimalsFromCurrentLocation(currentLocation);
  }, [currentLocation])

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
      {
        closeSightings && closeSightings.map((sighting) => {
          return(
            <Pin 
              sighting={sighting}
            />
          )
        })
      }
      </MapView>
    }
    </View>
  )
}

export default React.memo(Map);