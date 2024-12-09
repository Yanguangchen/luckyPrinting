
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
      <spline-viewer loading-anim-type="spinner-big-light" url="https://prod.spline.design/gEjwhpj6dNDva5Kh/scene.splinecode"></spline-viewer>
    </div>
  );
}

export default SpliceElement;