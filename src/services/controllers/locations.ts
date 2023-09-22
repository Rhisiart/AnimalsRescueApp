import instance from "../api/instance";

export const getLocationByAnimal = async (animalId : number) => {
  try {
    const { data } = await instance.get(`locations/animal/${animalId}`);

    return data;
  } catch (error) {
    console.log(`error : ${error}`)
  }
}