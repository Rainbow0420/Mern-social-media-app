import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImagechange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="What's Happening..." />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div
            className="option"
            style={{ color: "var(--video)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilPlayCircle />
            Video
          </div>
          <div
            className="option"
            style={{ color: "var(--location)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilLocationPoint />
            Location
          </div>
          <div
            className="option"
            style={{ color: "var(--shedule)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilSchedule />
            Schedule
          </div>
          <button className="button ps-button">Share</button>
          <div style={{display: "none"}}>
            <input
              type="file"
              ref={imageRef}
              onChange={onImagechange}
              name="myImage"
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={()=>setImage(null)} style={{border: '1px solid white'}}/>
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
