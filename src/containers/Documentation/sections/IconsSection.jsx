import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';
import {
    Row, Col,
    Card, CardBody
} from 'reactstrap';

const codeImport = `import icons from 'variables/icons';`;

const codeExample = `<Col lg={3} md={4} sm={5} xs={7} className="font-icon-list">
    <Card>
        <CardBody className="all-icons">
            <Row>
                <Col className="font-icon-list">
                    <div className="font-icon-detail">
                        <i className="now-ui-icons education_atom"></i>
                        <p>education_atom</p>
                    </div>
                </Col>
            </Row>
        </CardBody>
    </Card>
</Col>`;

class IconsSection extends React.Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Icons</h2>
                    <p>For this dashboard we've used 100 awesome nucleo icons handcrafted by our friends from <a href="https://nucleoapp.com/?ref=creativetim" target="_blank" rel="noopener noreferrer">NucleoApp</a>.</p>
                    <p>You will find all these icons in <code>src/variables/icons.jsx</code>.</p>
                    <p>You can import all of them like so:</p>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeImport}
                    </SyntaxHighlighter>
                    <h3>Examples</h3>
                    <Col lg={3} md={4} sm={5} xs={7} className="font-icon-list">
                        <Card>
                            <CardBody className="all-icons">
                                <Row>
                                    <Col className="font-icon-list">
                                        <div className="font-icon-detail">
                                            <i className="now-ui-icons education_atom"></i>
                                            <p>education_atom</p>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <SyntaxHighlighter language="html" style={monokaiSublime}>
                        {codeExample}
                    </SyntaxHighlighter>
                </div>
            </div>
        );
    }
}

export default IconsSection;
