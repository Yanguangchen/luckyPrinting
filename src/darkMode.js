import React, { useState, useEffect } from "react";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  //set a state variable darkMode with a default state of false
  //The function setDarkMode updates the state of darkMode

  const buttonStyle = {
    position: "fixed",
    bottom: "90px",
    right: "30px",
    zIndex: "99",
    fontSize: "18px",
    outline: "none",
    backgroundColor: "#EC5107",
    background: "#EC5107",
    color: "white",
    cursor: "pointer",
    padding: "15px",
    borderRadius: "4px",
    border: "1px solid white",
  };

  useEffect(() => {
    //-------------Background color of the body----------------//

    //If darkMode is true, set the background color of the body to #202833
    document.body.style.backgroundColor = darkMode ? "black" : "white";
    //If darkMode is true, set the color of the body to white, else set it to #202833
    document.body.style.color = darkMode ? "white" : "black";
    // Array.from(document.getElementsByTagName("video")).forEach((video) => {
    //   video.style.filter = darkMode ? "invert(1)" : "invert(0)";
    // });

    //-------------Styles of the h1 tags-----------------------//
    const h1Tags = document.querySelectorAll("h1");
    h1Tags.forEach((h1) => {
      h1.style.color = darkMode ? "white" : "#202833";
    });

    //-------------topBanner darkmode-----------------------//
    const topBannerContainer =
      document.getElementsByClassName("topbannerContainer")[0];
    if (topBannerContainer) {
      //ensure that the DOM element has loaded
      topBannerContainer.style.backgroundColor = darkMode ? "black" : "white";
    }

    const formsHeader = document.getElementsByClassName("formsHeader")[0];
    if (formsHeader) {
      //ensure that the DOM element has loaded
      formsHeader.style.color = darkMode ? "white" : "white"; // This is always white as per your comment
    }
    const topBanner = document.getElementsByClassName("topbanner")[0];
    if (topBanner) {
      //ensure that the DOM element has loaded
      topBanner.style.filter = darkMode ? "invert(1)" : "invert(0)";
    }

    const carmartWrapper =
      document.getElementsByClassName("carmart-wrapper")[0];
    if (carmartWrapper) {
      //ensure that the DOM element has loaded
      carmartWrapper.style.color = "white"; // This is always white as per your comment
    }
    //-------------Google Maps----------------------------//
    // Only invert the color of google maps not street view
    const grid1Maps = document.getElementsByClassName("grid1maps")[0];
    if (grid1Maps) {
      //ensure that the DOM element has loaded
      grid1Maps.style.filter = darkMode ? "invert(1)" : "invert(0)";
    }

    //-------------Footer Styles-----------------------//
    const footerStyle = document.getElementsByClassName("footerStyle")[0];
    if (footerStyle) {
      //ensure that the DOM element has loaded
      footerStyle.style.filter = darkMode ? "invert(1)" : "invert(0)";
      footerStyle.style.paddingTop = darkMode ? "7%" : "0%";
    }

    //-------------Footer Styles-----------------------//
    const ModeButton = document.getElementsByClassName("ModeButton")[0];
    if (ModeButton) {
      //ensure that the DOM element has loaded
      ModeButton.style.backgroundColor = darkMode ? "white" : "#051d40";
      ModeButton.style.color = darkMode ? "black" : "white";
    }

    //-------------A tags that need styling--------------//
    const socialsContainer =
      document.getElementsByClassName("socials-container")[0];
    if (socialsContainer) {
      socialsContainer.style.color = darkMode ? "white" : "black";
    }
  }, [darkMode]);

  return (
    <div>
      <button
        style={buttonStyle}
        onClick={() => {
          //add event handler
          setDarkMode(!darkMode);
        }} //setDarkMode reverses the boolean state of darkMode
      >
        {/*If currently on darkMode, show the text "Light Mode else show the text "Dark mode"*/}
        {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
      </button>
    </div>
  );
}

export default DarkMode;
