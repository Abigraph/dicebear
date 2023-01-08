/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 * File: https://www.figma.com/file/KhTfMFWWniVgZmGVFL0KK6
 */

import type { Prng } from '@dicebear/core';
import type { Options, ComponentPickCollection } from '../types.js';
import { pickComponent } from './pickComponent.js';

type Props = {
  prng: Prng,
  options: Options
}

export function getComponents({ prng, options }: Props): ComponentPickCollection {
  const mouthComponent = pickComponent({
    prng,
    group: 'mouth',
    values: options.mouth
  });
  const eyesComponent = pickComponent({
    prng,
    group: 'eyes',
    values: options.eyes
  });
  const cheekComponent = pickComponent({
    prng,
    group: 'cheek',
    values: options.cheek
  });
  const noseComponent = pickComponent({
    prng,
    group: 'nose',
    values: options.nose
  });

  return {
    'mouth': mouthComponent,
    'eyes': eyesComponent,
    'cheek': prng.bool(options.cheekProbability) ? cheekComponent : undefined,
    'nose': noseComponent,
  }
};