import React from 'react';
import{ Table } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

import Button from 'elements/CustomButton/CustomButton.jsx';

const codeColors = `<Button>Default</Button>
<Button color="primary">Primary</Button>
<Button color="info">Info</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="danger">Danger</Button>
<Button color="light">Light</Button>
<Button color="dark">Dark</Button>
<Button color="dark">Dark</Button>
<Button color="link">Link</Button>`;

const codeSizes = `<Button color="primary" size="lg">Large</Button>
<Button color="primary">Normal</Button>
<Button color="primary" size="sm">Small</Button>`;

const codeStyles = `<Button color="primary">Default</Button>
<Button color="primary" simple>Simple</Button>
<Button color="primary" round>Rounded</Button>
<Button neutral icon round size="lg">
    <i className="fa fa-twitter"></i>
</Button>
<Button round icon iconMini neutral color="info">
    <i className="now-ui-icons ui-2_settings-90"></i>
</Button>
<Button color="primary" neutral>Neutral</Button>`;

class ButtonsSection extends React.Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Buttons</h2>
                    <legend></legend>
                    <p>
                        To use the custom buttons you need to import the custom made component:
                    </p>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {`import Button from 'elements/CustomButton/CustomButton';`}
                    </SyntaxHighlighter>
                    <h4>Colors</h4>
                    <p>
                        We worked over the original Bootstrap classes, choosing a different, slightly intenser color pallete:
                    </p>
                    <p className="button-colors">
                        <Button>Default</Button>
                        <Button color="primary">Primary</Button>
                        <Button color="info">Info</Button>
                        <Button color="success">Success</Button>
                        <Button color="warning">Warning</Button>
                        <Button color="danger">Danger</Button>
                        <Button color="light">Light</Button>
                        <Button color="dark">Dark</Button>
                        <Button color="link">Link</Button>
                    </p>
                    <SyntaxHighlighter language="html" style={monokaiSublime}>
                        {codeColors}
                    </SyntaxHighlighter>
                    <h4>Sizes</h4>
                    <p>Buttons come in all needed sizes:</p>
                    <p>
                        <Button color="primary" size="lg">Large</Button>
                        <Button color="primary">Normal</Button>
                        <Button color="primary" size="sm">Small</Button>
                    </p>

                    <SyntaxHighlighter language="html" style={monokaiSublime}>
                        {codeSizes}
                    </SyntaxHighlighter>

                    <h4>Styles</h4>
                    <p>
                        We added extra classes (defined by <code>props</code>) that can help you better customise the look. Let's see some examples:
                    </p>
                    <p>
                        <Button color="primary">Default</Button>
                        <Button color="primary" simple>Simple</Button>
                        <Button color="primary" round>Rounded</Button>
                        <Button neutral icon round size="lg">
                            <i className="fa fa-twitter"></i>
                        </Button>
                        <Button round icon iconMini neutral color="info">
                            <i className="now-ui-icons ui-2_settings-90"></i>
                        </Button>
                        <Button color="primary" neutral>Neutral</Button>
                    </p>
                    <SyntaxHighlighter language="html" style={monokaiSublime}>
                        {codeStyles}
                    </SyntaxHighlighter>
                    <h4>Props</h4>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>simple</code></td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Use this flag to create outline buttons (buttons that have a small border).</td>
                            </tr>
                            <tr>
                                <td><code>round</code></td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Use this to make the button corners rounded.</td>
                            </tr>
                            <tr>
                                <td><code>icon</code></td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Use this flag to create beautiful buttons that have icons.</td>
                            </tr>
                            <tr>
                                <td><code>iconMini</code></td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Use this flag to create beautiful buttons that have icons.</td>
                            </tr>
                            <tr>
                                <td><code>neutral</code></td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Use this to create buttons with white <code>background-color</code> (they are mostly used on components that have a darker <code>background-color</code>).</td>
                            </tr>

                        </tbody>
                    </Table>
                    <p>
                        Beside these props you can also reffer to{' '}
                        <a
                            href="https://reactstrap.github.io/components/buttons"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            reactstrap documentation
                        </a>.
                    </p>
                </div>
            </div>
        );
    }
}

export default ButtonsSection;
