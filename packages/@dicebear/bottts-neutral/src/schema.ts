import type { StyleSchema } from '@dicebear/core';

export const schema: StyleSchema = {
  title: 'Options',
  $schema: 'http://json-schema.org/draft-07/schema#',
  properties: {
    backgroundColor: {
      type: 'array',
      items: {
        type: 'string',
        pattern:
          '^([0-9a-zA-Z]+|#[a-fA-F0-9]{3}|#[a-fA-F0-9]{4}|#[a-fA-F0-9]{6}|#[a-fA-F0-9]{8})$',
      },
      default: [
        'amber',
        'blue',
        'blueGrey',
        'brown',
        'cyan',
        'deepOrange',
        'deepPurple',
        'green',
        'grey',
        'indigo',
        'lightBlue',
        'lightGreen',
        'lime',
        'orange',
        'pink',
        'purple',
        'red',
        'teal',
        'yellow',
      ],
      examples: [
        ['amber'],
        ['blue'],
        ['blueGrey'],
        ['brown'],
        ['cyan'],
        ['deepOrange'],
        ['deepPurple'],
        ['green'],
        ['grey'],
        ['indigo'],
        ['lightBlue'],
        ['lightGreen'],
        ['lime'],
        ['orange'],
        ['pink'],
        ['purple'],
        ['red'],
        ['teal'],
        ['yellow'],
      ],
    },
    eyes: {
      type: 'array',
      items: {
        type: 'string',
        enum: [
          'bulging',
          'dizzy',
          'eva',
          'frame1',
          'frame2',
          'glow',
          'happy',
          'hearts',
          'robocop',
          'round',
          'roundFrame01',
          'roundFrame02',
          'sensor',
          'shade01',
        ],
      },
      default: [
        'bulging',
        'dizzy',
        'eva',
        'frame1',
        'frame2',
        'glow',
        'happy',
        'hearts',
        'robocop',
        'round',
        'roundFrame01',
        'roundFrame02',
        'sensor',
        'shade01',
      ],
      examples: [
        ['bulging'],
        ['dizzy'],
        ['eva'],
        ['frame1'],
        ['frame2'],
        ['glow'],
        ['happy'],
        ['hearts'],
        ['robocop'],
        ['round'],
        ['roundFrame01'],
        ['roundFrame02'],
        ['sensor'],
        ['shade01'],
      ],
    },
    mouth: {
      type: 'array',
      items: {
        type: 'string',
        enum: [
          'bite',
          'diagram',
          'grill01',
          'grill02',
          'grill03',
          'smile01',
          'smile02',
          'square01',
          'square02',
        ],
      },
      default: [
        'bite',
        'diagram',
        'grill01',
        'grill02',
        'grill03',
        'smile01',
        'smile02',
        'square01',
        'square02',
      ],
      examples: [
        ['bite'],
        ['diagram'],
        ['grill01'],
        ['grill02'],
        ['grill03'],
        ['smile01'],
        ['smile02'],
        ['square01'],
        ['square02'],
      ],
    },
  },
  additionalProperties: false,
};
