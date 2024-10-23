import React from "react";
import './module.css';
import heartIcon from '../../img/bx-heart.svg';
import commentIcon from '../../img/Comment (Stroke).svg';
import shareIcon from '../../img/Share.svg';
import bookmarkIcon from '../../img/Bookmark.svg';
import image1 from '../../img/Img.svg';
import image2 from '../../img/Img2.svg';
import image3 from '../../img/Img3.svg';
import image5 from '../../img/camry_for_arsamak.jpg';
import image6 from '../../img/post-zurab.jpg';


const posts = [
    {
        id: 1,
        author: "Льянов Ахмед",
        image: image2,
        description: "dignissimos earum odio sed ad placeat quasi eum architecto et magni nihil.",
    },
    {
        id: 2,
        author: "Мартазанов Ахмед",
        image: image1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 3,
        author: "Аушев Мухаммад",
        image: image3,
        description: "Quis nobis ipsa ducimus error fugiat quae qui nesciunt, debitis.",
    },
    {
        id: 4,
        author: "Амхадов Адам",
        image: image3,
        description: "Quis nobis ipsa ducimus error fugiat quae qui nesciunt, debitis.",
    },
    {
        id: 5,
        author: "Хамхоев Арсамак",
        image: image5,
        description: "Мухаммад разбил.",
    },
    {
        id: 6,
        author: "milush",
        image: image6,
        description: "Quis nobis ipsa ducimus error fugiat quae qui nesciunt, debitis.",
    },
];


function Product() {
    return (
        <div className="announcements-container">
            {posts.map(post => (
                <div key={post.id} className="announcement-card">
                    <div className="announcement-header">
                        <div className="AvatarImageAuthor">

                        </div>
                        <div className="UserNickname">
                            <p className="user-nickname">{post.author}</p>
                        </div>
                    </div>
                    <img src={post.image} alt={`Announcement ${post.id}`} />
                    <div className="announcement-actions">
                        <div className="actions-container">
                            <div className="LikeTheImage">
                                <img src={heartIcon} alt="Like" className="cursor-pointer" />
                            </div>
                            <div className="MessageTheImage cursor-pointer">
                                <img src={commentIcon} alt="Comment" />
                            </div>
                            <div className="TelegramTheImage cursor-pointer">
                                <img src={shareIcon} alt="Share" />
                            </div>
                        </div>
                        <div className="SaveImage">
                            <img src={bookmarkIcon} alt="Bookmark" />
                        </div>
                    </div>
                    <p>{post.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Product;