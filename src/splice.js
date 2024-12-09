import SplineElement from "./spline";

const splineContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  overflow: "hidden",
};

function SpliceElement() {
  return (
    <div style={splineContainer} className="splineContainer">
      <SplineElement />
    </div>
  );
}

export default SpliceElement;