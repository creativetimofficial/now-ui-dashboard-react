import React, { Component } from 'react';
import { Button } from 'reactstrap';
// used to make this component's props into classes
import cx from 'classnames';
// used for making the prop types of this component
import PropTypes from 'prop-types';


class CustomButton extends Component {
    render() {
        const {
            simple, round, icon, neutral, iconMini, leftLabel, rightLabel, wd, className,
            twitter, facebook, google, linkedin, pinterest, youtube, tumblr, github, behance, dribbble, reddit, stumbleupon,
             ...rest
         } = this.props;

        var btnClasses = cx({
            'btn-simple': simple,
            'btn-round': round,
            'btn-icon': icon,
            'btn-neutral': neutral,
            'btn-icon btn-icon-mini': iconMini,
            'btn-wd': wd,
            'btn-twitter': twitter,
            'btn-facebook': facebook,
            'btn-google': google,
            'btn-linkedin': linkedin,
            'btn-pinterest': pinterest,
            'btn-youtube': youtube,
            'btn-tumblr': tumblr,
            'btn-github': github,
            'btn-behance': behance,
            'btn-dribbble': dribbble,
            'btn-reddit': reddit,
            'btn-stumbleupon': stumbleupon
        });

        if(className !== undefined){
            btnClasses += " "+className;
        }

        return (
            <Button className={btnClasses} {...rest}>
                {leftLabel ? (<span className="btn-label"><i className={leftLabel}></i> </span>):null}
                {this.props.children}
                {rightLabel ? (<span className="btn-label btn-label-right"><i className={rightLabel}></i> </span>):null}
            </Button>
        );
    }
}

CustomButton.propTypes = {
    simple: PropTypes.bool,
    round: PropTypes.bool,
    icon: PropTypes.bool,
    neutral: PropTypes.bool,
    iconMini: PropTypes.bool,
    wd: PropTypes.bool,
    twitter: PropTypes.bool,
    facebook: PropTypes.bool,
    google: PropTypes.bool,
    linkedin: PropTypes.bool,
    pinterest: PropTypes.bool,
    youtube: PropTypes.bool,
    tumblr: PropTypes.bool,
    github: PropTypes.bool,
    behance: PropTypes.bool,
    dribbble: PropTypes.bool,
    reddit: PropTypes.bool,
    stumbleupon: PropTypes.bool
}

export default CustomButton;
