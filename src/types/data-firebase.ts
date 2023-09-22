export interface Hotel {
  id: number;
  name: string;
  city: string;
  image: string;
  price: number;
  rating: number;
  tag: string;
  comments: string[];
  describe : string
}


export interface Activity {
  id : number
  city : string
  image : string
  title :string
}