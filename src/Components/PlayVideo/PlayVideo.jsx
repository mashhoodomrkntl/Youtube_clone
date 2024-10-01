import React from "react";
import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";

import userProfile from "../../assets/user_profile.jpg";
import jack from "../../assets/jack.png";
const PlayVideo = () => {
    return (
        <div className="play-video">
            <video controls muted autoPlay src={video1}></video>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing.</h3>
            <div className="play-video-info">
                <p>1532 Views &bull; 2 days ago</p>
                <div>
                    <span>
                        <img src={like} alt="" />
                        125
                    </span>
                    <span>
                        <img src={dislike} alt="" />2
                    </span>
                    <span>
                        <img src={share} alt="" />
                        share
                    </span>
                    <span>
                        <img src={save} alt="" />
                        save
                    </span>
                </div>
            </div>
            <hr />

            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p>GreatStack</p>

                    <span>1M Subscribers</span>
                </div>
                <button>Subscibe</button>
            </div>
            <div className="vid-description">
                <p>subscibe greatstack to watch more tutorials</p>
                <hr />
                <h4>130 comments</h4>
                <div className="comment">
                    <img src={userProfile} alt="" />
                    <div>
                        <h3>
                            Jack Nichou <span>1 day ago</span>
                        </h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta omnis laborum aliquam id
                            deserunt minus libero rem optio.
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={userProfile} alt="" />
                    <div>
                        <h3>
                            Jack Nichou <span>1 day ago</span>
                        </h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta omnis laborum aliquam id
                            deserunt minus libero rem optio.
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={userProfile} alt="" />
                    <div>
                        <h3>
                            Jack Nichou <span>1 day ago</span>
                        </h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta omnis laborum aliquam id
                            deserunt minus libero rem optio.
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={userProfile} alt="" />
                    <div>
                        <h3>
                            Jack Nichou <span>1 day ago</span>
                        </h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta omnis laborum aliquam id
                            deserunt minus libero rem optio.
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={userProfile} alt="" />
                    <div>
                        <h3>
                            Jack Nichou <span>1 day ago</span>
                        </h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta omnis laborum aliquam id
                            deserunt minus libero rem optio.
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={userProfile} alt="" />
                    <div>
                        <h3>
                            Jack Nichou <span>1 day ago</span>
                        </h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta omnis laborum aliquam id
                            deserunt minus libero rem optio.
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={userProfile} alt="" />
                    <div>
                        <h3>
                            Jack Nichou <span>1 day ago</span>
                        </h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta omnis laborum aliquam id
                            deserunt minus libero rem optio.
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={userProfile} alt="" />
                    <div>
                        <h3>
                            Jack Nichou <span>1 day ago</span>
                        </h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta omnis laborum aliquam id
                            deserunt minus libero rem optio.
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={userProfile} alt="" />
                    <div>
                        <h3>
                            Jack Nichou <span>1 day ago</span>
                        </h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta omnis laborum aliquam id
                            deserunt minus libero rem optio.
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayVideo;
