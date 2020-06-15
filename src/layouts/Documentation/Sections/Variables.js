/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

class Variables extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Variables
        </h1>
        <p className="bd-lead">
          To make our demo pages (pages found in <code>src/views/*</code>) a bit
          more easy to understand and to have less code, we've created some
          special files with variables, variables which we import where we need
          them.
        </p>
        <p>
          You will find all the nucleo icons in{" "}
          <code>src/variables/icons.js</code>, all the variables regarding the
          charts in <code>src/variables/charts.js</code> and all the rest
          variables (variables used for example in tables, timeline page etc.)
          in <code>src/variables/general.js</code>.
        </p>
        <p>
          At the end of each of these three files you will find the exports with
          comments for you to know where each variables is used.
        </p>
        <p>To use any of these variables you need to import them like so:</p>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { variableName } from 'variables/variableFile.js';`}</SyntaxHighlighter>
        <p>
          Where <code>variableFile.js</code> is one of <code>charts.js</code>,{" "}
          <code>general.js</code> or <code>icons.js</code> and{" "}
          <code>variableName</code> is a variable found at the end of the{" "}
          <code>variableFile.js</code>.
        </p>
      </div>
    );
  }
}

export default Variables;
