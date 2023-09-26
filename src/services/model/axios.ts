export interface ISighting extends ICoord {
  animal_id: number,
  animal_name: string
}

export interface ICoord {
  latitude : number,
  longitude : number
}