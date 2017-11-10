import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';
import Footer from 'components/Footer/Footer.jsx';

const codeImport = `import Footer from 'components/Footer/Footer.jsx';`;

const codeExample = `<Footer fluid/>
<Footer fluid default/>`;

class FooterSection extends React.Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Footers</h2>
                    <legend></legend>
                    <p>Our demo footer is located in <code>src/components/Footer/Footer.jsx</code>.</p>
                    <p>To use it, import it like so:</p>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeImport}
                    </SyntaxHighlighter>
                    <h3>Example</h3>
                    <p>It comes in two colors <code>white</code> (default color) and a <code>light gray</code> (you just pass the <code>default</code> prop to it). It has one more prop, <code>fluid</code>, to make the <code>container</code> of the links <code>container-fluid</code>.</p>
                    <Footer fluid/>
                    <br/>
                    <Footer fluid default/>
                    <br/>
                    <SyntaxHighlighter language="html" style={monokaiSublime}>
                        {codeExample}
                    </SyntaxHighlighter>
                </div>
            </div>
        );
    }
}

export default FooterSection;
