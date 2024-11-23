import React from 'react';
import { ProductType } from '../mockdata/products';
import ProductViewModal from './ProductViewModal';

interface Props {
    product: ProductType;
}

function ProductListItem({ product }: Props) {
    const [dialogOpen, setDialogOpen] = React.useState<boolean>(false);

    // Function to open the dialog
    const handleOpenDialog = (): void => {
        setDialogOpen(true);
    };

    // Function to close the dialog
    const handleCloseDialog = (): void => {
        setDialogOpen(false);
    };

    return (
        <li>
            <div className='product-list-item'>
                <div>
                    <img 
                        src={product.imageUrl} 
                        alt={product.name} 
                        width="160"
                        height="160"
                        className="w-full h-40 object-contain"
                        aria-hidden="true"
                    />
                </div>
                <div className="p-4">
                    <h2 className="text-lg font-bold" itemProp="name">{product.name}</h2>
                    <p className="text-gray-600" itemProp="additionalProperty" itemScope itemType="http://schema.org/PropertyValue">
                        <span itemProp="name">Description: </span>{product.description}
                    </p>
                    <p className="text-xl font-semibold mt-2" itemProp="offers" itemScope itemType="http://schema.org/Offer" aria-label={`Price: ${product.price.toString()} Kr`}>
                        {product.price.toString()} Kr
                    </p>
                    <button 
                        className="mt-4 w-full"
                        onClick={handleOpenDialog}
                        aria-label={`View details of ${product.name}`}
                    >
                      View details
                    </button>
                </div>
            </div>
            {/* Modal to view product details */}
            <ProductViewModal data={product} isOpen={dialogOpen} onClose={handleCloseDialog} />
        </li>
    );
};

ProductListItem.displayName = 'ProductListItem';

export default ProductListItem;
