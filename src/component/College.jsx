
import React from "react";

function College(props) {
   
  return (
    <>
    
      <div className="container">
        <div className="cards ">
          <div className="card">
            <img src={props.imgsrc} alt="mypic" className="card_img" />
            <div className="card_info">
              <h3 className="card_title">{props.Name}</h3>
              <a href="/" target="_blank" className="an">
                <button className="btn">Visit Now</button>
              </a>
            </div>
          </div>
        </div>
        
      </div>
      
    </>
  );
}

export default College;
