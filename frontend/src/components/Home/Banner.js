import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

let on_get_clicked = false;

function useForceUpdate() {
  const setValue = useState(0)[1];
  return () => setValue((value) => value + 1);
}

const Banner = (props) => {
  const forceUpdate = useForceUpdate();

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to </span>
          <span
            id="get-part"
            onClick={() => {
              on_get_clicked = true;
              console.log(on_get_clicked);
              forceUpdate();
            }}
          >
            get
          </span>
          {on_get_clicked ? (
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
          ) : null}
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
