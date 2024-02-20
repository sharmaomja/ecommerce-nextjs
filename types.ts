export interface User {
  id: string;
  email: string;
  password: string;
  phone: string;
  gstn: string;
}


export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: number;
  isFeatured: boolean;
  isArchived: boolean;
  size: Size | null;
  color: Color | null;
  gender: Gender | null;
  images: Image[];
  description: string | null;
  material: string | null;
  videoRequest: string | null;
  brand: string | null;
  mrp: number | null;
  dimension: number | null;
  itemsInPackaging: number | null;
  productTitle: string | null;
  aboutProduct: string | null;
}


export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Gender {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface Image {
  id: string;
  url: string;
}
