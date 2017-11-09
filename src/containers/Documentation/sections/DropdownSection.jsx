import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const codeImport = `import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';`;

const codeExample = `<UncontrolledDropdown>
    <DropdownToggle caret>
        Dropdown
    </DropdownToggle>
    <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
    </DropdownMenu>
</UncontrolledDropdown>`;

class DropdownSection extends React.Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Dropdowns</h2>
                    <p>
                        We've restyled the classic <a href="http://getbootstrap.com/docs/4.0/components/dropdowns/" target="_blank" rel="noopener noreferrer">Boostrap Checkbox</a> giving it a more attractive (<a href="https://reactstrap.github.io/components/dropdowns/" target="_blank" rel="noopener noreferrer">reactstrap dropdowns</a>).
                    </p>
                    <p>To use you'll have to import them:</p>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeImport}
                    </SyntaxHighlighter>
                    <h3>Example</h3>
                    <UncontrolledDropdown>
                        <DropdownToggle caret>
                            Dropdown
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <SyntaxHighlighter language="html" style={monokaiSublime}>
                        {codeExample}
                    </SyntaxHighlighter>
                    <h3>Props</h3>
                    <p>For <code>Dropdown props</code> please refer to <a href="https://reactstrap.github.io/components/dropdowns/" target="_blank" rel="noopener noreferrer">reactstrap dropdowns documentation</a>.</p>
                </div>
            </div>
        );
    }
}

export default DropdownSection;
