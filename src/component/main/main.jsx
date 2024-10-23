import React from "react";
import './module.css';
import Product from '../product/product';


function Main() {
    return (
        <main>
            <div className="announcement-slider">
                <div className="announcements-container">
                    <Product /> 
                </div>
            </div>
        </main>
    );
}

export default Main;