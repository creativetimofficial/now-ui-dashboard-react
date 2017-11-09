import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';
import {
    FormGroup, Label, Input,
    Alert
} from 'reactstrap';

const codeImport = `import { FormGroup, Label, Input } from 'reactstrap';`;

const codeExample = `<FormGroup check>
    <Label check>
        <Input type="checkbox" value="1"/>
        unchecked
        <span className="form-check-sign"></span>
    </Label>
</FormGroup>
<FormGroup check>
    <Label check>
        <Input type="checkbox" value="2" defaultChecked/>
        checked
        <span className="form-check-sign"></span>
    </Label>
</FormGroup>`;

const codeWarning = `<span className="form-check-sign"></span>`;

class CheckboxSection extends React.Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Checboxes</h2>
                    <legend></legend>
                    <p>
                        We've restyled the classic <a href="https://getbootstrap.com/docs/4.0/components/forms/#checkboxes-and-radios" target="_blank" rel="noopener noreferrer">Boostrap Checkbox</a> giving it a more attractive (<a href="https://reactstrap.github.io/components/form/" target="_blank" rel="noopener noreferrer">reactstrap form</a>).
                    </p>
                    <p>To use them you have to import them from <code>reactstrap</code> like so:</p>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeImport}
                    </SyntaxHighlighter>
                    <h3>Example</h3>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" value="1"/>
                            unchecked
                            <span className="form-check-sign"></span>
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" value="2" defaultChecked/>
                            checked
                            <span className="form-check-sign"></span>
                        </Label>
                    </FormGroup>
                    <SyntaxHighlighter language="html" style={monokaiSublime}>
                        {codeExample}
                    </SyntaxHighlighter>
                    <Alert color="warning">
                        Be sure to add <code>{codeWarning}</code> alongside with your checkbox.
                    </Alert>
                    <h3>Props</h3>
                    <p>For <code>Checkbox props</code> please refer to <a href="https://reactstrap.github.io/components/form/" target="_blank" rel="noopener noreferrer">reactstrap form documentation</a>.</p>
                </div>
            </div>
        );
    }
}

export default CheckboxSection;
