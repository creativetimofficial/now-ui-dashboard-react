/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { red } from '../styles';

var headerStyle = {
  fontSize: '2em',
  fontFamily: 'sans-serif',
  color: red,
  whiteSpace: 'pre-wrap',
  // Top bottom margin spaces header
  // Right margin revents overlap with close button
  margin: '0 2rem 0.75rem 0',
  flex: '0 0 auto',
  maxHeight: '50%',
  overflow: 'auto'
};

function Header(props) {
  return React.createElement(
    'div',
    { style: headerStyle },
    props.headerText
  );
}

export default Header;