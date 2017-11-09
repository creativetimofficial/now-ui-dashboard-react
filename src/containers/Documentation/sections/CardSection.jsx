import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const codeImport = `import CardLegend from 'elements/CardElements/CardLegend.jsx';
import CardStatistics from 'elements/CardElements/CardStatistics.jsx';
import CardStats from 'elements/CardElements/CardStats.jsx';
import UserCardAuthor from 'elements/CardElements/UserCardAuthor.jsx';`;

const codeCard = ``;

const codeUserCard = ``;

class CardSection extends React.Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Cards</h2>
                    <legend></legend>
                    <p>
                        We've restyled the classic <a href="http://getbootstrap.com/docs/4.0/components/card/" target="_blank" rel="noopener noreferrer">Boostrap Card</a> giving it a more attractive look and we've added some extra elements for this component (<a href="https://reactstrap.github.io/components/card/" target="_blank" rel="noopener noreferrer">reactstrap card</a>).
                    </p>
                    <p>
                        To use our custom made elements for this component you need to import them like so:
                    </p>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeImport}
                    </SyntaxHighlighter>
                    <h3>Example</h3>
                    <legend></legend>

                </div>
            </div>
        );
    }
}

export default CardSection;
