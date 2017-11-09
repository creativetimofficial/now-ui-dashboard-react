import React from 'react';
import {
    Col, Table,
    Card, CardHeader, CardBody, CardTitle, CardImg, CardSubtitle, CardFooter
} from 'reactstrap'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

import CardLegend from 'elements/CardElements/CardLegend.jsx';
import CardStatistics from 'elements/CardElements/CardStatistics.jsx';
import CardStats from 'elements/CardElements/CardStats.jsx';
import CardAuthor from 'elements/CardElements/CardAuthor.jsx';
import CardSocials from 'elements/CardElements/CardSocials.jsx';

import userBackground from 'assets/img/bg5.jpg';
import userAvatar from 'assets/img/ryan.jpg';

const codeImport = `import CardLegend from 'elements/CardElements/CardLegend.jsx';
import CardStatistics from 'elements/CardElements/CardStatistics.jsx';
import CardStats from 'elements/CardElements/CardStats.jsx';
import CardAuthor from 'elements/CardElements/CardAuthor.jsx';
import CardSocials from 'elements/CardElements/CardSocials.jsx';`;

const codeImportUser = `import userBackground from 'assets/img/bg5.jpg';
import userAvatar from 'assets/img/ryan.jpg';`;

const codeCard = `<Col xs="12" md="8">
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
                    { i: "now-ui-icons loader_refresh spin", t: "Updated 3 minutes ago"}
                ]}
            </CardStats>
        </CardFooter>
    </Card>
</Col>`;

const codeUserCard = `<Col md={8}>
    <Card className="card-user">
        <CardImg top src={userBackground} alt="user avatar"/>
        <CardBody>
            <CardAuthor
                avatar={userAvatar}
                avatarAlt="..."
                title="Mike Andrew"
                description="michael23"
            />
            <p className="description text-center">
                "Lamborghini Mercy <br/>
                Your chick she so thirsty <br/>
                I'm in that two seat Lambo"
            </p>
        </CardBody>
        <hr />
        <CardSocials
            size="lg"
            socials={[
                {
                    icon: "fa fa-facebook-square",
                    href: "https://www.facebook.com/"
                },
                {
                    icon: "fa fa-twitter",
                    href: "https://www.facebook.com/"
                },
                {
                    icon: "fa fa-google-plus-square",
                    href: "https://plus.google.com/discover"
                },
            ]}
        />
    </Card>
</Col>`;

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
                    <Col xs="12" md="8">
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
                                        { i: "now-ui-icons loader_refresh spin", t: "Updated 3 minutes ago"}
                                    ]}
                                </CardStats>
                            </CardFooter>
                        </Card>
                    </Col>
                    <SyntaxHighlighter language="html" style={monokaiSublime}>
                        {codeCard}
                    </SyntaxHighlighter>
                    <Col md={8}>
                        <Card className="card-user">
                            <CardImg top src={userBackground} alt="user avatar"/>
                            <CardBody>
                                <CardAuthor
                                    avatar={userAvatar}
                                    avatarAlt="..."
                                    title="Mike Andrew"
                                    description="michael23"
                                />
                                <p className="description text-center">
                                    "Lamborghini Mercy <br/>
                                    Your chick she so thirsty <br/>
                                    I'm in that two seat Lambo"
                                </p>
                            </CardBody>
                            <hr />
                            <CardSocials
                                size="lg"
                                socials={[
                                    {
                                        icon: "fa fa-facebook-square",
                                        href: "https://www.facebook.com/"
                                    },
                                    {
                                        icon: "fa fa-twitter",
                                        href: "https://www.facebook.com/"
                                    },
                                    {
                                        icon: "fa fa-google-plus-square",
                                        href: "https://plus.google.com/discover"
                                    },
                                ]}
                            />
                        </Card>
                    </Col>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeImportUser}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language="html" style={monokaiSublime}>
                        {codeUserCard}
                    </SyntaxHighlighter>
                    <h3>Props</h3>
                    <legend></legend>
                    <h4>CardLegend</h4>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><code>children</code></th>
                                <th>array of object</th>
                                <th>null</th>
                                <th>Use this prop to create multiple round icons with text as a legend to your card (<code>i</code> is used for the stat icon, and <code>t</code> for the text).</th>
                            </tr>
                        </tbody>
                    </Table>
                    <h4>CardStatistics</h4>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><code>description</code></th>
                                <th>string / node</th>
                                <th>null</th>
                                <th>Use this prop to set the name of your statistics.</th>
                            </tr>
                            <tr>
                                <th><code>stat</code></th>
                                <th>string / node</th>
                                <th>null</th>
                                <th>Use this prop to set the main content of your statistics.</th>
                            </tr>
                            <tr>
                                <th><code>date</code></th>
                                <th>string / node</th>
                                <th>null</th>
                                <th>Use this prop to set the date of your statistics</th>
                            </tr>
                            <tr>
                                <th><code>badgeIcon</code></th>
                                <th>string</th>
                                <th>""</th>
                                <th>Use this prop to create a badge for your statistics and add an icon to this badge.</th>
                            </tr>
                            <tr>
                                <th><code>duration</code></th>
                                <th>string / node</th>
                                <th>null</th>
                                <th>Use this prop to create a badge for your statistics and add text to this badge.</th>
                            </tr>
                        </tbody>
                    </Table>
                    <h4>CardStats</h4>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><code>children</code></th>
                                <th>array of object</th>
                                <th>null</th>
                                <th>Use this prop to create multiple round icons with text as stats to your card (<code>i</code> is used for the stat icon, and <code>t</code> for the text).</th>
                            </tr>
                        </tbody>
                    </Table>
                    <h4>CardAuthor</h4>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><code>link</code></th>
                                <th>string</th>
                                <th>"#"</th>
                                <th>Use this prop to set a link on author.</th>
                            </tr>
                            <tr>
                                <th><code>avatar</code></th>
                                <th>string</th>
                                <th>undefined</th>
                                <th>Use this prop to add an image to your user card author.</th>
                            </tr>
                            <tr>
                                <th><code>avatarAlt</code></th>
                                <th>string</th>
                                <th>undefined</th>
                                <th>Use this prop to add an image alt for your user image author.</th>
                            </tr>
                            <tr>
                                <th><code>title</code></th>
                                <th>string / node</th>
                                <th>undefined</th>
                                <th>Use this prop to add a title to your user card author.</th>
                            </tr>
                            <tr>
                                <th><code>description</code></th>
                                <th>string / node</th>
                                <th>undefined</th>
                                <th>Use this prop to add a description to your user card author.</th>
                            </tr>
                        </tbody>
                    </Table>
                    <h4>CardSocials</h4>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><code>size</code></th>
                                <th>string</th>
                                <th>undefined</th>
                                <th>Use this prop to set the size of all social icons.</th>
                            </tr>
                            <tr>
                                <th><code>socials</code></th>
                                <th>array of objects</th>
                                <th>undefined</th>
                                <th>Use this prop to create multiple social icons (<code>icon</code> is a string used to create the icon of the social button and <code>href</code> is used to add a link to this button).</th>
                            </tr>
                        </tbody>
                    </Table>
                    <p>
                        For more props on card elements and components please refer to <a href="https://reactstrap.github.io/components/card/" target="_blank" rel="noopener noreferrer">reactstrap card documentation</a>.
                    </p>
                </div>
            </div>
        );
    }
}

export default CardSection;
