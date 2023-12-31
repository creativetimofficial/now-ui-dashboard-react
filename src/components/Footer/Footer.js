import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer className={"footer" + (props.default ? " footer-default" : "")}>
      <Container fluid={props.fluid ? true : false}>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.creative-tim.com?ref=nudr-footer"
                target="_blank"
              >
                Abdullah Javed
              </a>
            </li>
            <li>
              <a href="https://github.com/tskaj" target="_blank">
                About Me
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@aj.sure/unveiling-the-illusion-the-narrative-of-a-conflict-that-never-was-63ecd0d34abd"
                target="_blank"
              >
                Blogs
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright">
          &copy; {1900 + new Date().getYear()}, Designed by{" "}
          <a
            href="https://www.linkedin.com/in/abdullah-javed-a17b3629b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abdullah Javed
          </a>
          . Coded by{" "}
          <a
            href="https://www.linkedin.com/in/abdullah-javed-a17b3629b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abdullah Javed
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;
