import { getLocationByAnimal } from "@/services/controllers/locations";
import { ISighting } from "@/services/model/axios";
import React from "react";
import { Marker, MarkerPressEvent } from "react-native-maps";

interface IProps {
  sighting : ISighting
}

const Pin : React.FC<IProps> = ({ sighting }) => {
  const handleOnPress = async (event: MarkerPressEvent) => {
    try {
      const locations = await getLocationByAnimal(sighting.animal_id);

      console.log(locations);
    } catch (error) {
      console.log(error);
    }
  }
  
  return(
    <Marker 
      key={sighting.animal_id}
      coordinate={{
        latitude: sighting.latitude,
        longitude: sighting.longitude
      }}
      onPress={handleOnPress}
    />
  )
}

export default React.memo(Pin);