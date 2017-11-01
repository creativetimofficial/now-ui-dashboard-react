import React, { Component } from 'react';
import { Button } from 'reactstrap';
// used to make this component's props into classes
import cx from 'classnames';
// used for making the props of this component to bool
import PropTypes from 'prop-types';


class CustomButton extends Component {
    render() {
        const {
            simple, round, icon, neutral, iconMini,
             ...rest
         } = this.props;

        const btnClasses = cx({
            'btn-simple': simple,
            'btn-round': round,
            'btn-icon': icon,
            'btn-neutral': neutral,
            'btn-icon-mini': iconMini
        });

        return (
            <Button
                className={btnClasses}
                {...rest}
            />
        );
  }
}

CustomButton.propTypes = {
    simple: PropTypes.bool,
    round: PropTypes.bool,
    icon: PropTypes.bool,
    neutral: PropTypes.bool,
    iconMini: PropTypes.bool
}

export default CustomButton;
