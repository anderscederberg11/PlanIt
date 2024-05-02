import PropTypes from "prop-types";
import React from "react";
import { useTheme } from "@/components/Theme";
import { useReducer } from "react";
import * as classes from "./ModeSwitch.module.css";

export const InterfaceMode = ({
  property1,
  className,
  overlapClassName,
  divClassName,
  sunClassName,
  overlapClassNameOverride,
  divClassNameOverride,
}) => {

  const { toggleTheme } = useTheme();

  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div onClick={toggleTheme}>
      <div
        className={`${classes['interface-mode']} ${className}`}
        onClick={() => {
          dispatch("click");
        }}
      >
        <div className={`${classes['overlap-group']} ${classes[state.property1]}`}>
          <div
            className={`${classes.overlap} ${
              state.property1 === "default"
                ? overlapClassName
                : state.property1 === "variant-2"
                ? overlapClassNameOverride
                : undefined
            }`}
          >
            <div
              className={`${classes.dark} ${
                state.property1 === "variant-2"
                  ? divClassNameOverride
                  : state.property1 === "default"
                  ? divClassName
                  : undefined
              }`}
            >
              {state.property1 === "variant-2" && <>Dark</>}

              {state.property1 === "default" && <>Light</>}
            </div>
            {state.property1 === "default" && <img className={`${classes.sun} ${sunClassName}`} alt="Sun" src="/images/sunwhite.svg"/>}
          </div>
          <div className={classes.bright}>
            {state.property1 === "variant-2" && <>Light</>}

            {state.property1 === "default" && <>Dark</>}
          </div>
          {state.property1 === "default" && <img className={classes.moon} alt="Moon" src="/images/moongrey.svg" />}
        </div>
        <div className={`${classes['text-wrapper']} ${classes[`property-1-2-${state.property1}`]}`}>Interface</div>
        {state.property1 === "variant-2" && (
          <>
              <img className={classes['outline-amp-dark']} alt="Outline amp dark" src="/images/moonwhite.svg" />
              <img className={classes['outline-amp-light']} alt="Outline amp light" src="/images/sungrey.svg" />

          </>
        )}
      </div>
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

InterfaceMode.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
