export const products = [
    {
      id: 1,
      name: 'Product 1',
      imageUrl: 'https://bilder.ngdata.no/7035620048555/meny/medium.jpg',
      price: 10.99,
      description: 'A description for Product 1',
      nutritionalContent: {
        calories: 150,
        protein: 10,
        carbohydrates: 20,
        fat: 5,
      },
      relatedProducts: [2, 3],
    },
    {
      id: 2,
      name: 'Product 2',
      imageUrl: 'https://bilder.ngdata.no/7031540004305/meny/medium.jpg',
      price: 10.99,
      description: 'A description for Product 2',
      nutritionalContent: {
        calories: 120,
        protein: 8,
        carbohydrates: 15,
        fat: 4,
      },
      relatedProducts: [1, 4],
    },
    {
      id: 3,
      name: 'Product 3',
      imageUrl: 'https://bilder.ngdata.no/7048840081950/meny/medium.jpg',
      price: 10.99,
      description: 'A description for Product 3',
      nutritionalContent: {
        calories: 140,
        protein: 9,
        carbohydrates: 18,
        fat: 4.5,
      },
      relatedProducts: [1, 4],
    },
    {
      id: 4,
      name: 'Product 4',
      imageUrl: 'https://bilder.ngdata.no/7033330013290/meny/medium.jpg',
      price: 10.99,
      description: 'A description for Product 4',
      nutritionalContent: {
        calories: 130,
        protein: 9.5,
        carbohydrates: 16,
        fat: 4,
      },
      relatedProducts: [2, 3],
    },
    {
      id: 5,
      name: 'Product 5',
      imageUrl: 'https://bilder.ngdata.no/7035620048555/meny/medium.jpg',
      price: 10.99,
      description: 'A description for Product 5',
      nutritionalContent: {
        calories: 160,
        protein: 11,
        carbohydrates: 22,
        fat: 5.5,
      },
      relatedProducts: [6, 7],
    },
    {
      id: 6,
      name: 'Product 6',
      imageUrl: 'https://bilder.ngdata.no/7031540004305/meny/medium.jpg',
      price: 10.99,
      description: 'A description for Product 6',
      nutritionalContent: {
        calories: 140,
        protein: 10,
        carbohydrates: 19,
        fat: 4.5,
      },
      relatedProducts: [5, 8],
    },
    {
      id: 7,
      name: 'Product 7',
      imageUrl: 'https://bilder.ngdata.no/7048840081950/meny/medium.jpg',
      price: 10.99,
      description: 'A description for Product 7',
      nutritionalContent: {
        calories: 150,
        protein: 10.5,
        carbohydrates: 20,
        fat: 5,
      },
      relatedProducts: [5, 8],
    },
    {
      id: 8,
      name: 'Product 8',
      imageUrl: 'https://bilder.ngdata.no/7033330013290/meny/medium.jpg',
      price: 10.99,
      description: 'A description for Product 8',
      nutritionalContent: {
        calories: 140,
        protein: 10,
        carbohydrates: 19,
        fat: 4.5,
      },
      relatedProducts: [6, 7],
    },
    {
      id: 9,
      name: 'Product 9',
      imageUrl: 'https://bilder.ngdata.no/7035620048555/meny/medium.jpg',
      price: 11.99,
      description: 'A description for Product 9',
      nutritionalContent: {
        calories: 170,
        protein: 12,
        carbohydrates: 21,
        fat: 6,
      },
      relatedProducts: [10, 12],
    },
    {
      id: 10,
      name: 'Product 10',
      imageUrl: 'https://bilder.ngdata.no/7031540004305/meny/medium.jpg',
      price: 11.99,
      description: 'A description for Product 10',
      nutritionalContent: {
        calories: 180,
        protein: 12.5,
        carbohydrates: 22,
        fat: 6.5,
      },
      relatedProducts: [9, 11],
    },
    {
      id: 11,
      name: 'Product 11',
      imageUrl: 'https://bilder.ngdata.no/7048840081950/meny/medium.jpg',
      price: 11.99,
      description: 'A description for Product 11',
      nutritionalContent: {
        calories: 175,
        protein: 12,
        carbohydrates: 20,
        fat: 6,
      },
      relatedProducts: [10, 12],
    },
    {
      id: 12,
      name: 'Product 12',
      imageUrl: 'https://bilder.ngdata.no/7033330013290/meny/medium.jpg',
      price: 11.99,
      description: 'A description for Product 12',
      nutritionalContent: {
        calories: 170,
        protein: 12.5,
        carbohydrates: 21,
        fat: 6.5,
      },
      relatedProducts: [9, 11],
    },
    {
      id: 13,
      name: 'Product 13',
      imageUrl: 'https://bilder.ngdata.no/7035620048555/meny/medium.jpg',
      price: 12.99,
      description: 'A description for Product 13',
      nutritionalContent: {
        calories: 190,
        protein: 13,
        carbohydrates: 23,
        fat: 7,
      },
      relatedProducts: [14, 15],
    },
    {
      id: 14,
      name: 'Product 14',
      imageUrl: 'https://bilder.ngdata.no/7031540004305/meny/medium.jpg',
      price: 12.99,
      description: 'A description for Product 14',
      nutritionalContent: {
        calories: 200,
        protein: 13.5,
        carbohydrates: 24,
        fat: 7.5,
      },
      relatedProducts: [13, 15],
    },
    {
      id: 15,
      name: 'Product 15',
      imageUrl: 'https://bilder.ngdata.no/7048840081950/meny/medium.jpg',
      price: 12.99,
      description: 'A description for Product 15',
      nutritionalContent: {
        calories: 195,
        protein: 13,
        carbohydrates: 23,
        fat: 7,
      },
      relatedProducts: [13, 14],
    },
  ];
  interface NutritionalContent {
    calories: number;
    protein: number;
    carbohydrates: number;
    fat: number;
  }

  export interface ProductType {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    nutritionalContent: NutritionalContent;
    relatedProducts: number[];
  }