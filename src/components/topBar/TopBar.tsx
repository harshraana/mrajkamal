import React from "react";

const TopBar = () => {
  return (
    <>
      {/* .top-bar */}
      <div className='top-bar style-default d-flex align-items-center justify-content-center'>
        <div>
          WINTER SALE 75% OFF. Ends in:
          <div className='tf-countdown style-default'>
            <div
              className='js-countdown'
              data-timer='1007500'
              data-labels=' : DAYS, : HOURS, : MINUTES, : SECONDS'
            ></div>
          </div>
        </div>
      </div>
      {/* End top-bar */}
    </>
  );
};

export default TopBar;
