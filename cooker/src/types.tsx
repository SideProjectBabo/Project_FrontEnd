export interface RestaurantType {
    image: string;
    name: string;
    id: number;
    description: string;
    url: string | undefined;
  }

  export interface actionType {
    type: string;
   
  }
  
  export interface counterStateType{
    counter:number
  }
  export interface authStateType{
    auth:number
  }