import React from 'react';
import {
    Card, CardHeader, CardBody, CardFooter, CardTitle, CardSubtitle,
    Container, Row, Col
} from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';
import ChartistGraph from 'react-chartist';

import CardLegend from 'elements/CardElements/CardLegend';
import CardStats from 'elements/CardElements/CardStats';
import CardStatistics from 'elements/CardElements/CardStatistics';

import {
    emailStatisticsChart,
    usersBehaviorChart,
    salesChart
} from 'variables/charts.jsx'

const codeImport = `import ChartistGraph from 'react-chartist';`;

const codeImportExamples = `import {
    emailStatisticsChart,
    usersBehaviorChart,
    salesChart
} from 'variables/charts.jsx'
`;

const codeExamples = `<ChartistGraph
    className="ct-chart ct-perfect-fourth"
    data={emailStatisticsChart.data}
    type="Pie"
/>

<ChartistGraph
    className="ct-chart"
    data={usersBehaviorChart.data}
    type="Line"
    options={usersBehaviorChart.options}
    responsiveOptions={usersBehaviorChart.responsiveOptions}
    listener={
        usersBehaviorChart.animation
    }
/>

<ChartistGraph
    className="ct-chart"
    data={salesChart.data}
    type="Bar"
    options={salesChart.options}
    responsiveOptions={salesChart.responsiveOptions}
    listener={
        salesChart.animation
    }
/>
`;

class ChartsSection extends React.Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Charts</h2>
                    <legend></legend>
                    <p>For the charts part we used a react component.</p>
                    <p>To use this component you have to import it like so:</p>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeImport}
                    </SyntaxHighlighter>
                    <p>We've created a special file with all the data from our charts. This file is located in <code>src/variables/charts.jsx</code>. Here you will find everything you want on the carts we've used in our demo app. If you want to use charts as we did in our demo app, you will have to import this variables as well.</p>
                    <h3>Example</h3>
                    <Container fluid>
                        <Row>
                            <Col xs="12" md="6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Email Statistics</CardTitle>
                                        <CardSubtitle>Last Campaign Performance</CardSubtitle>
                                    </CardHeader>
                                    <CardBody>
                                        <ChartistGraph
                                            className="ct-chart ct-perfect-fourth"
                                            data={emailStatisticsChart.data}
                                            type="Pie"
                                        />
                                    </CardBody>
                                    <CardFooter>
                                        <CardLegend>
                                            {[
                                                { i: "fa fa-circle text-gray", t: "Open"},
                                                { i: "fa fa-circle text-primary", t: "Bounce"},
                                                { i: "fa fa-circle text-warning", t: "Unsubscribe"}
                                            ]}
                                        </CardLegend>
                                        <hr />
                                        <CardStats>
                                            {[
                                                { i: "now-ui-icons ui-2_time-alarm", t: "Campaign sent 2 days ago"}
                                            ]}
                                        </CardStats>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Users Behavior</CardTitle>
                                        <CardSubtitle>24 Hours Performance</CardSubtitle>
                                    </CardHeader>
                                    <CardBody>
                                        <CardStatistics
                                            description="NASDAQ: AAPL"
                                            stat="127.33"
                                            date="OCT 2:16 PM EDT"
                                            badgeIcon="now-ui-icons media-2_sound-wave"
                                            duration="1 Year"
                                        />
                                        <ChartistGraph
                                            className="ct-chart"
                                            data={usersBehaviorChart.data}
                                            type="Line"
                                            options={usersBehaviorChart.options}
                                            responsiveOptions={usersBehaviorChart.responsiveOptions}
                                            listener={
                                                usersBehaviorChart.animation
                                            }
                                        />
                                    </CardBody>
                                    <CardFooter>
                                        <hr />
                                        <CardStats>
                                            {[
                                                { i: "now-ui-icons loader_refresh spin", t: "Updated 3 minutes ago"}
                                            ]}
                                        </CardStats>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" md="10">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>2014 Sales</CardTitle>
                                        <CardSubtitle>All Products Including Taxes</CardSubtitle>
                                    </CardHeader>
                                    <CardBody>
                                        <ChartistGraph
                                            className="ct-chart"
                                            data={salesChart.data}
                                            type="Bar"
                                            options={salesChart.options}
                                            responsiveOptions={salesChart.responsiveOptions}
                                            listener={
                                                salesChart.animation
                                            }
                                        />
                                    </CardBody>
                                    <CardFooter>
                                        <CardLegend>
                                            {[
                                                { i: "fa fa-circle text-gray", t: "Tesla Model S"},
                                                { i: "fa fa-circle text-primary", t: "BMW 5 Series"}
                                            ]}
                                        </CardLegend>
                                        <hr />
                                        <CardStats>
                                            {[
                                                { i: "now-ui-icons ui-1_check", t: "Data information certified"}
                                            ]}
                                        </CardStats>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <h3>Imports for these examples</h3>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeImportExamples}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language="html" style={monokaiSublime}>
                        {codeExamples}
                    </SyntaxHighlighter>
                    <h3>Props</h3>
                    <p>For <code>ChartistGraph props</code> please refer to <a href="https://github.com/fraserxu/react-chartist" target="_blank" rel="noopener noreferrer">react-chartist documentation</a> and / or <a href="https://gionkunz.github.io/chartist-js/api-documentation.html" target="_blank" rel="noopener noreferrer">chartistjs documentation</a>.</p>
                </div>
            </div>
        );
    }
}
export default ChartsSection;
