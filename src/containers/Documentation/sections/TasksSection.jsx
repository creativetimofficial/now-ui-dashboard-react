import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

import Task from 'components/Task/Task.jsx';

const codeImport = `import Task from 'components/Task/Task.jsx';`;
const codeExample = `<table className="table">
    <Task />
</table>`;
class TasksSection extends React.Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Tasks</h2>
                    <legend></legend>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeImport}
                    </SyntaxHighlighter>
                    <p>We've created a special component to render the tasks list shown in <code>Dashboard</code> <code>Task</code> card.</p>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeImport}
                    </SyntaxHighlighter>
                    <h3>Example code</h3>
                    <table className="table">
                        <Task />
                    </table>
                    <SyntaxHighlighter language="html" style={monokaiSublime}>
                        {codeExample}
                    </SyntaxHighlighter>
                    <p>If you want to understand this component better, please take a look inside <code>src/components/Tasks/Tasks.jsx</code> file.</p>
                </div>
            </div>
        );
    }
}

export default TasksSection;
