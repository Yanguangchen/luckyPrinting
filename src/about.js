import React, { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginTop: "5%",
          border: "1px solid #ed5107",
          borderRadius: "0.5rem",
          overflow: "hidden",
          background: "#ed5107",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="accordionTabs"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "1rem 5rem",
            textAlign: "center",
            transition: "background-color 0.3s",
            fontSize: "150%",
            background: "#ed5107",
            color: "white",
          }}
        >
          <span style={{ fontWeight: "600" }}>{title}</span>
          <span
            style={{
              transform: isOpen ? "rotate(45deg)" : "rotate(0)",
              transition: "transform 0.3s",
            }}
          >
            +
          </span>
        </button>
        <div
          style={{
            maxHeight: isOpen ? "1000px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease-in-out",
          }}
        >
          <div style={{ padding: "1.5rem", background: "white" }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const LuckyPrintingSection = () => {
  return (
    <div
      style={{
        maxWidth: "64rem",
        margin: "0 auto",
        padding: "1.5rem",
        borderRadius: "0.75rem",
      }}
    >
      <h1
        style={{
          fontSize: "1.875rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Why Choose Lucky Printing and Stationery
      </h1>

      <div>
        <AccordionItem title="High-Quality Printing Services">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            Our Printing Expertise:
          </h4>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <li>State-of-the-art printing technology</li>
            <li>Wide range of paper types and finishes</li>
            <li>Vibrant color reproduction</li>
            <li>Fast turnaround times</li>
            <li>Environmentally friendly printing options</li>
          </ul>
          <p>
            At Lucky Printing and Stationery, we pride ourselves on delivering
            top-notch printing services. Whether you need business cards,
            brochures, or large-format prints, our advanced equipment and
            skilled technicians ensure your materials look professional and
            impressive.
          </p>
        </AccordionItem>

        <AccordionItem title="Comprehensive Stationery Selection">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            Our Stationery Offerings:
          </h4>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <li>Office supplies for businesses of all sizes</li>
            <li>Custom notebooks and planners</li>
            <li>Eco-friendly stationery options</li>
          </ul>
          <p>
            Lucky Printing and Stationery is your one-stop shop for all your
            stationery needs. We offer a vast selection of products to cater to
            professionals, students, and creative individuals alike. Our
            knowledgeable staff can help you find exactly what you're looking
            for.
          </p>
        </AccordionItem>

        <AccordionItem title="Why Customers Choose Us">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            The Lucky Printing Advantage:
          </h4>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <li>Exceptional customer service</li>
            <li>Competitive pricing</li>
            <li>Customization options for all products</li>
            <li>Convenient online ordering system</li>
            <li>Loyalty program for regular customers</li>
            <li>Expert advice on design and materials</li>
          </ul>
          <p>
            Choose Lucky Printing and Stationery for a seamless experience from
            start to finish. Our commitment to quality, affordability, and
            customer satisfaction sets us apart. Whether you're a small business
            owner, a student, or planning a special event, we have the expertise
            and products to meet your needs.
          </p>
        </AccordionItem>
      </div>
    </div>
  );
};

export default LuckyPrintingSection;
