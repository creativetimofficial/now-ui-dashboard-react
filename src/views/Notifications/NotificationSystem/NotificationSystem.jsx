import React from 'react';
import {
    Alert,
    Col
} from 'reactstrap';

class NotificationSystem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            notify: [],
            topleft: 20,
            topcenter: 20,
            topright: 20
        };
        this.onDismiss = this.onDismiss.bind(this);
        this.notify = this.notify.bind(this);
    }
    onDismiss(nDelete){
        var nState = {};
        console.log(this.state);
        nState[nDelete] = false;
        this.setState(nState);
    }
    notify(options){
        // console.log(this.refs.hey.style);
        var notify = this.state.notify;
        var topleft = this.state.topleft;
        if(this.refs.notifications.childNodes[0] !== undefined){
            topleft += this.refs.notifications.childNodes[0].clientHeight-8;
        }
        var nState = {};
        nState["visible"+notify.length] = true;
        var nNumber = "visible"+notify.length;
        this.setState(nState);
        console.log(this.state);
        notify.push(
            <Col xs={11} sm={4} style={{display: "inline-block", margin: "0px auto", position: "fixed", transition: "all 0.5s ease-in-out", zIndex: "1031", top: topleft+"px", left: "20px"}} key={notify.length}>
                <Alert color="info" isOpen={this.state.nNumber} className="alert-with-icon" closeClassName="now-ui-icons ui-1_simple-remove" toggle={() => this.onDismiss(nNumber)}>
                    <span data-notify="icon" className="now-ui-icons ui-1_bell-53"></span>
                    <span data-notify="message">{options.message}</span>
                </Alert>
            </Col>
        )
        this.setState({
            notify: notify,
            topleft: topleft
        });
    }
    render(){
        return (
            <div ref="notifications">
                {
                    this.state.notify.map((prop,key)=>{
                        return prop;
                    })
                }
            </div>
        );
    }
}

export default NotificationSystem;
