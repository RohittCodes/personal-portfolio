import React from "react";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div
        id={idName}
        className={`app__container app__primarybg ${classNames}`}
      >
        <div className="app__wrapper app__flex">
          <Component />
        </div>
      </div>
    );
  };

export default AppWrap;
