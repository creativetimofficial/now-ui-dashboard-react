/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { parse } from '../../utils/parser';

test('15.y.z', function () {
  expect(parse('Warning: Each child in array should have a unique "key" prop. Check render method of `FileA`.\n     in div (at FileA.js:9)\n     in FileA (at App.js:9)\n     in div (at App.js:8)\n     in App (at index.js:7)')).toMatchSnapshot();
});