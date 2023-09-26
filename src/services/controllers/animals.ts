import instance from "../api/instance";
import { ISighting } from "../model/axios";

export const getAnimalByArea = async (latitude : number, longitude : number, distance : number) => {
  try {
    const url = `/animals/area?latitude=${latitude}&longitude=${longitude}&distance=${distance}`;
    
    const { data } = await instance.get<ISighting[]>(url);

    return data;
  } catch (error) {
    console.log(`error : ${error}`)
  }
}