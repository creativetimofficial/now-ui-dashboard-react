import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';
import {
    Table,
    Row, Col,
    Card, CardHeader, CardTitle, CardSubtitle, CardBody
} from 'reactstrap';

import { thead, tbody } from 'variables/general';

const codeImport = `import { Table } from 'reactstrap';
import { thead, tbody } from 'variables/general';`;

const codeExample = `<Row>
    <Col md={12}>
        <Card>
            <CardHeader>
                <CardTitle>Striped Table with Hover</CardTitle>
                <CardSubtitle>Here is s subtitle for this table</CardSubtitle>
            </CardHeader>
            <CardBody className="table-full-width">
                <Table responsive striped hover>
                    <thead>
                        <tr>
                            {
                                thead.map((prop, key) => {
                                    return (
                                        <th  key={key}>{prop}</th>
                                    );
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tbody.map((prop,key) => {
                                return (
                                    <tr key={key}>
                                        <td>
                                            { key + 1 }
                                        </td>
                                        {
                                            prop.map((prop,key)=> {
                                                return (
                                                    <td  key={key}>{prop}</td>
                                                );
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    </Col>
    <Col md={12}>
        <Card className="card-plain">
            <CardHeader>
                <CardTitle>Table on Plain Background</CardTitle>
                <CardSubtitle>Here is s subtitle for this table</CardSubtitle>
            </CardHeader>
            <CardBody className="table-full-width">
                <Table responsive hover>
                    <thead>
                        <tr>
                            {
                                thead.map((prop, key) => {
                                    return (
                                        <th  key={key}>{prop}</th>
                                    );
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tbody.map((prop,key) => {
                                return (
                                    <tr key={key}>
                                        <td>
                                            { key + 1 }
                                        </td>
                                        {
                                            prop.map((prop,key)=> {
                                                return (
                                                    <td  key={key}>{prop}</td>
                                                );
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    </Col>
</Row>`;

class TableSection extends React.Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Tables</h2>
                    <legend></legend>
                    <p>For tables we've used the map function to make the data in them more dynamically. They are simple Table elements from react-bootstrap. For more information on them you can refer to <a href="https://reactstrap.github.io/components/tables/" target="_blank" rel="noopener noreferrer">reactstrap documentation</a>.</p>
                    <h3>Example</h3>
                    <Row>
                        <Col md={12}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Striped Table with Hover</CardTitle>
                                    <CardSubtitle>Here is s subtitle for this table</CardSubtitle>
                                </CardHeader>
                                <CardBody className="table-full-width">
                                    <Table responsive striped hover>
                                        <thead>
                                            <tr>
                                                {
                                                    thead.map((prop, key) => {
                                                        return (
                                                            <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                tbody.map((prop,key) => {
                                                    return (
                                                        <tr key={key}>
                                                            <td>
                                                                { key + 1 }
                                                            </td>
                                                            {
                                                                prop.map((prop,key)=> {
                                                                    return (
                                                                        <td  key={key}>{prop}</td>
                                                                    );
                                                                })
                                                            }
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={12}>
                            <Card className="card-plain">
                                <CardHeader>
                                    <CardTitle>Table on Plain Background</CardTitle>
                                    <CardSubtitle>Here is s subtitle for this table</CardSubtitle>
                                </CardHeader>
                                <CardBody className="table-full-width">
                                    <Table responsive hover>
                                        <thead>
                                            <tr>
                                                {
                                                    thead.map((prop, key) => {
                                                        return (
                                                            <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                tbody.map((prop,key) => {
                                                    return (
                                                        <tr key={key}>
                                                            <td>
                                                                { key + 1 }
                                                            </td>
                                                            {
                                                                prop.map((prop,key)=> {
                                                                    return (
                                                                        <td  key={key}>{prop}</td>
                                                                    );
                                                                })
                                                            }
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeImport}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language="html" style={monokaiSublime}>
                        {codeExample}
                    </SyntaxHighlighter>
                </div>
            </div>
        );
    }
}

export default TableSection;
