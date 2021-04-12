// @ts-ignore
import jdenticon from 'jdenticon';
import { Style, StyleSchema } from '@dicebear/avatars';
import { Options } from './options';
import schema from './schema.json';

export const style: Style<Options> = {
  meta: {
    title: 'Jdenticon',
    creator: '(c) 2014-2018 Daniel Mester Pirttijärvi',
    source: 'https://github.com/dmester/jdenticon',
    license: {
      name: 'MIT',
      link: 'https://opensource.org/licenses/MIT',
    },
  },
  schema: schema as StyleSchema,
  create: ({ prng, options }) => {
    jdenticon.config = {
      hues: options.hues,
      lightness: {
        color: options.colorLightness,
        grayscale: options.grayscaleLightness,
      },
      saturation: {
        color: options.colorSaturation,
        grayscale: options.grayscaleSaturation,
      },
    };

    return {
      attributes: {
        viewBox: '0 0 50 50',
        preserveAspectRatio: 'xMidYMid meet',
      },
      body: jdenticon.toSvg(prng.seed, 50, 0).replace(/<svg.*?>(.*)<\/svg>/, '$1'),
    };
  },
};
