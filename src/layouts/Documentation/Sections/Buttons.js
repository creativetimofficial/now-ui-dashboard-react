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

import { Button } from "reactstrap";

const codeColorsExample = `<Button>Default</Button>
<Button color="primary">Primary</Button>
<Button color="info">Info</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="danger">Danger</Button>
<Button color="light">Light</Button>
<Button color="dark">Dark</Button>
<Button color="link">Link</Button>`;

const codeSizesExample = `<Button color="primary" size="lg">Large</Button>
<Button color="primary">Normal</Button>
<Button color="primary" size="sm">Small</Button>`;

const codeStylesExample = `<Button color="primary">Default</Button>
<Button color="primary" className="btn-wd">Min width 140px</Button>
<Button color="primary" outline>Simple</Button>
<Button color="primary" className="btn-round">Rounded</Button>
<Button color="primary" className="btn-round">
    <i className="now-ui-icons ui-2_favourite-28"></i> With icon
</Button>
<Button size="lg" className="btn-round btn-neutral btn-icon">
    <i className="fab fa-twitter"></i>
</Button>
<Button color="info" className="btn-round btn-icon btn-icon-mini btn-neutral">
    <i className="now-ui-icons ui-2_settings-90"></i>
</Button>
<Button color="primary" className="btn-neutral">Neutral</Button>`;

const codeDisabledButtons = `<Button color="primary" size="lg" disabled>Primary button</Button>
<Button color="secondary" size="lg" disabled>Button</Button>`;

const codeDisabledA = `<Button href="#" color="primary" size="lg" disabled>Primary link</Button>
<Button href="#" color="secondary" size="lg" disabled>Link</Button>`;

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Buttons
        </h1>
        <p className="bd-lead">
          Use Now UI Dashboard's custom button styles for actions in forms,
          dialogs, and more with support for multiple sizes, states, and more.
        </p>
        <h2>Import</h2>
        <p>
          To use the custom buttons you need to import the custom made
          component:
        </p>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Button } from "reactstrap";`}</SyntaxHighlighter>
        <h2>Examples</h2>
        <p>
          Now UI Dashboard has changed the predefined button styles from
          Bootstrap, each serving its own semantic purpose, with a few extras
          thrown in for more control.
        </p>
        <div className="bd-example">
          <Button>Default</Button>
          <Button color="primary">Primary</Button>
          <Button color="info">Info</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
          <Button color="danger">Danger</Button>
          <Button color="light">Light</Button>
          <Button color="dark">Dark</Button>
          <Button color="link">Link</Button>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeColorsExample}
        </SyntaxHighlighter>
        <h2>Style buttons</h2>
        <p>
          We added extra classes (defined by <code>props</code>) that can help
          you better customise the look. Let{"'"}s see some examples:
        </p>
        <div className="bd-example">
          <Button color="primary">Default</Button>
          <Button color="primary" className="btn-wd">
            Min width 140px
          </Button>
          <Button color="primary" outline>
            Simple
          </Button>
          <Button color="primary" className="btn-round">
            Rounded
          </Button>
          <Button color="primary" className="btn-round">
            <i className="now-ui-icons ui-2_favourite-28" /> With icon
          </Button>
          <Button size="lg" className="btn-round btn-icon btn-neutral">
            <i className="fab fa-twitter" />
          </Button>
          <Button
            color="info"
            className="btn-round btn-icon btn-icon-mini btn-neutral"
          >
            <i className="now-ui-icons ui-2_settings-90" />
          </Button>
          <Button color="primary" className="btn-neutral">
            Neutral
          </Button>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeStylesExample}
        </SyntaxHighlighter>
        <h2>Sizes</h2>
        <p>
          Fancy larger or smaller buttons? Add <code>{`size="lg"`}</code> or{" "}
          <code>{`size="sm"`}</code> for additional sizes.
        </p>
        <div className="bd-example">
          <Button color="primary" size="lg">
            Large
          </Button>
          <Button color="primary">Normal</Button>
          <Button color="primary" size="sm">
            Small
          </Button>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSizesExample}
        </SyntaxHighlighter>
        <h2>
          <code>{`<a>`}</code> tag with button styles
        </h2>
        <p>
          Adding the <code>href</code> prop (without specifying a{" "}
          <code>tag</code> prop) will default the button to a link.
        </p>
        <h2>Disabled state</h2>
        <p>
          Make buttons look inactive by adding the <code>disabled</code> boolean
          attribute to any <code>{`<Button>`}</code> element.
        </p>
        <div className="bd-example">
          <Button color="primary" size="lg" disabled>
            Primary button
          </Button>
          <Button color="secondary" size="lg" disabled>
            Button
          </Button>
          <SyntaxHighlighter language="jsx" style={prism}>
            {codeDisabledButtons}
          </SyntaxHighlighter>
          <Button href="#" color="primary" size="lg" disabled>
            Primary link
          </Button>
          <Button href="#" color="secondary" size="lg" disabled>
            Link
          </Button>
          <SyntaxHighlighter language="jsx" style={prism}>
            {codeDisabledA}
          </SyntaxHighlighter>
        </div>
        <h2>Props</h2>
        <p>
          You can refer to{" "}
          <a
            href="https://reactstrap.github.io/components/buttons/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap documentation
          </a>{" "}
          for more props.
        </p>
      </div>
    );
  }
}

export default Buttons;
