import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PlayVideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";
const PlayVideo = () => {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //   });

    // recommended video select cheyyumbam already exist aayittulla video nde detail aan kaanikkunnadh for that below
    const { videoId } = useParams();


    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    // fetching videos data
    const fetchVideoData = async () => {
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetails_url)
            .then((res) => res.json())
            .then((data) => setApiData(data.items[0]));
    };
    useEffect(() => {
        fetchVideoData();
    }, [videoId]);

    useEffect(() => {
        fetchChannelData();
    }, [apiData]);

    // fetching channel data
    // const fetchChannelData = async () => {
    //     const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    //     await fetch(channelData_url)
    //         .then((res) => res.json())
    //         .then((data) => setChannelData(data.items[0]));

    //     // Fetching Comment Data
    //     const fetchCommentData = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY} `;
    //     await fetch(fetchCommentData)
    //         .then((res) => res.json())
    //         .then((data) => data.setChannelData(data.items[0]));
    // };
    const fetchChannelData = async () => {
        if (apiData && apiData.snippet) {
            const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
            await fetch(channelData_url)
                .then((res) => res.json())
                .then((data) => setChannelData(data.items[0]));

            // Fetching Comment Data
            const fetchCommentData = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=${videoId}&key=${API_KEY} `;
            await fetch(fetchCommentData)
                .then((res) => res.json())
                .then((data) => setCommentData(data.items));
        }
    };

    console.log(videoId);

    return (
        <div className="play-video">
            {/* <video controls muted autoPlay src={video1}></video> */}
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                allow=" autoplay;"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // referrerpolicy="strict-origin-when-cross-origin"
                // allowfullscreen
            ></iframe>

            <h3>{apiData ? apiData.snippet.title : "title"}</h3>
            <div className="play-video-info">
                <p>
                    {apiData ? value_converter(apiData.statistics.viewCount) : "view count"} Views &bull;{" "}
                    {moment(apiData ? apiData.snippet.publishedAt : "").fromNow()}
                </p>
                <div>
                    <span>
                        <img src={like} alt="" />
                        {apiData ? value_converter(apiData.statistics.likeCount) : "dummy count"}
                    </span>
                    <span>
                        <img src={dislike} alt="" />
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
                <img src={channelData ? channelData.snippet.thumbnails.default.url : "image"} alt="" />
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : "channel Name"}</p>

                    <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : ""} Subscribers</span>
                </div>
                <button>Subscibe</button>
            </div>
            <div className="vid-description">
                <p>{apiData ? apiData.snippet.description.slice(0, 250) : "description"} &bull; &bull; &bull; &bull;</p>
                <hr />
                <h4>{apiData ? apiData.statistics.commentCount : "comment count"} Comments</h4>

                {commentData.map((item, index) => {
                    return (
                        <div key={index} className="comment">
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                            <div>
                                <h3>
                                    {item.snippet.topLevelComment.snippet.authorDisplayName}
                                    <span> {moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()} ago</span>
                                </h3>
                                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                <div className="comment-action">
                                    <img src={like} alt="" />
                                    <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                    <img src={dislike} alt="" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PlayVideo;
