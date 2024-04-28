import React, { useReducer, useState } from "react";
import { useEffect } from "react";
import {connect} from 'react-redux'
import { Navigate, useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from 'uuid';

import { Products } from "../data/product";

/* Reducers */
// import selectedSizesReducer, { selectSize }  from "../redux/reducers/collectionsReducer";

import selectedSizesReducer, {selectSize} from "../redux/reducers/selectSizeReducer";
import selectedQtyReducer, {selectQty} from "../redux/reducers/SelectQtyReducer";


import { addToCart } from "../redux/reducers/cartReducer";

import { moneyFormat } from "../utils/moneyformatter";

import CustomProductModal from "../utils/modals/productmodal";
import Toast from "../utils/modals/toast";


const Collection = ({addToCart}) => {

    // State to manage selected size for each product
    const [selectedSizes, dispatchSizes] = useReducer(selectedSizesReducer, {});
    const [selectedQty, dispatchQty] = useReducer(selectedQtyReducer,{})
    const [selectedProduct, setSelectedProduct] = useState(null); // State to hold the selected product

    const [productErrors, setProductErrors] = useState({}); // Maintain errors for each product

    const [showToast, setShowToast] = useState(false); // Manage toast visibility
    const [toastMessage, setToastMessage] = useState(""); // Toast message state

    const [setCartItems] = useState([]); // Define cartItems state

    const navigate = useNavigate();

    useEffect(() => {
        let timer;
        if (showToast) {
            timer = setTimeout(() => {
                setShowToast(false);
                setToastMessage(""); // Clear toast message
            }, 3000); // Close toast after 3 seconds
        }
        return () => clearTimeout(timer);
    }, [showToast]);
    

    
    const handleImageOnClick = (product) => {
        setSelectedProduct(product); // Set the selected product when clicking on the image
        setProductErrors({}); // Clear errors when selecting a new product
    };

    const handleSizeChange = (index, size) => {
        dispatchSizes(selectSize(index, size));
    };

    

    const handleQtyChange = (index, quantity) => {
        dispatchQty(selectQty(index, parseInt(quantity)));
      };
      

    const handleOnSubmit = (event, index, product) => {

        event.preventDefault();

        const selectedQty = parseInt(event.target.elements.qty.value);
        

        if (!selectedQty) {
            setProductErrors({ ...productErrors, [index]: "Please select a quantity." });
            return;
        }
        
        if (selectedQty > 0) {
            const cartItem = { 
                ...product, 
                id: uuidv4(), // Generate UUID and assign it to the product
                size: selectedSizes[index], 
                qty: selectedQty 
            
            };

            
            
            setProductErrors({ ...productErrors, [index]: "" }); // Clear error if product is added to cart
            addToCart(cartItem);

            setToastMessage(`${product.name} added to cart successfully`);
            setShowToast(true);// Show toast when product is added to cart
            
            
        }
    };

    const closeToast = () => {

        setToastMessage(""); // Clear toast message
        setShowToast(false);

    };

    const navigateToCart = () => {

        

        navigate('/cart')


    }

    
    

    return (
        <div className="catalogue-container">
            <div className="catalogue-header-container">
                <div className="catalogue-header-elements">
                    <h1>2022 Collection</h1>
                    <p>Shop our latest 2022 winter collection</p>
                </div>
            </div>

            <div className="catalgue-products-container">
                {/* Map through Products array */}
                {Products.map((product, index) => (
                    <div className="product-container" key={index}>
                        {/* Product Form */}
                        <form onSubmit={(event) => handleOnSubmit(event, index, product)} className="product-form-container"> {/* Pass index and product */}
                            {/* Product Image */}
                            <div className="form-element">
                                <img src={product.img} alt="" className="collection-product-image" onClick={() => handleImageOnClick(product)} /> {/* Pass a function reference */}
                            </div>
                            {/* Brand Name */}
                            <div className="form-element">
                                <h3>Club Unbranded</h3>

                            </div>
                            {/* Product type */}
                            <div className="form-element">
                                <p>{product.category}</p>
                            </div>
                            {/* Product Price & Product QTY*/}
                            <div className="form-element">
                                {/* Product Price */}
                                <div>
                                    <p>{moneyFormat(product.price)}</p>
                                </div>
                                {/* Product qty */}
                                <div className="form-element">

                                    <label className="form-element-label">Size :</label>

                                        <select onChange={(e) => handleSizeChange(index, e.target.value)} value={selectedSizes[index] || ''}>
                                            <option disabled value=''>Select size</option>
                                            {Object.keys(product.qty).map((size) => (
                                                <option key={size} value={size}>
                                                    {size}
                                                </option>
                                            ))}
                                        </select>

                                </div>
                                {/* Product Qty */}
                                <div className="form-element">
                                    <label className="form-element-label">Qty :</label>

                                    <select name="qty" onChange={(e) => handleQtyChange(index, e.target.value)} value={selectedQty[index] || ''}>
                                        <option disabled value=''>Select Qty</option>
                                        {[...Array(Math.min(4, product.qty[selectedSizes[index]] || 0)).keys()].map((quantity) => (
                                            <option key={quantity} value={quantity + 1}>

                                                {quantity + 1}

                                            </option>
                                        ))}
                                    </select>

                                </div>
                                {/* Product Button */}
                                <div className="form-element-button-container">
                                    <button className="product-shop-button" type="submit">
                                        Add to Cart
                                    </button>
                                </div>

                                
                                
                                

                                
                            </div>

                            <div>
                                {productErrors[index] && <p className="errorMsg">{productErrors[index]}</p>}
                            </div>
                        </form>
                    </div>
                ))}
                
            </div>

            {/* Render modal if a product is selected */}
            {selectedProduct && (
                <CustomProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                    onSubmit={(product) => {
                        setCartItems(prevCartItems => [...prevCartItems, product]);
                        setSelectedProduct(null); // Close the modal after adding to cart
                    }}
                />
            )}

            {/* Render toast when product is added */}
            {showToast && (
                <Toast
                    message={toastMessage}
                    onClose={navigateToCart}
                />
            )}

        </div>
    );
};

const mapStateToProps = (state) => ({

    selectedSizes: state.selectedSizes,
    selectedQty: state.selectedQty,

  });

export default connect(mapStateToProps, { addToCart })(Collection);
