import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

import Tasks from 'components/Tasks/Tasks.jsx';

import { tasks } from 'variables/general.jsx';

const codeImport = `import Tasks from 'components/Tasks/Tasks.jsx';
import { tasks } from 'variables/general.jsx';`;
const codeExample = `<Tasks tasks={tasks}/>`;
class TasksSection extends React.Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Tasks</h2>
                    <legend></legend>
                    <p>We've created a special component to render the tasks list shown in <code>Dashboard</code> <code>Task</code> card.</p>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeImport}
                    </SyntaxHighlighter>
                    <h3>Example code</h3>
                    <Tasks tasks={tasks} />
                    <SyntaxHighlighter language="html" style={monokaiSublime}>
                        {codeExample}
                    </SyntaxHighlighter>
                    <p>In this example we've passed our own tasks in the <code>tasks</code> prop which you'll find in <code>src/variables/general.jsx</code>. This prop has to be an array of strings.</p>
                    <p>If you want to understand this component better, please take a look inside <code>src/components/Tasks/Tasks.jsx</code> file.</p>
                </div>
            </div>
        );
    }
}

export default TasksSection;
