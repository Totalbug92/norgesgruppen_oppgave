import React from 'react'
import { ProductType } from '../mockdata/products'
import ProductListItem from './ProductListItem';

interface Props {
    data: ProductType[]
}

function ProductList({ data }: Props) {
    return (
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {data.map((product) => (
                <ProductListItem key={product.id} product={product} />
            ))}
        </ul>
    );
}

ProductList.displayName = 'ProductList';

export default ProductList;