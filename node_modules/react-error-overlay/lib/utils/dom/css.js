/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var injectedCount = 0;
var injectedCache = {};

function getHead(document) {
  return document.head || document.getElementsByTagName('head')[0];
}

function injectCss(document, css) {
  var head = getHead(document);
  var style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
  head.appendChild(style);

  injectedCache[++injectedCount] = style;
  return injectedCount;
}

function removeCss(document, ref) {
  if (injectedCache[ref] == null) {
    return;
  }
  var head = getHead(document);
  head.removeChild(injectedCache[ref]);
  delete injectedCache[ref];
}

function applyStyles(element, styles) {
  element.setAttribute('style', '');
  for (var key in styles) {
    if (!styles.hasOwnProperty(key)) {
      continue;
    }
    // $FlowFixMe
    element.style[key] = styles[key];
  }
}

export { getHead, injectCss, removeCss, applyStyles };