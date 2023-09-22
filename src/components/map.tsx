import { styles } from "@/styles/styles";
import React from "react";
import { View } from "react-native";
import MapView from "react-native-maps";

interface IProps {

}

const Map : React.FC<IProps> = () => {
  
  

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
      />
    </View>
  )
}

export default React.memo(Map);