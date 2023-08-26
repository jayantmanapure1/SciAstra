import React from "react";
import scientist from "../images/scientist-work-transformed.jpeg"

function Home() {
  return (
    <>
     <div className="container">
     <div className="row">
     <div className="home">
     <div className="discription">
         <h4 className="display-2">Learn from scientists and research scholars from the top institutes  
         </h4>
         <h4 className="display-2"><span > In The World.</span></h4>
     </div>
     <div>
       <img src={scientist} alt="scientist" className="scientist"/>
     </div>

     </div>
     </div>
     </div>
     <hr />
    </>
  );
}

export default Home;
