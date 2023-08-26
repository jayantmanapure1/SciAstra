import React from "react";

function Mentor(props) {
  return (
    <>
      <div className="container ">
      <div className="home-container">
        <div className="profile-card">
          <div className="img">
            <img src={props.mansrc} alt="Mentor" />
          </div>
          <div className="caption">
            <h3>Tom Cruise</h3>
            <p>{props.Name}</p>
            <div className="social-links">
            <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Mentor;
