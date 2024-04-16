import React, { useState } from "react";
import "../../styles/modals.css";

import { moneyFormat } from "../moneyformatter";

const CustomProductModal = ({ product, onClose, onSubmit }) => {
    
    const [selectedSize, setSelectedSize] = useState(""); // State to manage selected size
    const [selectedQty, setSelectedQty] = useState(1); // State to manage selected quantity

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    };

    const handleQtyChange = (e) => {
        setSelectedQty(parseInt(e.target.value));
    };

    const handleAddToCart = (event) => {

        
        // Check if size is selected
        if (!selectedSize) {
            alert("Please select a size.");
            return;
        }

        // Call onSubmit function with selected product, size, and quantity
        onSubmit({ ...product, size: selectedSize, qty: selectedQty });
        onClose(); // Close the modal after adding to cart
    };

    return (

        <div className="modal-container">


            <div className="product-modal-container">

                <div className="close-button-container">
                    <button className="close-button " onClick={onClose}>Close</button>
                </div>

                <div className="product-modal-header-container">

                    <div className="unbranded-club-Logo-container">
                        <h1>Unbranded Club</h1>
                    </div>

                    <div className="unbranded-club-Logo-container">
                        <h1>Logo</h1>
                    </div>

                </div>

                <div className="product-modal-information-container">

                    <div className="product-image-container">
                        <img src={product.img} alt={`${product.name} pictured`} className="product-image" />
                    </div>

                    <div className="product-description-container">
                        
                        <div className="product-name-container">
                            <h2>{product.name}</h2>
                        </div>
                        
                        <div className="product-price-container">
                            <p>Price: {moneyFormat(product.price)}</p>
                        </div>
                        
                        
                        <div className="product-size-container">
                            <label>Size:</label>
                            <select value={selectedSize} onChange={handleSizeChange}>

                                <option disabled selected>Select Size</option>

                                    {Object.keys(product.qty).map((size) => (
                                <option key={size} value={size}>{size}</option>
                                    ))}
                            </select>
                        </div>
                        
                        <div className="product-qty-container">
                            <label>Quantity:</label>
                            <input class='qty-dropdown' type="number" value={selectedQty} min={1} onChange={handleQtyChange} />
                        </div>

                        <div className="product-button-container">
                            <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
                            <button className="close-button" onClick={onClose}>back</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default CustomProductModal;
