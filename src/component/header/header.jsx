import React from "react";
import './module.css';
import logo from '../../img/LogoTypeInsta.svg';
import plusIcon from '../../img/PlusForHeader.svg';
import heartIcon from '../../img/HeartForHeader.svg';
import avatar1 from '../../img/Avatar1.svg';
import avatar2 from '../../img/Avatar2.svg';
import avatar3 from '../../img/Avatar3.svg';
import avatar4 from '../../img/Avatar4.svg';
import avatar5 from '../../img/Avatar5.svg';
import avatar6 from '../../img/Avatar6.svg';
import telegramIcon from '../../img/TelegramForHeader.svg';
import arrowIcon from '../../img/StrelkaVlevo.svg';

function Header() {
    return (
        <header>
            <div class="HeaderDivOne">
                <div>
                    <img class="headerDivOne-Image" src={logo} alt="Logo" />
                </div>
                <div class="ParametersForHeader">
                    <div id="Publication" class="cursor-pointer">
                        <img src={plusIcon} alt="" />
                    </div>
                    <div id="FavouritesImagesVideos">
                        <img src={heartIcon} alt="" />
                    </div>
                    <div id="favoriteBlock" class="hidden">
                        <div id="FavouriteContainerBlock" class="flex-container">
                            <div>
                                <img src={logo} class="logo-image" alt="Logo" />
                            </div>
                            <div>
                                <img src={arrowIcon} class="cursor-pointer" alt="Arrow" />
                            </div>
                        </div>
                        <h1 class="center-text">Your Favourite</h1>
                        <hr />
                        <div id="FavouriteImages">
                            <div class="imagesBlock">
                                <div class="image1"><img src={avatar6} alt="Avatar 6" /></div>
                                <div class="image1"><img src={avatar4} alt="Avatar 4" /></div>
                                <div class="image1"><img src={avatar6} alt="Avatar 6" /></div>
                                <div class="image1"><img src={avatar6} alt="Avatar 6" /></div>
                                <div class="image1"><img src={avatar3} alt="Avatar 3" /></div>
                                <div class="image1"><img src={avatar5} alt="Avatar 5" /></div>
                                <div class="image1"><img src={avatar2} alt="Avatar 2" /></div>
                                <div class="image1"><img src={avatar1} alt="Avatar 1" /></div>
                            </div>
                        </div>
                    </div>
                    <div id="ChatForHeader" class="cursor-pointer">
                        <img src={telegramIcon} alt="" class="chat-image" />
                    </div>
                </div>
            </div>
            <div class="HeaderDibTwoSlider">
                <div class="avatar-slider">
                    <div class="avatars-container">
                        <div class="avatar-item"><img src={avatar1} alt="Avatar 1" />
                            <p class="avatar-name">Barby_Girlzzz</p>
                        </div>
                        <div class="avatar-item"><img src={avatar2} alt="Avatar 2" />
                            <p class="avatar-name">Arthur</p>
                        </div>
                        <div class="avatar-item"><img src={avatar3} alt="Avatar 3" />
                            <p class="avatar-name">Votre story</p>
                        </div>
                        <div class="avatar-item"><img src={avatar4} alt="Avatar 4" />
                            <p class="avatar-name">Nicolas</p>
                        </div>
                        <div class="avatar-item"><img src={avatar5} alt="Avatar 5" />
                            <p class="avatar-name">Ameo</p>
                        </div>
                        <div class="avatar-item"><img src={avatar6} alt="Avatar 6" />
                            <p class="avatar-name">Emilia</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </header>
    );
}

export default Header;