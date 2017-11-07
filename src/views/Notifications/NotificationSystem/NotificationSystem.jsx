import React from 'react';
import {
    Alert,
    Col
} from 'reactstrap';

class NotificationSystem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            notifyTL: [],
            notifyTC: [],
            notifyTR: [],
            notifyBL: [],
            notifyBC: [],
            notifyBR: [],
        };
        this.onDismiss = this.onDismiss.bind(this);
        this.notify = this.notify.bind(this);
    }
    onDismiss(nNumber,place,noAnimate){

        var notify = [];
        var sNotify = this.state["notify"+place.toUpperCase()];
        var dNotify;
        for(var i = 0 ; i < sNotify.length; i++){
            if(sNotify[i].key!==nNumber+""){
                if(sNotify[i].props.className.indexOf("fadeOutUp") !== -1){
                    dNotify = React.cloneElement(
                        sNotify[i]
                    );
                } else {
                    if(noAnimate===undefined){
                        var animation;
                        if(place.indexOf("b")!==-1){
                            animation = sNotify[i].key>nNumber+"" ? " animated moveDown":"";
                        } else {
                            animation = sNotify[i].key>nNumber+"" ? " animated moveUp":"";
                        }
                        dNotify = React.cloneElement(
                            sNotify[i],
                            {className: "alert-with-icon"+animation}
                        );
                    }
                    else {
                        dNotify = React.cloneElement(
                            sNotify[i],
                            {className: "alert-with-icon"}
                        );
                    }
                }
                notify.push(dNotify);
            } else {
                if(noAnimate===undefined){
                    dNotify = React.cloneElement(
                        sNotify[i],
                        {className: "alert-with-icon animated fadeOutUp"}
                    );
                    notify.push(dNotify);

                }
            }
        }
        if(noAnimate===undefined){
            setTimeout(function(){this.onDismiss(nNumber,place,"noAnimate")}.bind(this),800);
        }
        sNotify = {};
        sNotify["notify"+place.toUpperCase()] = notify;
        this.setState(sNotify);

    }
    notify(options){
        var notify = this.state["notify"+options.place.toUpperCase()];
        var nNumber = notify.length;
        if(notify.length > 0){
            if(options.place.indexOf("b")!==-1){
                nNumber = parseInt(notify[0].key,10)+1;
            } else {
                nNumber = parseInt(notify[notify.length-1].key,10)+1;
            }
        }
        var notification = (
            <Alert color={options.type} className="alert-with-icon animated fadeInDown" closeClassName="now-ui-icons ui-1_simple-remove" toggle={() => this.onDismiss(nNumber,options.place)} key={nNumber} >
                <span data-notify="icon" className="now-ui-icons ui-1_bell-53"></span>
                <span data-notify="message">{options.message}</span>
            </Alert>
        );
        if(options.place.indexOf("b")!==-1){
            notify.unshift(
                notification
            );
        } else {
            notify.push(
                notification
            );
        }
        var sNotify = {};
        sNotify["notify"+options.place.toUpperCase()] = notify;
        if( options.autoDismiss > 0)
            setTimeout(function(){this.onDismiss(nNumber,options.place);}.bind(this),options.autoDismiss*1000+(notify.length-1)*1000);
        this.setState(sNotify);
    }
    showAllNotifications(place){
        if(this.state["notify"+place.toUpperCase()].length > 0){
            var style = {display: "inline-block",margin: "0px auto",position: "fixed",transition: "all 0.5s ease-in-out",zIndex: "1031"};
            if(place.indexOf("t")!==-1){
                style["top"] = "20px";
                switch (place) {
                    case "tl":
                        style["left"] =  "20px";
                        break;
                    case "tc":
                        style["left"] = "0px";
                        style["right"] = "0px";
                        break;
                    case "tr":
                        style["right"] = "20px";
                        break;
                    default:
                        break;
                    }
            } else {
                style["bottom"] = "20px";
                switch (place) {
                    case "bl":
                        style["left"] = "20px";
                        break;
                    case "bc":
                        style["left"] = "0px";
                        style["right"] = "0px";
                        break;
                    case "br":
                        style["right"] = "20px";
                        break;
                    default:
                        break;
                }
            }
            return (
                <Col xs={11} sm={4} style={style}>
                    {
                        this.state["notify"+place.toUpperCase()].map((prop,key)=>{
                            return prop;
                        })
                    }
                </Col>
            );
        }
    }
    render(){
        return (
            <div ref="notifications">
                {this.showAllNotifications("tl")}
                {this.showAllNotifications("tc")}
                {this.showAllNotifications("tr")}
                {this.showAllNotifications("bl")}
                {this.showAllNotifications("bc")}
                {this.showAllNotifications("br")}
            </div>
        );
    }
}

export default NotificationSystem;
