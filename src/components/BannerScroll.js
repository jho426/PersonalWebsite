import React from "react";
import Ticker from "react-ticker";
import PageVisibility from 'react-page-visibility';
import { useState } from 'react';

const textBoxes = [
  "MY SKILLS"
];

const BannerScroll = () => {
    const [pageIsVisible, setPageIsVisible] = useState(true)
  
    const handleVisibilityChange = (isVisible) => {
      setPageIsVisible(isVisible)
    }
  
    return (
      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
          <Ticker speed={2}>
            {({ index }) => {
              const adjustedIndex = index % textBoxes.length;
              return (
                <div>
                  <h1
                    style={{
                      margin: "0.5rem",
                      border: "solid 2px",
                      borderRadius: "15px",
                      paddingLeft: "0.5rem",
                      paddingRight: "0.5rem",
                      width: "200px",
                      fontSize: "30px",
                      textAlign: "center",
                      display: "inline-block",
                    }}
                  >
                  {textBoxes[adjustedIndex]}
                  </h1>
                </div>
              );
            }}
          </Ticker>
        )}
      </PageVisibility>
    )
  }  

export default BannerScroll;
