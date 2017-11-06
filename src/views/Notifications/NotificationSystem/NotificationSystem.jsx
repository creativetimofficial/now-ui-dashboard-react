import React from 'react';
import {
    Alert,
    Col
} from 'reactstrap';

import "./NotificationSystem.css";

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
    onDismiss(nNumber,ye){
        var notify = [];
        var sNotify;
        for(var i = 0 ; i < this.state.notify.length; i++){
            if(this.state.notify[i].key!==nNumber+""){
                // notify.push(this.state.notify[i]);
                if(ye===undefined){
                    sNotify = React.cloneElement(
                        this.state.notify[i],
                        {className: "alert-with-icon animated moveUp"}
                    );
                }
                else {
                    sNotify = React.cloneElement(
                        this.state.notify[i],
                        {className: "alert-with-icon"}
                    );
                }
                // sNotify.className += " animated fadeOutUp";
                notify.push(sNotify);
                console.log(sNotify);
            } else {
                if(ye===undefined){
                    sNotify = React.cloneElement(
                        this.state.notify[i],
                        {className: "alert-with-icon animated fadeOutUp"}
                    );
                    // sNotify.className += " animated fadeOutUp";
                    notify.push(sNotify);
                    console.log(sNotify);

                }
            }
        }
        if(ye===undefined){
            setTimeout(function(){this.onDismiss(nNumber,"ye")}.bind(this),800);
        }

        this.setState({notify: notify});

    }
    notify(options){
        var notify = this.state.notify;
        var topleft = this.state.topleft;
        var nNumber = notify.length;
        if(this.state.notify.length > 0){
            nNumber = parseInt(this.state.notify[this.state.notify.length-1].key,10)+1;
        }
        notify.push(
                <Alert color="info" className="alert-with-icon animated fadeInDown" closeClassName="now-ui-icons ui-1_simple-remove" toggle={() => this.onDismiss(nNumber)} key={nNumber} >
                    <span data-notify="icon" className="now-ui-icons ui-1_bell-53"></span>
                    <span data-notify="message">{options.message}</span>
                </Alert>
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
                    <Col xs={11} sm={4} id="hey">
                    {this.state.notify.map((prop,key)=>{
                        return prop;
                    })}
                    </Col>
                }
            </div>
        );
    }
}

export default NotificationSystem;
