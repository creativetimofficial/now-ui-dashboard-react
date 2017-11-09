import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const codeImport = `import { FormGroup, Label, Input } from 'reactstrap';`;

const codeExample = `<FormGroup>
    <FormGroup check>
        <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option one is this and that—be sure to include why it's great
        </Label>
    </FormGroup>
    <FormGroup check>
        <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option two can be something else and selecting it will deselect option one
        </Label>
    </FormGroup>
    <FormGroup check disabled>
        <Label check>
            <Input type="radio" name="radio1" disabled />{' '}
            Option three is disabled
        </Label>
    </FormGroup>
</FormGroup>`;

class RadioSection extends React.Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Radio buttons</h2>
                    <legend></legend>
                    <p>
                        We've restyled the classic <a href="https://getbootstrap.com/docs/4.0/components/forms/#checkboxes-and-radios" target="_blank" rel="noopener noreferrer">Boostrap Checkbox</a> giving it a more attractive (<a href="https://reactstrap.github.io/components/form/" target="_blank" rel="noopener noreferrer">reactstrap form</a>).
                    </p>
                    <p>To use them you have to import them from <code>reactstrap</code> like so:</p>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeImport}
                    </SyntaxHighlighter>
                    <h3>Example</h3>
                    <FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Option one is this and that—be sure to include why it's great
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Option two can be something else and selecting it will deselect option one
                            </Label>
                        </FormGroup>
                        <FormGroup check disabled>
                            <Label check>
                                <Input type="radio" name="radio1" disabled />{' '}
                                Option three is disabled
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <SyntaxHighlighter language="html" style={monokaiSublime}>
                        {codeExample}
                    </SyntaxHighlighter>
                    <h3>Props</h3>
                    <p>For <code>Radio button props</code> please refer to <a href="https://reactstrap.github.io/components/form/" target="_blank" rel="noopener noreferrer">reactstrap form documentation</a>.</p>
                </div>
            </div>
        );
    }
}

export default RadioSection;
