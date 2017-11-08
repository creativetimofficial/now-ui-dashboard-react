import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const fileStructure = `Now UI Dashboard React
├── CHANGELOG.md
├── Documentation
│   └── tutorial-components.html
├── LICENSE.md
├── README.md
├── package.json
├── public
│   ├── apple-icon.png
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets
    │   ├── css
    │   │   └── demo.css
    │   ├── fonts
    │   ├── img
    │   │   ├── flags
    │   └── sass
    │       ├── now-ui-dashboard
    │       │   ├── mixins
    │       │   └── plugins
    │       └── now-ui-dashboard.scss
    ├── components
    │   ├── Card
    │   │   └── Card.jsx
    │   ├── Footer
    │   │   └── Footer.jsx
    │   ├── FormInputs
    │   │   └── FormInputs.jsx
    │   ├── Header
    │   │   └── Header.jsx
    │   ├── Sidebar
    │   │   └── Sidebar.jsx
    │   └── Task
    │       └── Task.jsx
    ├── containers
    │   └── App
    │       └── App.jsx
    ├── elements
    │   ├── CardElements
    │   │   ├── CardLegend.jsx
    │   │   ├── CardStatistics.jsx
    │   │   ├── CardStats.jsx
    │   │   └── UserCardAuthor.jsx
    │   ├── CustomButton
    │   │   └── CustomButton.jsx
    │   ├── CustomCheckbox
    │   │   └── CustomCheckbox.jsx
    │   └── CustomRadio
    │       └── CustomRadio.jsx
    ├── index.js
    ├── routes
    │   └── app.jsx
    ├── variables
    │   ├── charts.jsx
    │   ├── general.jsx
    │   └── icons.jsx
    └── views
        ├── Dashboard
        │   └── Dashboard.jsx
        ├── Icons
        │   └── Icons.jsx
        ├── Maps
        │   └── Maps.jsx
        ├── Notifications
        │   ├── NotificationSystem
        │   │   └── NotificationSystem.jsx
        │   └── Notifications.jsx
        ├── Table
        │   └── Tables.jsx
        ├── Typography
        │   └── Typography.jsx
        └── User
            └── User.jsx`;

class TutorialSection extends React.Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>License</h2>
                    <legend></legend>
                    <p><b>MIT License</b></p>
                    <p>Copyright (c) 2017 Creative Tim (<a href="http://creative-tim.com/">http://creative-tim.com/</a>)</p>
                    <p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
                    <p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
                    <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
                </div>
                <div className="tim-row">
                    <h2>Getting started</h2>
                    <legend></legend>
                    <p>
                        <b>Now UI Dashboard with React</b> is built on top of <a href="" target="_blank" rel="noopener noreferrer">Bootstrap 4 beta 2</a> and <a href="" target="_blank" rel="noopener noreferrer">reactstrap</a>, so you can safely use it on your
                        existing or new Bootstrap project. No line of code from Bootstrap 4 was changed, so you don't have to worry about
                        undesired effects in your work.
                    </p>
                    <ul>
                        <li>Install NodeJs from <a href="https://nodejs.org/en/">NodeJs Official Page</a></li>
                        <li>Open Terminal</li>
                        <li>Go to your file project</li>
                        <li>
                            Run in terminal:
                            <SyntaxHighlighter language="javascript" style={monokaiSublime}>{`npm install`}</SyntaxHighlighter>
                        </li>
                        <li>
                            Then:
                            <SyntaxHighlighter language="javascript" style={monokaiSublime}>{`npm start`}</SyntaxHighlighter>
                        </li>
                        <li>
                            Navigate to <a href="http://localhost:3000">http://localhost:3000</a>
                        </li>
                        <li>
                            If you don't have cross-env installed globally then run in terminal
                            <SyntaxHighlighter language="javascript" style={monokaiSublime}>{`npm i -g cross-env`}</SyntaxHighlighter>
                        </li>
                    </ul>
                    <p>You can additionaly use these commands:</p>
                    <ul>
                        <li>
                            in terminal
                            <SyntaxHighlighter language="javascript" style={monokaiSublime}>{`npm test`}</SyntaxHighlighter>
                            (runs the test watcher in an interactive mode)
                        </li>
                        <li>
                            in terminal
                            <SyntaxHighlighter language="javascript" style={monokaiSublime}>{`npm run build`}</SyntaxHighlighter>
                            (builds the app for production to the <code>build</code> folder)
                        </li>
                    </ul>
                    <p>Also, for additional information you can refer to{' '}
                        <a
                            href="https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                Create React App documentation
                            </a>.
                    </p>
                    <h3>File structure</h3>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>{fileStructure}</SyntaxHighlighter>
                </div>
            </div>
        );
    }
}

export default TutorialSection;
