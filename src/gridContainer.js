import React from "react";
import grid1 from "./Assets/GridAssets/Grid1.m4v";
import grid2 from "./Assets/GridAssets/Grid2.m4v";
import grid3 from "./Assets/GridAssets/Grid3.m4v";
import grid4 from "./Assets/GridAssets/Grid4.m4v";
import grid5 from "./Assets/GridAssets/Grid5.m4v";
import grid6 from "./Assets/GridAssets/Grid6.m4v";
import grid7 from "./Assets/GridAssets/Grid7.m4v";
import grid8 from "./Assets/GridAssets/Grid8.m4v";
import grid9 from "./Assets/GridAssets/Grid9.mp4";
import grid10 from "./Assets/GridAssets/Grid10.mp4";

function GridContainer() {
  const flexWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: "3%",
    flexDirection: "column",
  };

  const gridWrapper = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr", // Flexible columns
    gridGap: "10%",
    padding: "10px",
    width: "80%", // Increased width for better spacing
    marginTop: "3%",
    marginBottom: "5%",
  };

  const gridContainers = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  };

  const videoStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <div style={flexWrapper}>
      <h1>Tap / Click to enlarge</h1>
      <div style={gridWrapper}>
        <div style={gridContainers}>
          <video
            src={grid1}
            className="grid-video"
            style={videoStyle}
            alt="Placeholder Video"
            muted
            autoPlay
            playsInline
            loop
          />
        </div>
        <div style={gridContainers}>
          <video
            src={grid2}
            className="grid-video"
            style={videoStyle}
            alt="Placeholder Video"
            muted
            autoPlay
            playsInline
            loop
          />
        </div>
      </div>
      <div style={gridWrapper}>
        <div style={gridContainers}>
          <video
            src={grid3}
            className="grid-video"
            style={videoStyle}
            alt="Placeholder Video"
            muted
            autoPlay
            playsInline
            loop
          />
        </div>
        <div style={gridContainers}>
          <video
            src={grid4}
            className="grid-video"
            style={videoStyle}
            alt="Placeholder Video"
            muted
            autoPlay
            playsInline
            loop
          />
        </div>
      </div>
      <div style={gridWrapper}>
        <div style={gridContainers}>
          <video
            src={grid5}
            className="grid-video"
            style={videoStyle}
            alt="Placeholder Video"
            muted
            autoPlay
            playsInline
            loop
          />
        </div>
        <div style={gridContainers}>
          <video
            src={grid6}
            className="grid-video"
            style={videoStyle}
            alt="Placeholder Video"
            muted
            playsInline
            autoPlay
            loop
          />
        </div>
      </div>
      <div style={gridWrapper}>
        <div style={gridContainers}>
          <video
            src={grid7}
            className="grid-video"
            style={videoStyle}
            alt="Placeholder Video"
            muted
            autoPlay
            playsInline
            loop
          />
        </div>
        <div style={gridContainers}>
          <video
            src={grid8}
            className="grid-video"
            style={videoStyle}
            alt="Placeholder Video"
            muted
            autoPlay
            loop
            playsInline
          />
        </div>
      </div>
      <div style={gridWrapper}>
        <div style={gridContainers}>
          <video
            src={grid9}
            className="grid-video"
            style={videoStyle}
            alt="Placeholder Video"
            muted
            autoPlay
            playsInline
            loop
          />
        </div>
        <div style={gridContainers}>
          <video
            src={grid10}
            className="grid-video"
            style={videoStyle}
            alt="Placeholder Video"
            muted
            autoPlay
            loop
            playsInline
          />
        </div>
      </div>
      <div style={gridWrapper}>
        <div style={gridContainers}>
          <video
            src={grid6}
            className="grid-video"
            style={videoStyle}
            alt="Placeholder Video"
            muted
            autoPlay
            playsInline
            loop
          />
        </div>
        <div style={gridContainers}>
          <video
            src={grid8}
            className="grid-video"
            style={videoStyle}
            alt="Placeholder Video"
            muted
            autoPlay
            loop
            playsInline
          />
        </div>
      </div>
    </div>
  );
}

export default GridContainer;
