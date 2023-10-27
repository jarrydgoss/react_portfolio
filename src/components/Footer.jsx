import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code d-none d-sm-inline" /> with <i className="fas fa-heart d-none d-sm-inline" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/jarrydgoss"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Jarryd G
          </span>
        </a>{" "}
        using <i className="fab fa-react d-none d-sm-inline" />
        <p>
          <small className="text-muted">
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
