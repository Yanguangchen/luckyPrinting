import Services from "./Services";
import Maps from "./maps";

function Midsection() {
  const containerWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const gridWrapper = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    width: "100%",
  };

  return (
    <>
      <div style={containerWrapper}>
        <div style={gridWrapper}>
          <Services />
          <Maps />
        </div>
      </div>
    </>
  );
}

export default Midsection;
