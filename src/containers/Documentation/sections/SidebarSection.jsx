import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const codeImport = `import Sidebar from 'components/Sidebar/Sidebar.jsx';`;
const codeImage = `<div className="sidebar-background" style={{backgroundImage: "url("+image_here+")"}}></div>`;
class SidebarSection extends React.Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Sidebar</h2>
                    <legend></legend>
                    <p>This component is the left menu and is the main navigation of this dashboard. To use it, you need to import it:</p>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeImport}
                    </SyntaxHighlighter>
                    <p>It comes in 6 different colors (<code>black</code>, <code>blue</code>, <code>green</code>, <code>orange</code>, <code>red</code>, <code>yellow</code>).</p>
                    <p>To set the color of this component go to <code>src/components/Sidebar/Sidebar</code> and change the <code>data-color</code> attribute to one of the above colors.</p>
                    <p>Beside this, it comes with an option to add a background image to it.</p>
                    <p>If you want to add a background image to the sidebar navigate to <code>src/components/Sidebar/Sidebar</code> and add <code>{codeImage}</code> at the begining of the first div.</p>
                    <p><code>image_here</code> can be an <code>image src</code> (this has to be located in a <code>public</code> folder) or can be an <code>imported image</code> (this has to be located in the <code>src</code> folder).</p>
                    <p>When using this component (unless you make changes to our code) you will have to pass a prop named <code>routes</code> to it. This prop has to be the routes of your app and all the links in the Sidebar componnet will be made dynamically.</p>
                    <p>Our <code>routes</code> for this dashboard can be found in <code>src/routes/app.jsx</code>. The only thing you have to modify are these routes, and than in <code>App</code> the routes will be made using <code>react-router-dom</code>, and in <code>Sidebar</code> will be made the links, using as well <code>react-router-dom</code>. This is all done dynamically so you don't have to change in two places the app routes (<code>App</code> and <code>Sidebar</code>), you only have to change in <code>scr/routes/app.jsx</code>.</p>
                </div>
            </div>
        );
    }
}

export default SidebarSection;
