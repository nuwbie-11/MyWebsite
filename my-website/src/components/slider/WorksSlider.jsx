import React from "react";


export default function WorksSlider(props) {




  return (
    
      <div>
        <div className="flex items-center justify-evenly h-96">
          <div className="imageSection">
            <img
              src={process.env.PUBLIC_URL + props.imageUrl}
              className="img-responsive rounded w-42"
              alt=""
            />
          </div>

          <div className="textSection">
            <p className="text-[#F8F7FF] text-right w-80">
              <span className="font-medium text-l">{props.title}</span>
              <br />
              {props.description}
              <br />
            </p>
            <br />
            <a
              href={"https://github.com/nuwbie-11/"+props.url}
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-white text-right italic">read more</p>
            </a>
          </div>
        </div>
      </div>

  );
}

WorksSlider.defaultProps = {
  title: "Coming Soon",
  description:'...',
  url:'',
  imageUrl:'/',
};
