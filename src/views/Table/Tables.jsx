import React from 'react';
import {
    Table,
    Container, Row, Col,
    Card, CardHeader, CardTitle, CardSubtitle, CardBody
} from 'reactstrap';

import { thead, tbody } from 'variables/general';

class Tables extends React.Component{
    render(){
        return (
            <Container fluid>
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
            </Container>
        );
    }
}

export default Tables;
