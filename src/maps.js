import React from "react";

function Maps() {
  const flexWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    marginTop: "10%",
    overflow: "hidden",
  };

  const addressStyle = {
    fontSize: "1.5em",
  };

  return (
    <div>
      <div style={flexWrapper} className="maps">
        <h1>Locate Us!</h1>
        <b>
          <p style={addressStyle}>
            1 Roxy Square, #02-44 50 E Coast Road S428769
          </p>
        </b>
        <div className="grid1maps">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.140932112508!2d103.9043973!3d1.303884!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1872ffffffff%3A0xe543b30e38bba0d2!2sLucky%20Printing%20%26%20Stationery!5e0!3m2!1sen!2ssg!4v1719914792196!5m2!1sen!2ssg"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Maps;
