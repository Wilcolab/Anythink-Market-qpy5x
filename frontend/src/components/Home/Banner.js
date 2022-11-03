import React from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <input
            id="search-box"
            placeholder="What is that you truly desire???"
            onChange={(ev) => {
              let v = ev.target.value;
              if (v && v.length > 2) {
                ev.preventDefault();
                props.onTitleChange(
                  v,
                  (page) => agent.Items.byTitle(v, page),
                  agent.Items.byTitle(v)
                );
              }
            }}
          ></input>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
