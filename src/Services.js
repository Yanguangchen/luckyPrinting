import React from "react";
import GridContainer from "./gridContainer";
function Services() {
  const h1Style = {
    marginTop: "3%",
    textAlign: "center",
    color: "black",
  };

  const containerWrapper = {
    marginTop: "3%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
  };

  return (
    <>
      <GridContainer />
      <div style={containerWrapper}>
        <h1 style={h1Style}>Our Products</h1>

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "0",
            paddingTop: "56.2500%",
            paddingBottom: "0",
            boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
            marginTop: "1.6em",
            marginBottom: "0.9em",
            overflow: "hidden",
            borderRadius: "8px",
            willChange: "transform",
          }}
        >
          <iframe
            title="services"
            loading="lazy"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "0",
              left: "0",
              border: "none",
              padding: "0",
              margin: "0",
            }}
            src="https://www.canva.com/design/DAGJy0HHG8g/nkv5q39mJ-lTsZu1rAViHQ/view?embed"
            allowFullScreen="allowfullscreen"
            allow="fullscreen"
          ></iframe>
        </div>
        <a
          href="https://www.canva.com/design/DAGJy0HHG8g/nkv5q39mJ-lTsZu1rAViHQ/view?utm_content=DAGJy0HHG8g&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
          target="_blank"
          rel="noopener"
        ></a>
      </div>
    </>
  );
}

export default Services;
