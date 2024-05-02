import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import * as classes from "./Voice.module.css";

export const Voice = ({
  property1,
  overlapGroupClassName,
  divClassName,
  imagesOffWhiteClassName,
  imagesOffWhite = "/images/off-white.svg",
  imagesOnGrey = "/images/on-grey.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={classes.voice}
      onClick={() => {
        dispatch("click");
      }}
    >
      <h2 className={`${classes['voice-text']}`}>Text to Speech</h2>
      <div className={`${classes['overlap-group']} ${classes[state.property1]} ${overlapGroupClassName}`}>
        <div className={`${classes.off} ${divClassName}`}>
          {state.property1 === "default" && <>Off</>}

          {state.property1 === "variant-2" && <>On</>}
        </div>
        <img
          className={`${classes['images-off-white']} ${imagesOffWhiteClassName}`}
          alt="Images off white"
          src={state.property1 === "variant-2" ? "/images/on-white.svg" : imagesOffWhite}
        />
      </div>
      <div className={`${classes.on} ${classes[`property-1-${state.property1}`]}`}>
        {state.property1 === "default" && <>On</>}

        {state.property1 === "variant-2" && <>Off</>}
      </div>
      <img
        className={`${classes['images-on-grey']} ${classes[`property-1-0-${state.property1}`]}`}
        alt="Images on grey"
        src={state.property1 === "variant-2" ? "/images/off-grey.svg" : imagesOnGrey}
      />
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-2") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  return state;
}

Voice.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  imagesOffWhite: PropTypes.string,
  imagesOnGrey: PropTypes.string,
};
