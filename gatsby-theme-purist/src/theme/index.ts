export default {
  fonts: {
    sans:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    monospace:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  modes: {
    light: {
      colors: {
        background: 'hsl(0deg, 0%, 100%)',
        blurredBackground: 'hsla(0deg, 0%, 100%, 0.85)',
        text: 'hsl(222deg, 22%, 5%)',
        textHeader: 'hsl(255deg, 85%, 30%)',
        info: 'hsl(245deg, 100%, 60%)',
        infoBackground: 'hsl(210deg, 55%, 92%)',
        accent: 'hsl(245deg, 100%, 60%)',
        muted: '#73737d',
        hover: '#dbdbdb',
      },
      prism: {
        inlineCode: 'hsl(225deg, 12%, 40%)',
        background: 'hsl(225deg, 25%, 97%)',
        text: '#2a2a2a',
        highlight: 'hsl(225deg, 25%, 93%)',
        border: '#bf00b8',
        comment: '#467790',
        number: '#bf00b8',
        boolean: '#bf00b8',
        string: '#651fff',
        keyword: '#651fff',
        operator: '#651fff',
        property: '#da0079',
        tag: '#da0079',
        function: '#3d5afe',
        builtin: '#3d5afe',
        regex: '#3600d6',
        deleted: 'rgb(255, 85, 85)',
        attrName: '#aa00ff',
      },
    },
    dark: {
      colors: {
        background: 'hsl(210deg, 30%, 8%)',
        blurredBackground: 'hsla(210deg, 30%, 8%, 0.85)',
        text: 'hsl(0deg, 0%, 100%)',
        textHeader: 'hsl(53deg, 100%, 50%)',
        info: 'hsl(230deg, 100%, 67%)',
        infoBackground: 'hsl(210deg, 38%, 15%)',
        accent: 'hsl(333deg, 100%, 52%)',
        muted: '#73737d',
        hover: '#1a1a1a',
      },
      prism: {
        inlineCode: 'hsl(210deg, 14%, 66%)',
        background: 'hsl(210deg, 30%, 12%)',
        text: '#fff',
        highlight: 'hsl(210deg, 30%, 18%)',
        border: '#ffd600',
        comment: '#6c8998',
        number: '#ffd600',
        boolean: '#ffd600',
        string: 'rgb(155, 109, 255)',
        keyword: 'rgb(155, 109, 255)',
        operator: 'rgb(155, 109, 255)',
        property: '#ff39a8',
        tag: '#ff39a8',
        function: 'rgb(0, 190, 255)',
        builtin: 'rgb(0, 190, 255)',
        regex: '#ffd700',
        deleted: '#ff5555',
        attrName: '#c653ff',
      },
    },
  },
};
