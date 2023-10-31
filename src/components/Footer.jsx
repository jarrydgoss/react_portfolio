import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code custom-icon" /> with <i className="fas fa-heart custom-icon" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/jarrydgoss"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Jarryd G
          </span>
        </a>{" "}
        using <i className="fab fa-react custom-icon" />
        <p>
          <small className="text-muted">
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
