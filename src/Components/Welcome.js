import React, { Component } from "react";
import "./Welcome.css";
import "smoothscroll-polyfill";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Welcome">
        <h1 className="fade-in">
          Unfortunately I'm too busy to create my own website, although feel free to contact me!
        </h1>
        <h3>
          <a
            className="contact-link"
            href="mailto:bencebarnabasszocs@gmail.com?subject=Mail from a customer"
          >
            bencebarnabasszocs@gmail.com
          </a>
        </h3>
        <Link to="Portofolio_" spy={true} smooth={true}>
        <button className="scroll-button">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-down"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        </Link>
      </div>
    );
  }
}

export default Welcome;