import React, { useEffect, useState } from 'react';
import { products, ProductType } from '../mockdata/products';

interface ItemsCarouselProps {
  productIds: number[];
}

const mockData = products;

function ItemsCarousel({ productIds }: ItemsCarouselProps) {
  const [productList, setProductList] = useState<ProductType[]>([]);

  useEffect(() => {
    // Filter products based on the provided productIds
    const similarProducts = mockData.filter((product) => productIds.includes(product.id));
    setProductList(similarProducts);
  }, [productIds]);

  return (
    <div
      className="carousel flex overflow-x-scroll space-x-4 p-4 snap-x snap-mandatory"
      role="region"
      aria-label="Product Carousel"
    >
      {productList.map((product) => (
        <div
          key={product.id}
          className="carousel-item flex-shrink-0 w-64 bg-white shadow-md rounded-lg p-4 snap-start"
          role="group"
          aria-labelledby={`product-${product.id}-name`}
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div id={`product-${product.id}-name`} className="mt-2 text-lg font-semibold">
            {product.name}
          </div>
          <div className="text-gray-500">${product.price}</div>
        </div>
      ))}
    </div>
  );
}

ItemsCarousel.displayName = 'ItemsCarousel';

export default ItemsCarousel;
