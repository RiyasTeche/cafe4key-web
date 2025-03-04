import "./contact.css";

const Footer = () => {
  const footerElement = [
    { element: "cafe 4Key" },
    { element: "Terms" },
    { element: "Docs" },
    { element: "Pizza" },
    { element: "Burger" },
    { element: "Contact" },
    { element: "+91 7994 422 644" },
    { element: "Do not share my personal information" },
  ];

  return (
    <div className="footerWrapper">
      {footerElement.map((item) => (
        <span key={item.element}>{item.element}</span>
      ))}
    </div>
  );
};

export default Footer;
