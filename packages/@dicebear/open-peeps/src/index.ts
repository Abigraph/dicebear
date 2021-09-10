/*!
 * Open Peeps (@dicebear/open-peeps)
 *
 * Code licensed under MIT License.
 * Copyright (c) 2021 Florian Körner
 *
 * Design "Open Peeps" by Pablo Stanley licensed under CC0 1.0.
 * Source: https://www.openpeeps.com/
 * License: https://creativecommons.org/publicdomain/zero/1.0/
 */

import { utils } from '@dicebear/core';
import { style } from './core';

let { create, meta, schema } = style;

export { create, meta, schema };
export { Options } from './options';

/** @deprecated will be removed in Version 5.0 */
export default utils.style.createLegacyWrapper(style);
