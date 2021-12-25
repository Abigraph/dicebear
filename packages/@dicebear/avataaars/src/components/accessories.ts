import type {
  ComponentGroup,
  ComponentPickCollection,
  ColorPickCollection,
} from '../types.js';

export const accessories: ComponentGroup = {
  kurt: (components: ComponentPickCollection, colors: ColorPickCollection) =>
    `<path d="M71 15.11c-11.04 0-12.63-9.08-35.33-10.37C13 3.72 5.82 10.44 5.77 15.11c.04 4.3-1.12 15.45 13.6 28.52 14.77 15.51 29.9 10.25 35.32 5.18 5.45-2.34 11.65-23.35 16.3-23.33 4.67.02 10.87 21 16.32 23.33 5.42 5.07 20.55 10.33 35.33-5.18 14.71-13.07 13.55-24.23 13.58-28.52-.03-4.66-7.2-11.4-29.9-10.37C83.63 6.03 82.05 15.11 71 15.11Z" fill="#000" fill-opacity=".1"/><path d="M71 13.11c-11.04 0-12.63-9.08-35.33-10.37C13 1.72 5.82 8.44 5.77 13.11c.04 4.3-1.12 15.45 13.6 28.52 14.77 15.51 29.9 10.25 35.32 5.18 5.45-2.34 11.65-23.35 16.3-23.33 4.67.02 10.87 21 16.32 23.33 5.42 5.07 20.55 10.33 35.33-5.18 14.71-13.07 13.55-24.23 13.58-28.52-.03-4.66-7.2-11.4-29.9-10.37C83.63 4.03 82.05 13.11 71 13.11Z" fill="${colors.accessories.value}"/><path d="M32.95 7.93c14.27-.29 27.56 7.9 27.18 15.55-.22 5.05-2.93 22.83-19.02 23.33-16.1.5-24.81-17.79-24.46-25.92.2-3.51 2.05-12.67 16.3-12.96ZM109.05 7.93c-14.27-.29-27.56 7.9-27.18 15.55.22 5.05 2.93 22.83 19.02 23.33 16.1.5 24.81-17.79 24.46-25.92-.2-3.51-2.05-12.67-16.3-12.96Z" fill="#2F383B"/>`,
  prescription01: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) =>
    `<g fill-rule="evenodd" clip-rule="evenodd"><path d="M111.71 10.49c4.67.16 8 .88 10.55 4.52 3.01.15 6.25.37 8.98 1.63 3.39 1.56 3.9 5.1-.36 5.59-1.86.2-3.72-.12-5.55-.45l-.19-.03-.33-.06c1.1 9.46-6.21 20.87-14.23 24.35C99.6 50.8 87.34 45.53 81.53 36c-2.62-4.3-4.14-10.51-4.46-15.86-.42-.2-.83-.44-1.23-.67-.38-.22-.76-.44-1.12-.61-2-.98-5.34-1.1-7.5 0-.35.17-.7.37-1.05.58-.42.25-.86.5-1.3.72C64.53 25.5 63.01 31.7 60.4 36c-5.8 9.52-18.07 14.79-29.05 10.03-8.02-3.48-15.33-14.89-14.23-24.35l-.33.06-.2.03c-1.83.33-3.7.66-5.55.45-4.27-.5-3.74-4.03-.36-5.6 2.72-1.25 5.96-1.47 8.97-1.62 2.55-3.62 5.88-4.35 10.55-4.5l23.29-.47c5.19-.14 9.72 0 11.03 4.6a18.7 18.7 0 0 1 6.35-1.25c1.86 0 4.35.45 6.5 1.28 1.3-4.64 5.83-4.77 11.03-4.63l23.3.46Zm-24.03 6.78c-2.37.03-3.5.42-3.9 2.9-.4 2.5 0 5.31.46 7.78.73 3.77 1.92 7.46 4.71 10.22a16.24 16.24 0 0 0 8.32 4.34c.11.03.54.1.96.16.63.1 1.23.18.71.13l-.1-.01h-.06a47.08 47.08 0 0 1 .16 0c3.73.4 7.72.32 10.82-2.04 3.53-2.7 5.95-6.95 7.01-11.2.63-2.48 1.93-8.42-.46-10.4-2.73-2.28-28.63-1.88-28.63-1.88Zm-33.43 0c2.37.03 3.5.42 3.9 2.9.4 2.5 0 5.32-.46 7.78-.73 3.77-1.92 7.46-4.71 10.22a16.23 16.23 0 0 1-8.32 4.35l-.96.15c-.64.1-1.26.19-.68.13-3.73.4-7.74.32-10.85-2.05-3.53-2.69-5.95-6.95-7.01-11.2-.63-2.48-1.93-8.42.46-10.4 2.73-2.28 28.63-1.87 28.63-1.87Zm-10.93 25.5Z" fill="#000" fill-opacity=".1"/><path d="M111.71 8.49c4.67.16 8 .88 10.55 4.52 3.01.15 6.25.37 8.98 1.63 3.39 1.56 3.9 5.1-.36 5.59-1.86.2-3.72-.12-5.55-.45l-.19-.03-.33-.06c1.1 9.46-6.21 20.87-14.23 24.35C99.6 48.8 87.34 43.53 81.53 34c-2.62-4.3-4.14-10.51-4.46-15.86-.42-.2-.83-.44-1.23-.67-.38-.22-.76-.44-1.12-.61-2-.98-5.34-1.1-7.5 0-.35.17-.7.37-1.05.58-.42.25-.86.5-1.3.72C64.53 23.5 63.01 29.7 60.4 34c-5.8 9.52-18.07 14.79-29.05 10.03-8.02-3.48-15.33-14.89-14.23-24.35l-.33.06-.2.03c-1.83.33-3.7.66-5.55.45-4.27-.5-3.74-4.03-.36-5.6 2.72-1.25 5.96-1.47 8.97-1.62 2.55-3.63 5.88-4.36 10.55-4.52l23.29-.46c5.19-.14 9.72 0 11.03 4.6a18.7 18.7 0 0 1 6.35-1.25c1.86 0 4.35.45 6.5 1.28 1.3-4.64 5.83-4.77 11.03-4.63l23.3.46Zm-24.03 6.78c-2.37.03-3.5.42-3.9 2.9-.4 2.5 0 5.31.46 7.78.73 3.77 1.92 7.46 4.71 10.22a16.24 16.24 0 0 0 8.32 4.34c.11.03.54.1.96.16.63.1 1.23.18.71.13l-.1-.01h-.06a47.08 47.08 0 0 1 .16 0c3.73.4 7.72.32 10.82-2.04 3.53-2.7 5.95-6.95 7.01-11.2.63-2.48 1.93-8.42-.46-10.4-2.73-2.28-28.63-1.88-28.63-1.88Zm-33.43 0c2.37.03 3.5.42 3.9 2.9.4 2.5 0 5.32-.46 7.78-.73 3.77-1.92 7.46-4.71 10.22a16.23 16.23 0 0 1-8.32 4.35l-.96.15c-.64.1-1.26.19-.68.13-3.73.4-7.74.32-10.85-2.05-3.53-2.69-5.95-6.95-7.01-11.2-.63-2.48-1.93-8.42.46-10.4 2.73-2.28 28.63-1.87 28.63-1.87Zm-10.93 25.5Z" fill="${colors.accessories.value}"/></g>`,
  prescription02: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) =>
    `<g fill-rule="evenodd" clip-rule="evenodd"><path d="M38.5 9C17.2 9 9.65 14.1 8.95 14.77A2.92 2.92 0 0 0 6 17.66v2.88c0 1.6 1.32 2.89 2.95 2.89 0 0 5.91 0 5.91 2.88 0 .44.07.65.19.68-.04.83-.05 1.67-.05 2.51C15 42.34 23.31 50 37.24 50H40c14.72 0 25-8.43 25-20.5 0-1.5-.04-3-.17-4.46l1.58-.77c.58-.29 1.21-.5 1.9-.64 1.85-.38 3.95-.22 5.99.28.73.18 1.26.35 1.5.45l1.38.55c-.14 1.5-.18 3.04-.18 4.59C77 42.34 85.31 50 99.24 50H102c14.72 0 25-8.43 25-20.5 0-1.54-.04-3.07-.18-4.56 1.74-1.51 6.22-1.51 6.22-1.51a2.92 2.92 0 0 0 2.96-2.89v-2.88c0-1.6-1.32-2.89-2.96-2.89C132.35 14.1 124.8 9 103.5 9H100.53c-1.8 0-3.44.07-4.97.2-9.54.54-14.68 2.15-19.92 4.7a17 17 0 0 1-4.56.87 17.01 17.01 0 0 1-4.81-.91l-.42-.2v-.01c-4.94-2.42-8.43-4.13-20.78-4.55-1.13-.07-2.33-.1-3.6-.1H38.5ZM19 30.5C19 21.84 19 15 38.39 15h3.22C61 15 61 21.84 61 30.5 61 39.63 52.36 46 40 46h-3.03C22.12 46 19 37.57 19 30.5Zm62 0c0-8.66 0-15.5 19.39-15.5h3.22C123 15 123 21.84 123 30.5c0 9.13-8.64 15.5-21 15.5h-3.03C84.12 46 81 37.57 81 30.5Z" fill="#000" fill-opacity=".1"/><path d="M38.5 7C17.2 7 9.65 12.1 8.95 12.77A2.92 2.92 0 0 0 6 15.66v2.88c0 1.6 1.32 2.89 2.95 2.89 0 0 5.91 0 5.91 2.88 0 .44.07.65.19.68-.04.83-.05 1.67-.05 2.51C15 40.34 23.31 48 37.24 48H40c14.72 0 25-8.43 25-20.5 0-1.5-.04-3-.17-4.46l1.58-.77c.58-.29 1.21-.5 1.9-.64 1.85-.38 3.95-.22 5.99.28.73.18 1.26.35 1.5.45l1.38.55c-.14 1.5-.18 3.04-.18 4.59C77 40.34 85.31 48 99.24 48H102c14.72 0 25-8.43 25-20.5 0-1.54-.04-3.07-.18-4.56 1.74-1.51 6.22-1.51 6.22-1.51a2.92 2.92 0 0 0 2.96-2.89v-2.88c0-1.6-1.32-2.89-2.96-2.89C132.35 12.1 124.8 7 103.5 7H100.53c-1.8 0-3.44.07-4.97.2-9.54.54-14.68 2.15-19.92 4.7a17 17 0 0 1-4.56.87 17.01 17.01 0 0 1-4.81-.91l-.42-.2v-.01C60.9 9.23 57.41 7.52 45.06 7.1c-1.13-.07-2.33-.1-3.6-.1H38.5ZM19 28.5C19 19.84 19 13 38.39 13h3.22C61 13 61 19.84 61 28.5 61 37.63 52.36 44 40 44h-3.03C22.12 44 19 35.57 19 28.5Zm62 0c0-8.66 0-15.5 19.39-15.5h3.22C123 13 123 19.84 123 28.5c0 9.13-8.64 15.5-21 15.5h-3.03C84.12 44 81 35.57 81 28.5Z" fill="${colors.accessories.value}"/></g>`,
  round: (components: ComponentPickCollection, colors: ColorPickCollection) =>
    `<g fill-rule="evenodd" clip-rule="evenodd"><path d="M40 53a24 24 0 0 1-22.96-31H10.5a2.5 2.5 0 0 1 0-5h8c.23 0 .45.03.66.09a24 24 0 0 1 42.26 1.06A11.36 11.36 0 0 1 70.86 13c4.01 0 7.55 2.14 9.6 5.4a24 24 0 0 1 42.38-1.31c.2-.06.43-.09.66-.09h8a2.5 2.5 0 1 1 0 5h-6.54a24 24 0 1 1-46.6 2.83c-.08-4.37-3.45-7.83-7.5-7.83-3.73 0-6.89 2.94-7.42 6.83A24 24 0 0 1 40 53Zm0-4a20 20 0 1 0 0-40 20 20 0 0 0 0 40Zm82-20a20 20 0 1 1-40 0 20 20 0 0 1 40 0Z" fill="#000" fill-opacity=".1"/><path d="M40 51a24 24 0 0 1-22.96-31H10.5a2.5 2.5 0 0 1 0-5h8c.23 0 .45.03.66.09a24 24 0 0 1 42.26 1.06A11.36 11.36 0 0 1 70.86 11c4.01 0 7.55 2.14 9.6 5.4a24 24 0 0 1 42.38-1.31c.2-.06.43-.09.66-.09h8a2.5 2.5 0 1 1 0 5h-6.54a24 24 0 1 1-46.6 2.83c-.08-4.37-3.45-7.83-7.5-7.83-3.73 0-6.89 2.94-7.42 6.83A24 24 0 0 1 40 51Zm0-4a20 20 0 1 0 0-40 20 20 0 0 0 0 40Zm82-20a20 20 0 1 1-40 0 20 20 0 0 1 40 0Z" fill="${colors.accessories.value}"/></g>`,
  sunglasses: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) =>
    `<g fill-rule="evenodd" clip-rule="evenodd"><path d="M111.71 10.49c4.67.16 8 .88 10.55 4.52 3.01.15 6.25.37 8.98 1.63 3.39 1.56 3.9 5.1-.36 5.59-1.86.2-3.72-.12-5.55-.45l-.19-.03-.33-.06c1.1 9.46-6.21 20.87-14.23 24.35C99.6 50.8 87.34 45.53 81.53 36c-2.62-4.3-4.14-10.51-4.46-15.86-.42-.2-.83-.44-1.23-.67-.38-.22-.76-.44-1.12-.61-2-.98-5.34-1.1-7.5 0-.35.17-.7.37-1.05.58-.42.25-.86.5-1.3.72C64.53 25.5 63.01 31.7 60.4 36c-5.8 9.52-18.07 14.79-29.05 10.03-8.02-3.48-15.33-14.89-14.23-24.35l-.33.06-.2.03c-1.83.33-3.7.66-5.55.45-4.27-.5-3.74-4.03-.36-5.6 2.72-1.25 5.96-1.47 8.97-1.62 2.55-3.62 5.88-4.35 10.55-4.5l23.29-.47c5.19-.14 9.72 0 11.03 4.6a18.7 18.7 0 0 1 6.35-1.25c1.86 0 4.35.45 6.5 1.28 1.3-4.64 5.83-4.77 11.03-4.63l23.3.46Zm-24.03 6.78c-2.37.03-3.5.42-3.9 2.9-.4 2.5 0 5.31.46 7.78.73 3.77 1.92 7.46 4.71 10.22a16.24 16.24 0 0 0 8.32 4.34c.11.03.54.1.96.16.63.1 1.23.18.71.13 3.73.4 7.72.3 10.82-2.05 3.53-2.7 5.95-6.95 7.01-11.2.63-2.48 1.93-8.42-.46-10.4-2.73-2.28-28.63-1.88-28.63-1.88Zm-33.43 0c2.37.03 3.5.42 3.9 2.9.4 2.5 0 5.32-.46 7.78-.73 3.77-1.92 7.46-4.71 10.22a16.23 16.23 0 0 1-9.28 4.5c-.64.1-1.26.19-.68.13-3.73.4-7.74.32-10.85-2.05-3.53-2.69-5.95-6.95-7.01-11.2-.63-2.48-1.93-8.42.46-10.4 2.73-2.28 28.63-1.87 28.63-1.87Zm-10.93 25.5Z" fill="#000" fill-opacity=".1"/><path d="M55.01 14.28c2.51.02 3.7.45 4.13 3.11.43 2.7 0 5.74-.5 8.4-.75 4.06-2.02 8.04-4.98 11a17.16 17.16 0 0 1-8.8 4.69c-.33.07-3.15.47-1.42.27-4.04.47-8.43.45-11.8-2.17-3.74-2.9-6.3-7.5-7.43-12.07-.66-2.66-2.04-9.06.49-11.2C27.6 13.85 55 14.28 55 14.28Z" fill="#000" fill-opacity=".7"/><path d="M55.01 14.28c2.51.02 3.7.45 4.13 3.11.43 2.7 0 5.74-.5 8.4-.75 4.06-2.02 8.04-4.98 11a17.16 17.16 0 0 1-8.8 4.69c-.33.07-3.15.47-1.42.27-4.04.47-8.43.45-11.8-2.17-3.74-2.9-6.3-7.5-7.43-12.07-.66-2.66-2.04-9.06.49-11.2C27.6 13.85 55 14.28 55 14.28Z" fill="url(#accessoriesSunglasses-a)" style="mix-blend-mode:screen"/><path d="M86.92 14.27c-2.51.03-3.7.45-4.13 3.12-.43 2.7 0 5.73.5 8.4.75 4.06 2.02 8.03 4.98 11a17.17 17.17 0 0 0 8.8 4.69c.33.07 3.15.47 1.42.26 4.04.47 8.43.45 11.8-2.16 3.74-2.9 6.3-7.5 7.43-12.07.66-2.67 2.04-9.07-.49-11.2-2.9-2.46-30.31-2.03-30.31-2.03Z" fill="#000" fill-opacity=".7"/><path d="M86.92 14.27c-2.51.03-3.7.45-4.13 3.12-.43 2.7 0 5.73.5 8.4.75 4.06 2.02 8.03 4.98 11a17.17 17.17 0 0 0 8.8 4.69c.33.07 3.15.47 1.42.26 4.04.47 8.43.45 11.8-2.16 3.74-2.9 6.3-7.5 7.43-12.07.66-2.67 2.04-9.07-.49-11.2-2.9-2.46-30.31-2.03-30.31-2.03Z" fill="url(#accessoriesSunglasses-b)" style="mix-blend-mode:screen"/><path d="M111.71 8.49c4.67.16 8 .88 10.55 4.52 3.01.15 6.25.37 8.98 1.63 3.39 1.56 3.9 5.1-.36 5.59-1.86.2-3.72-.12-5.55-.45l-.19-.03-.33-.06c1.1 9.46-6.21 20.87-14.23 24.35C99.6 48.8 87.34 43.53 81.53 34c-2.62-4.3-4.14-10.51-4.46-15.86-.42-.2-.83-.44-1.23-.67-.38-.22-.76-.44-1.12-.61-2-.98-5.34-1.1-7.5 0-.35.17-.7.37-1.05.58-.42.25-.86.5-1.3.72C64.53 23.5 63.01 29.7 60.4 34c-5.8 9.52-18.07 14.79-29.05 10.03-8.02-3.48-15.33-14.89-14.23-24.35l-.33.06-.2.03c-1.83.33-3.7.66-5.55.45-4.27-.5-3.74-4.03-.36-5.6 2.72-1.25 5.96-1.47 8.97-1.62 2.55-3.63 5.88-4.36 10.55-4.52l23.29-.46c5.19-.14 9.72 0 11.03 4.6a18.7 18.7 0 0 1 6.35-1.25c1.86 0 4.35.45 6.5 1.28 1.3-4.64 5.83-4.77 11.03-4.63l23.3.46Zm-24.03 6.78c-2.37.03-3.5.42-3.9 2.9-.4 2.5 0 5.31.46 7.78.73 3.77 1.92 7.46 4.71 10.22a16.24 16.24 0 0 0 8.32 4.34c.11.03.54.1.96.16.63.1 1.23.18.71.13 3.73.4 7.72.3 10.82-2.05 3.53-2.7 5.95-6.95 7.01-11.2.63-2.48 1.93-8.42-.46-10.4-2.73-2.28-28.63-1.88-28.63-1.88Zm-33.43 0c2.37.03 3.5.42 3.9 2.9.4 2.5 0 5.32-.46 7.78-.73 3.77-1.92 7.46-4.71 10.22a16.23 16.23 0 0 1-9.28 4.5c-.64.1-1.26.19-.68.13-3.73.4-7.74.32-10.85-2.05-3.53-2.69-5.95-6.95-7.01-11.2-.63-2.48-1.93-8.42.46-10.4 2.73-2.28 28.63-1.87 28.63-1.87Zm-10.93 25.5Z" fill="${colors.accessories.value}"/></g><defs><linearGradient id="accessoriesSunglasses-a" x1="28.56" y1="14.25" x2="28.56" y2="33.8" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".5"/><stop offset="1" stop-opacity=".5"/></linearGradient><linearGradient id="accessoriesSunglasses-b" x1="82.61" y1="14.25" x2="82.61" y2="41.98" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".5"/><stop offset=".71" stop-opacity=".5"/></linearGradient></defs>`,
  wayfarers: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) =>
    `<path fill-rule="evenodd" clip-rule="evenodd" d="M39.25 9c-21.13 0-28.63 5.17-29.32 5.86A2.93 2.93 0 0 0 7 17.79v2.92a2.93 2.93 0 0 0 2.93 2.93s5.87 0 5.87 2.93c0 .2 0 .34.03.45-.03.82-.04 1.65-.04 2.48C15.78 42.34 24.07 50 37.96 50h2.75c14.68 0 24.93-8.43 24.93-20.5 0-1.44-.04-2.88-.16-4.28l1.45-.73c.57-.28 1.2-.5 1.87-.64 1.85-.39 3.93-.23 5.95.28.73.18 1.25.36 1.5.46l1.25.5a50.58 50.58 0 0 0-.16 4.41c0 12.84 8.29 20.5 22.17 20.5h2.75c14.68 0 24.93-8.43 24.93-20.5 0-.83 0-1.66-.04-2.48.02-.11.03-.26.03-.45 0-2.93 5.87-2.93 5.87-2.93 1.62 0 2.93-1.3 2.93-2.93V17.8a2.93 2.93 0 0 0-2.93-2.93c-.69-.69-8.2-5.86-29.32-5.86h-2.93c-1.83 0-3.52.07-5.08.21-9.38.56-14.46 2.19-19.63 4.76-.54.2-2.38.79-4.53.88a16.56 16.56 0 0 1-4.77-.92l-.42-.2v-.01c-4.9-2.45-8.36-4.18-20.55-4.61-1.15-.07-2.37-.1-3.66-.1h-2.93Zm-1.12 5.86h1.12c2.44 0 4.59.03 6.48.1 14.05.84 14.05 6.95 14.05 14.54 0 8.62-7.84 14.64-19.06 14.64h-2.75c-13.5 0-16.32-7.96-16.32-14.64 0-8 0-14.37 16.48-14.64Zm26.11 4.36.1.03-.07.03-.03-.06Zm14.52 0-.07.03.04.02c0-.02 0-.03.02-.05Zm16.7-4.12a125.22 125.22 0 0 1 9.4-.24c16.49.27 16.49 6.63 16.49 14.64 0 8.62-7.84 14.64-19.07 14.64h-2.75c-13.48 0-16.31-7.96-16.31-14.64 0-7.25 0-13.15 12.24-14.4Z" fill="#000" fill-opacity=".1"/><path d="M40.72 45.07c13.74 0 22-7.87 22-17.57S61.41 9.93 42.17 9.93h-2.93C20 9.93 18.72 17.79 18.72 27.5c0 9.7 5.5 17.57 19.25 17.57h2.75Z" fill="#000" fill-opacity=".7"/><path d="M40.72 45.07c13.74 0 22-7.87 22-17.57S61.41 9.93 42.17 9.93h-2.93C20 9.93 18.72 17.79 18.72 27.5c0 9.7 5.5 17.57 19.25 17.57h2.75Z" fill="url(#accessoriesWayfarers-a)" style="mix-blend-mode:screen"/><path d="M102.28 45.07c13.75 0 22-7.87 22-17.57S123 9.93 103.75 9.93h-2.93c-19.25 0-20.53 7.86-20.53 17.57 0 9.7 5.5 17.57 19.24 17.57h2.75Z" fill="#000" fill-opacity=".7"/><path d="M102.28 45.07c13.75 0 22-7.87 22-17.57S123 9.93 103.75 9.93h-2.93c-19.25 0-20.53 7.86-20.53 17.57 0 9.7 5.5 17.57 19.24 17.57h2.75Z" fill="url(#accessoriesWayfarers-b)" style="mix-blend-mode:screen"/><path fill-rule="evenodd" clip-rule="evenodd" d="M39.25 7c-21.13 0-28.63 5.17-29.32 5.86A2.93 2.93 0 0 0 7 15.79v2.92a2.93 2.93 0 0 0 2.93 2.93s5.87 0 5.87 2.93c0 .2 0 .34.03.45-.03.82-.04 1.65-.04 2.48C15.78 40.34 24.07 48 37.96 48h2.75c14.68 0 24.93-8.43 24.93-20.5 0-1.44-.04-2.88-.16-4.28l1.45-.73c.57-.28 1.2-.5 1.87-.64 1.85-.39 3.93-.23 5.95.28.73.18 1.25.36 1.5.46l1.25.5a50.58 50.58 0 0 0-.16 4.41c0 12.84 8.29 20.5 22.17 20.5h2.75c14.68 0 24.93-8.43 24.93-20.5 0-.83 0-1.66-.04-2.48.02-.11.03-.26.03-.45 0-2.93 5.87-2.93 5.87-2.93 1.62 0 2.93-1.3 2.93-2.93V15.8a2.93 2.93 0 0 0-2.93-2.94c-.69-.69-8.2-5.86-29.32-5.86h-2.93c-1.83 0-3.52.07-5.08.21-9.38.56-14.46 2.19-19.63 4.76-.54.2-2.38.79-4.53.88a16.56 16.56 0 0 1-4.77-.92l-.42-.2v-.01c-4.9-2.45-8.36-4.18-20.55-4.61-1.15-.07-2.37-.11-3.66-.11h-2.93Zm-1.12 5.86h1.12c2.44 0 4.59.03 6.48.1 14.05.84 14.05 6.95 14.05 14.54 0 8.62-7.84 14.64-19.06 14.64h-2.75c-13.5 0-16.32-7.96-16.32-14.64 0-8 0-14.37 16.48-14.64Zm26.11 4.36.1.03-.07.03-.03-.06Zm14.52 0-.07.03.04.02c0-.02 0-.03.02-.05Zm16.7-4.12a125.22 125.22 0 0 1 9.4-.24c16.49.27 16.49 6.63 16.49 14.64 0 8.62-7.84 14.64-19.07 14.64h-2.75c-13.48 0-16.31-7.96-16.31-14.64 0-7.25 0-13.15 12.24-14.4Z" fill="${colors.accessories.value}"/><defs><linearGradient id="accessoriesWayfarers-a" x1="80.29" y1="9.93" x2="80.29" y2="45.07" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".5"/><stop offset=".71" stop-opacity=".5"/></linearGradient><linearGradient id="accessoriesWayfarers-b" x1="80.29" y1="9.93" x2="80.29" y2="45.07" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".5"/><stop offset=".71" stop-opacity=".5"/></linearGradient></defs>`,
};
