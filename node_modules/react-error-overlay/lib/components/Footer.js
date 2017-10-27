/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { darkGray } from '../styles';

var footerStyle = {
  fontFamily: 'sans-serif',
  color: darkGray,
  marginTop: '0.5rem',
  flex: '0 0 auto'
};

function Footer(props) {
  return React.createElement(
    'div',
    { style: footerStyle },
    props.line1,
    React.createElement('br', null),
    props.line2
  );
}

export default Footer;