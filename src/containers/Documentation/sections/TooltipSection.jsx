import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';
import { UncontrolledTooltip} from 'reactstrap';

import Button from 'elements/CustomButton/CustomButton';

const codeImport = `import { UncontrolledTooltip } from 'reactstrap';`;

const codeImportControlled = `import { Tooltip } from 'reactstrap';`;

const codeExample = `<Button
    id="docEdit1"
    round icon iconMini neutral
    color="info"
>
    <i className="now-ui-icons ui-2_settings-90"></i>
</Button>
<UncontrolledTooltip placement="top" target="docEdit1" delay={0}>
    Edit Task
</UncontrolledTooltip>

<Button
    id="docRemove1"
    round icon iconMini neutral
    color="danger"
>
    <i className="now-ui-icons ui-1_simple-remove"></i>
</Button>
<UncontrolledTooltip placement="top" target="docRemove1" delay={0}>
    Remove
</UncontrolledTooltip>`;

class TooltipSection extends React.Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Tooltips</h2>
                    <legend></legend>
                    <p>To use this component you need to import it from reactstrap like this:</p>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeImport}
                    </SyntaxHighlighter>
                    <p>or if you want a controlled one (you'll have to add a <code>state</code> and a <code>function</code> for controlling the tooltip to your component):</p>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeImportControlled}
                    </SyntaxHighlighter>
                    <h3>Example</h3>
                    <Button
                        id="docEdit1"
                        round icon iconMini neutral
                        color="info"
                    >
                        <i className="now-ui-icons ui-2_settings-90"></i>
                    </Button>
                    <UncontrolledTooltip placement="top" target="docEdit1" delay={0}>Edit Task</UncontrolledTooltip>
                    <Button
                        id="docRemove1"
                        round icon iconMini neutral
                        color="danger"
                    >
                        <i className="now-ui-icons ui-1_simple-remove"></i>
                    </Button>
                    <UncontrolledTooltip placement="top" target="docRemove1" delay={0}>Remove</UncontrolledTooltip>
                    <SyntaxHighlighter language="html" style={monokaiSublime}>
                        {codeExample}
                    </SyntaxHighlighter>
                    In this examples we have used Button elements for the tooltips to appear over. You can use different elements. For more information about tooltips and how to use them, please refer to <a href="https://reactstrap.github.io/components/tooltips/" target="_blank" rel="noopener noreferrer">reactstrap documentation</a>.
                </div>
            </div>
        );
    }
}

export default TooltipSection;
