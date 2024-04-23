import React, { useState } from "react";
import "../../styles/modals.css";

import { moneyFormat } from "../moneyformatter";

import UnbrandedClubLogoBlack from '../../assets/unbrandedClubLogoBlack.png'

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
                        <img src={UnbrandedClubLogoBlack} alt="unbranded-club-logo black"/>
                    </div>

                </div>

                <div className="product-modal-information-container">

                    <div className="product-image-container">
                        <img src={product.img} alt={`${product.name} pictured`} className="product-image" />
                    </div>

                    <div className="product-description-container">
                        
                        <div className="product-name-container">
                            <h2>Unbranded Club - {product.name}</h2>
                        </div>

                        <div className="product-price-container">
                            <p><strong>Price: {moneyFormat(product.price)} </strong></p>
                        </div>

                        <div className="product-price-container">
                            <p>{product.description}</p>
                        </div>
                        
                        
                        

                    </div>

                </div>
            </div>
        </div>
    );
};

export default CustomProductModal;
