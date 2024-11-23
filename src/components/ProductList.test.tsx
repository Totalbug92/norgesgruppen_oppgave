import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductList from './ProductList';
import { ProductType } from '../mockdata/products';

const mockData: ProductType[] = [
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
];
test('renders ProductList with correct number of items', () => {
  const { container } = render(<ProductList data={mockData} />);
  const items = container.getElementsByClassName('product-list-item');
  expect(items.length).toBe(mockData.length);
});

test('renders ProductList with correct item content', () => {
    const { getByText } = render(<ProductList data={mockData} />);
    mockData.forEach(product => {
        expect(getByText(product.name)).toBeInTheDocument();
        expect(getByText(`${product.description}`)).toBeInTheDocument();
    });
});