import React from 'react';
import { Table, Alert, Row, Col } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

import Button from 'elements/CustomButton/CustomButton.jsx';

import Notify from 'views/Notifications/NotificationSystem/NotificationSystem';

const codeExampleImport = `import { Alert } from 'reactstrap';`;
const codeExampleConstruct = `constructor(props) {
    super(props);
    this.state = {
        visible: true
    };
    this.onDismiss = this.onDismiss.bind(this);
}
onDismiss(){
    this.setState({visible: !this.state.visible})
}`;

const codeExampleStyles = `<Alert color="info"><span>This is a plain notification</span></Alert>

<Alert
    color="info"
    closeClassName="now-ui-icons ui-1_simple-remove"
    isOpen={this.state.visible}
    toggle={this.onDismiss}
>
    <span>This is a notification with close button.</span>
</Alert>

<Alert
    color="info"
    className="alert-with-icon"
    closeClassName="now-ui-icons ui-1_simple-remove"
    isOpen={this.state.visible}
    toggle={this.onDismiss}
>
    <span data-notify="icon" className="now-ui-icons ui-1_bell-53"></span>
    <span data-notify="message">This is a notification with close button and icon.</span>
</Alert>

<Alert
    color="info"
    className="alert-with-icon"
    closeClassName="now-ui-icons ui-1_simple-remove" isOpen={this.state.visible}
    toggle={this.onDismiss}
>
    <span data-notify="icon" className="now-ui-icons ui-1_bell-53"></span>
    <span data-notify="message">
        This is a notification with close button and icon and have many lines.
        You can see that the icon and the close button are always vertically aligned.
        This is a beautiful notification. So you don't have to worry about the style.
    </span>
</Alert>`;

const codeExampleStates = `<Alert
    color="primary"
    closeClassName="now-ui-icons ui-1_simple-remove"
    isOpen={this.state.visible}
    toggle={this.onDismiss}
>
    <span>
        <b> Primary - </b> This is a regular notification made with
        <code>color="primary"</code>
    </span>
</Alert>
<Alert
    color="primary"
    closeClassName="now-ui-icons ui-1_simple-remove"
    isOpen={this.state.visible}
    toggle={this.onDismiss}
>
    <span>
        <b> Secondary - </b> This is a regular notification made with
        <code>color="secondary"</code>
    </span>
</Alert>
<Alert
    color="primary"
    closeClassName="now-ui-icons ui-1_simple-remove"
    isOpen={this.state.visible}
    toggle={this.onDismiss}
>
    <span>
        <b> Success - </b> This is a regular notification made with
        <code>color="success"</code>
    </span>
</Alert>
<Alert
    color="primary"
    closeClassName="now-ui-icons ui-1_simple-remove"
    isOpen={this.state.visible}
    toggle={this.onDismiss}
>
    <span>
        <b> Danger - </b> This is a regular notification made with
        <code>color="danger"</code>
    </span>
</Alert>
<Alert
    color="primary"
    closeClassName="now-ui-icons ui-1_simple-remove"
    isOpen={this.state.visible}
    toggle={this.onDismiss}
>
    <span>
        <b> Warning - </b> This is a regular notification made with
         <code>color="warning"</code>
    </span>
</Alert>
<Alert
    color="primary"
    closeClassName="now-ui-icons ui-1_simple-remove"
    isOpen={this.state.visible}
    toggle={this.onDismiss}
>
    <span>
        <b> Info - </b> This is a regular notification made with
        <code>color="info"</code>
    </span>
</Alert>
<Alert
    color="primary"
    closeClassName="now-ui-icons ui-1_simple-remove"
    isOpen={this.state.visible}
    toggle={this.onDismiss}
>
    <span>
        <b> Light - </b> This is a regular notification made with
        <code>color="light"</code>
    </span>
</Alert>
<Alert
    color="primary"
    closeClassName="now-ui-icons ui-1_simple-remove"
    isOpen={this.state.visible}
    toggle={this.onDismiss}
>
    <span>
        <b> Dark - </b> This is a regular notification made with
        <code>color="dark"</code>
    </span>
</Alert>`;

const codeExamplePlacesOptions = `var options = {
    place: place,
    message: message,
    type: type,
    autoDismiss: seconds
};
this.refs.notify.notify(options);`;
class NotificationsSection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
        this.onDismiss = this.onDismiss.bind(this);
        this.notify = this.notify.bind(this);
    }
    onDismiss(){

    }
    notify(){
        var color = Math.floor((Math.random() * 8) + 1);
        var type;
        switch (color) {
            case 1:
                type = 'primary';
                break;
            case 2:
                type = 'secondary';
                break;
            case 3:
                type = 'success';
                break;
            case 4:
                type = 'danger';
                break;
            case 5:
                type = 'warning';
                break;
            case 6:
                type = 'info';
                break;
            case 7:
                type = 'light';
                break;
            case 8:
                type = 'dark';
                break;
            default:
                break;
        };
        color = Math.floor((Math.random() * 6) + 1);
        var place;
        switch (color) {
            case 1:
                place = 'tl';
                break;
            case 2:
                place = 'tc';
                break;
            case 3:
                place = 'tr';
                break;
            case 4:
                place = 'bl';
                break;
            case 5:
                place = 'bc';
                break;
            case 6:
                place = 'br';
                break;
            default:
                break;
        };
        var options = {
            place: place,
            message: (
                <div>
                    <div>
                        Welcome to <b>Now UI Dashboard React</b> - a beautiful freebie for every web developer.
                    </div>
                </div>
            ),
            type: type,
            autoDismiss: 7
        }
        this.refs.notify.notify(options);
    }
    render(){
        return (
            <div className="tim-container">
                <Notify ref="notify"/>
                <div className="tim-row">
                    <h2>Notifications</h2>
                    <p>We are very proud to present you our new <code>notification system</code>. It was coded by us from scratch, so you won't have to install any third libraries.</p>
                    <legend></legend>
                    <h3>Styles</h3>
                    <Alert color="info"><span>This is a plain notification</span></Alert>
                    <Alert color="info" closeClassName="now-ui-icons ui-1_simple-remove" isOpen={this.state.visible} toggle={this.onDismiss}>
                        <span>This is a notification with close button.</span>
                    </Alert>
                    <Alert color="info" className="alert-with-icon" closeClassName="now-ui-icons ui-1_simple-remove" isOpen={this.state.visible} toggle={this.onDismiss}>
                        <span data-notify="icon" className="now-ui-icons ui-1_bell-53"></span>
                        <span data-notify="message">This is a notification with close button and icon.</span>
                    </Alert>
                    <Alert color="info" className="alert-with-icon" closeClassName="now-ui-icons ui-1_simple-remove" isOpen={this.state.visible} toggle={this.onDismiss}>
                        <span data-notify="icon" className="now-ui-icons ui-1_bell-53"></span>
                        <span data-notify="message">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
                    </Alert>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeExampleImport}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeExampleConstruct}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language="html" style={monokaiSublime}>
                        {codeExampleStyles}
                    </SyntaxHighlighter>
                    <h3>States</h3>
                    <Alert color="primary" closeClassName="now-ui-icons ui-1_simple-remove" isOpen={this.state.visible} toggle={this.onDismiss}>
                        <span><b> Primary - </b> This is a regular notification made with <code>color="primary"</code></span>
                    </Alert>
                    <Alert color="secondary" closeClassName="now-ui-icons ui-1_simple-remove" isOpen={this.state.visible} toggle={this.onDismiss}>
                        <span><b> Secondary - </b> This is a regular notification made with <code>color="secondary"</code></span>
                    </Alert>
                    <Alert color="success" closeClassName="now-ui-icons ui-1_simple-remove" isOpen={this.state.visible} toggle={this.onDismiss}>
                        <span><b> Success - </b> This is a regular notification made with <code>color="success"</code></span>
                    </Alert>
                    <Alert color="danger" closeClassName="now-ui-icons ui-1_simple-remove" isOpen={this.state.visible} toggle={this.onDismiss}>
                        <span><b> Danger - </b> This is a regular notification made with <code>color="danger"</code></span>
                    </Alert>
                    <Alert color="warning" closeClassName="now-ui-icons ui-1_simple-remove" isOpen={this.state.visible} toggle={this.onDismiss}>
                        <span><b> Warning - </b> This is a regular notification made with <code>color="warning"</code></span>
                    </Alert>
                    <Alert color="info" closeClassName="now-ui-icons ui-1_simple-remove" isOpen={this.state.visible} toggle={this.onDismiss}>
                        <span><b> Info - </b> This is a regular notification made with <code>color="info"</code></span>
                    </Alert>
                    <Alert color="light" closeClassName="now-ui-icons ui-1_simple-remove" isOpen={this.state.visible} toggle={this.onDismiss}>
                        <span><b> Light - </b> This is a regular notification made with <code>color="light"</code></span>
                    </Alert>
                    <Alert color="dark" closeClassName="now-ui-icons ui-1_simple-remove" isOpen={this.state.visible} toggle={this.onDismiss}>
                        <span><b> Dark - </b> This is a regular notification made with <code>color="dark"</code></span>
                    </Alert>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeExampleImport}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeExampleConstruct}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language="html" style={monokaiSublime}>
                        {codeExampleStates}
                    </SyntaxHighlighter>
                    <h3>Places</h3>
                    <div className="places-button">
                        <Row>
                            <Col md={6} lg={6}>
                                <Button block onClick={() => this.notify()}>
                                    Random Position and Color
                                </Button>
                            </Col>
                        </Row>
                    </div>
                    <h4>Usage</h4>
                    <p>First of all, you need to import it:</p>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {`import Notify from 'views/Notifications/NotificationSystem/NotificationSystem';`}
                    </SyntaxHighlighter>
                    <p>Then, you have to put this component somewhere in your render method like so:</p>
                    <SyntaxHighlighter language="html" style={monokaiSublime}>
                        {`<Notify ref="notify"/>`}
                    </SyntaxHighlighter>
                    <p>We've chose to get this component by using <code>refs</code> as you can see.</p>
                    <p>After that, you have to call the <code>notify function</code> from this component with some <code>options</code>:</p>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeExamplePlacesOptions}
                    </SyntaxHighlighter>
                    <h3>Props passed in <code>notify function</code></h3>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><code>place</code></th>
                                <th>string</th>
                                <th>one of <br/><code>"tl"</code> (for notification to be rendered in the top left corner of your screen), <br/> <code>"tc"</code> (for notification to be rendered in the top center corner of your screen), <br/> <code>"tr"</code> (for notification to be rendered in the top right corner of your screen), <br/> <code>"bl"</code> (for notification to be rendered in the bottom left corner of your screen), <br/> <code>"bc"</code> (for notification to be rendered in the bottom center corner of your screen), <br/> <code>"br"</code> (for notification to be rendered in the bottom right corner of your screen)</th>
                            </tr>
                            <tr>
                                <th><code>message</code></th>
                                <th>string / node</th>
                                <th>This is goind to be the message inside the <code>notification</code>.</th>
                            </tr>
                            <tr>
                                <th><code>type</code></th>
                                <th>string</th>
                                <th>This is used to create the color of the <code>notificaion</code> and can be one of <code>primary</code>, <code>secondary</code>, <code>success</code>, <code>danger</code>, <code>warning</code>, <code>info</code>, <code>light</code>, <code>dark</code></th>
                            </tr>
                            <tr>
                                <th><code>autoDismiss</code></th>
                                <th>number</th>
                                <th>Number of seconds before the notification is closed automatically (use <code>0</code> so that the notificaion won't automatically close)</th>
                            </tr>
                        </tbody>
                    </Table>
                    <h3>Props for Alerts</h3>
                    <p>Please refer to <a href="https://reactstrap.github.io/components/alerts/" target="_blank" rel="noopener noreferrer">reactstrap alerts documentation</a>.</p>
                </div>
            </div>
        );
    }
}

export default NotificationsSection;
