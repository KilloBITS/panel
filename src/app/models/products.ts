class Product {
  id: number;
  title: any;
  text: any;
  img: string;
  price: number;
  views: number;
  type: number;
  category: number;
  length: number;
  availability: boolean;
  sale: object;
  color: string;
  photo: any;
  meta: object;
}

export class Products {
  [index: number]: Product
}
