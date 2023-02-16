import api from "./api";

export interface PropsProducts {
  name: string;
  shortDescription: string;
  id: string;
  images: [
    {
      alt: string;
      asset: {
        url: string;
      }
    }
  ],
  category: {
    _id: string;
    name: string;
  }
};

export const getProducts = async () => {
  try {
    const { data } = await api.get('products.json');
    return data.data.nodes;
  } catch (error) {
    console.error(error);
  };
};