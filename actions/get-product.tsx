import { Product } from "@/types";

const URL=`http://localhost:3001/api/bdc7be9d-413f-4964-b4f8-0c4a077d8b9f/products`;

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getProduct;
