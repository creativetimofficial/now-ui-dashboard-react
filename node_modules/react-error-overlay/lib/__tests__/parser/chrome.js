/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { parse } from '../../utils/parser';

test('stack with eval', function () {
  expect(parse('TypeError: window[f] is not a function\n    at e (file:///Users/joe/Documents/Development/OSS/stack-frame/index.html:25:18)\n    at eval (eval at c (file:///Users/joe/Documents/Development/OSS/stack-frame/index.html:12:9), <anonymous>:1:1)\n    at a (file:///Users/joe/Documents/Development/OSS/stack-frame/index.html:8:9)\n    at file:///Users/joe/Documents/Development/OSS/stack-frame/index.html:32:7')).toMatchSnapshot();
});