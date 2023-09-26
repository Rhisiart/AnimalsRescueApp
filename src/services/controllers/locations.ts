import instance from "../api/instance";
import { ICoord } from "../model/axios";

export const getLocationByAnimal = async (animalId : number) => {
  try {
    const { data } = await instance.get<ICoord[]>(`locations/animal/${animalId}`);

    return data;
  } catch (error) {
    console.log(`error : ${error}`)
  }
}