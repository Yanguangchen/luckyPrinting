import React from "react";
import SpliceElement from "./splice";
import Services from "./Services";
import Contactparent from "./contactParent";
import LuckyPrintingSection from "./about";

function Homepage() {
  return (
    <div>
      <SpliceElement />
      <LuckyPrintingSection />
      <Services />
      <Contactparent />
    </div>
  );
}

export default Homepage;
