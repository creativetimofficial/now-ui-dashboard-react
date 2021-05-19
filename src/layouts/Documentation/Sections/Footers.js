/*!

=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

import Footer from "components/Footer/Footer.js";

const codeImport = `import Footer from 'components/Footer/Footer.js';`;

const codeExample = `<Footer fluid/>
<Footer fluid default/>`;

class FooterSection extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Footers
        </h1>
        <p className="bd-lead">
          Our demo footer is located in{" "}
          <code>src/components/Footer/Footer.js</code>.
        </p>
        <p>To use it, import it like so:</p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeImport}
        </SyntaxHighlighter>
        <h3>Example</h3>
        <p>
          It comes in two colors <code>white</code> (default color) and a{" "}
          <code>light gray</code> (you just pass the <code>default</code> prop
          to it). It has one more prop, <code>fluid</code>, to make the{" "}
          <code>container</code> of the links <code>container-fluid</code>.
        </p>
        <div className="bd-example">
          <Footer fluid />
        </div>
        <br />
        <div className="bd-example">
          <Footer fluid default />
        </div>
        <br />
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default FooterSection;
