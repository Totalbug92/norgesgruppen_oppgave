import React from 'react';
import 'tailwindcss/tailwind.css';
import { ProductType } from '../mockdata/products';
import classNames from 'classnames';
import ItemsCarousel from './ItemsCarousel';

interface Props {
    data: ProductType;
    isOpen: boolean;
    onClose: () => void;
    className?: string;  
}

function ProductViewModal({
    data,
    isOpen,
    onClose,
    className, 
}: Props) {
    // Return null if the modal is not open
    if (!isOpen) return null;

    // Handle backdrop click to close the modal
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Function to handle adding product to cart
    const addToCart = (): void => {
        window.alert('Added to cart');
    }

    return (
        <div
            className={classNames(
                'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center', 
                className 
            )}
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-lg shadow-lg p-6 relative max-w-lg w-full max-h-screen overflow-y-auto">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-white w-8 h-8"
                    onClick={onClose}
                >
                    &times;
                </button>
                <img src={data.imageUrl} alt={data.name} className="w-full h-64 object-contain rounded-t-lg mb-4" />
                <h2 className="text-2xl font-bold mb-4">{data.name}</h2>
                <p className="mb-4">{data.description}</p>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Nutritional Content:</h3>
                    <ul className="list-disc list-inside">
                        <li>Calories: {data.nutritionalContent.calories}</li>
                        <li>Protein: {data.nutritionalContent.protein}g</li>
                        <li>Carbohydrates: {data.nutritionalContent.carbohydrates}g</li>
                        <li>Fat: {data.nutritionalContent.fat}g</li>
                    </ul>
                </div>
                <p className="text-lg font-semibold mb-4">{data.price.toFixed(2)} Kr</p>
                <button className='w-full' onClick={() => addToCart()}>
                    Add to Cart
                </button>
                <h3 className="text-lg font-semibold mt-4">Similar Products:</h3>
                <ItemsCarousel productIds={data.relatedProducts} />
            </div>
        </div>
    );
}

ProductViewModal.displayName = 'ProductViewModal';

export default ProductViewModal;