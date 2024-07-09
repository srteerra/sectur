import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import parse from "html-react-parser";
import "./styles.css";

const Content = ({ data }) => {

  const getContent = () => (
    data?.content?.map(item => (

      <><div className="image-content">
        {item.img &&
          <LazyLoadImage
            src={require(`../../../assets/img/${item.img}`)}
            alt=""
            className="imagen" />

        }
      </div>
      <div className="post-eventos">
          {item.subTitle &&
            <div className="subtitle">
              <h2 >{item.subTitle}</h2>
            </div>
          }
          {item.text &&
            <div className="calendare-known-subtitle">
              <p>{parse(item.text)}</p>
            </div>
          }

        </div></>


    ))
  );


  return (
    <div className="content">
      <div className="post-eventos">
        <h2 className="post-title">{data.title}</h2>
        <div className="calendare-known-subtitle">
          <p >{parse(data.introduction)}</p>
        </div>

      </div>
      <br />
      {getContent()}
    </div>
  );
};

export default Content;
