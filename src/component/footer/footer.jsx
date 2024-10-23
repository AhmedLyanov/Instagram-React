import React from "react";
import './module.css';
import homeIcon from '../../img/Home.svg';
import searchIcon from '../../img/Search.svg';
import reelsIcon from '../../img/Reels.svg';
import shopIcon from '../../img/Shop.svg';
import avatarIcon from '../../img/Avatar4.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="FooterMenuInsta">
                <div className="HomeDiv cursor-pointer">
                    <img src={homeIcon} alt="Home" />
                </div>
                <div className="PoiskDiv cursor-pointer">
                    <img src={searchIcon} alt="Search" />
                </div>
                <div className="MovieDiv cursor-pointer">
                    <img src={reelsIcon} alt="Reels" />
                </div>
                <div className="ShopDiv cursor-pointer">
                    <img src={shopIcon} alt="Shop" />
                </div>
                <div className="AccountDiv cursor-pointer">
                    <img src={avatarIcon} width="20px" alt="Account" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;