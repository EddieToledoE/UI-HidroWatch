const textLight = {
  primary: '#a032a8',
  secondary: 'rgba(255, 255, 255, 1)', // Aumenté la opacidad para hacerlo un poco más oscuro
  disabled: 'rgba(255, 255, 255, 1)', // Aumenté la opacidad para hacerlo un poco más oscuro
  hint: 'rgba(255, 255, 255, 0.7)', // Aumenté la opacidad para hacerlo un poco más oscuro
};


const textDark = {
  primary: 'rgba(52, 49, 76, 1)',
  secondary: 'rgba(52, 49, 76, 0.54)',
  disabled: 'rgba(52, 49, 76, 0.38)',
  hint: 'rgba(52, 49, 76, 0.38)',
};

const secondaryColor = {
  light: '#7467ef',
  main: '#6a75c9',
  dark: '#222A45',
  contrastText: textDark.primary,
};

const errorColor = {
  main: '#FF3D57',
};

export const themeColors = {
  whitePurple: {
    palette: {
      type: 'light',
      primary: {
        main: '#ffffff',
        contrastText: textDark.primary, // Cambiado a color de texto oscuro para contraste
      },
      secondary: {
        main: '#7467ef',
        contrastText: '#ffffff',
      },
      background: {
        paper: '#222A45', // Cambiado a color de fondo oscuro
        default: '#1a2038', // Cambiado a color de fondo oscuro
      },
      error: errorColor,
      text: textLight,
    },
  },
  whiteBlue: {
    palette: {
      type: 'light',
      primary: {
        main: '#ffffff',
        contrastText: textDark.primary, // Cambiado a color de texto oscuro para contraste
      },
      secondary: {
        main: '#1976d2',
        contrastText: '#ffffff',
      },
      background: {
        paper: '#222A45', // Cambiado a color de fondo oscuro
        default: '#1a2038', // Cambiado a color de fondo oscuro
      },
      text: textLight,
    },
  },
  slateDark1: {
    palette: {
      type: 'dark',
      primary: {
        main: '#222A45',
        contrastText: '#ffffff',
      },
      secondary: secondaryColor,
      error: errorColor,
      background: {
        paper: '#222A45',
        default: '#1a2038',
      },
      text: textDark,
    },
  },
  slateDark2: {
    palette: {
      type: 'dark',
      primary: {
        main: '#1a2038',
        contrastText: '#ffffff',
      },
      secondary: secondaryColor,
      error: errorColor,
      background: {
        paper: '#222A45',
        default: '#1a2038',
      },
      text: textDark,
    },
  },
  purple1: {
    palette: {
      type: 'light',
      primary: {
        main: '#7467ef',
        contrastText: '#ffffff',
      },
      secondary: secondaryColor,
      error: errorColor,
      background: {
        paper: '#222A45', // Cambiado a color de fondo oscuro
        default: '#1a2038', // Cambiado a color de fondo oscuro
      },
      text: textLight,
    },
  },
  purple2: {
    palette: {
      type: 'light',
      primary: {
        main: '#6a75c9',
        contrastText: '#ffffff',
      },
      secondary: secondaryColor,
      error: errorColor,
      background: {
        paper: '#222A45', // Cambiado a color de fondo oscuro
        default: '#1a2038', // Cambiado a color de fondo oscuro
      },
      text: textLight,
    },
  },
  purpleDark1: {
    palette: {
      type: 'dark',
      primary: {
        main: '#7467ef',
        contrastText: '#ffffff',
      },
      secondary: secondaryColor,
      error: errorColor,
      background: {
        paper: '#222A45',
        default: '#1a2038',
      },
      text: textDark,
    },
  },
  purpleDark2: {
    palette: {
      type: 'dark',
      primary: {
        main: '#6a75c9',
        contrastText: '#ffffff',
      },
      secondary: secondaryColor,
      error: errorColor,
      background: {
        paper: '#222A45',
        default: '#1a2038',
      },
      text: textDark,
    },
  },
  blue: {
    palette: {
      type: 'light',
      primary: {
        main: '#1976d2',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#FFAF38',
        contrastText: textLight.primary,
      },
      error: errorColor,
      background: {
        paper: '#222A45', // Cambiado a color de fondo oscuro
        default: '#1a2038', // Cambiado a color de fondo oscuro
      },
      text: textLight,
    },
  },
  blueDark: {
    palette: {
      type: 'dark',
      primary: {
        main: '#1976d2',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#FF4F30',
        contrastText: textLight.primary,
      },
      error: errorColor,
      background: {
        paper: '#222A45',
        default: '#1a2038',
      },
      text: textDark,
    },
  },
  red: {
    palette: {
      type: 'dark',
      primary: {
        main: '#e53935',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#FFAF38',
        contrastText: textLight.primary,
      },
      error: errorColor,
      text: textDark,
    },
  },
};


export const themeShadows = [
  'none',
  '0px 2px 1px -1px rgba(0, 0, 0, 0.06),0px 1px 1px 0px rgba(0, 0, 0, 0.042),0px 1px 3px 0px rgba(0, 0, 0, 0.036)',
  '0px 3px 1px -2px rgba(0, 0, 0, 0.06),0px 2px 2px 0px rgba(0, 0, 0, 0.042),0px 1px 5px 0px rgba(0, 0, 0, 0.036)',
  '0px 3px 3px -2px rgba(0, 0, 0, 0.06),0px 3px 4px 0px rgba(0, 0, 0, 0.042),0px 1px 8px 0px rgba(0, 0, 0, 0.036)',
  '0px 2px 4px -1px rgba(0, 0, 0, 0.06),0px 4px 5px 0px rgba(0, 0, 0, 0.042),0px 1px 10px 0px rgba(0, 0, 0, 0.036)',
  '0px 3px 5px -1px rgba(0, 0, 0, 0.06),0px 5px 8px 0px rgba(0, 0, 0, 0.042),0px 1px 14px 0px rgba(0, 0, 0, 0.036)',
  '0px 3px 5px -1px rgba(0, 0, 0, 0.06),0px 6px 10px 0px rgba(0, 0, 0, 0.042),0px 1px 18px 0px rgba(0, 0, 0, 0.036)',
  '0px 4px 5px -2px rgba(0, 0, 0, 0.06),0px 7px 10px 1px rgba(0, 0, 0, 0.042),0px 2px 16px 1px rgba(0, 0, 0, 0.036)',
  '0px 5px 5px -3px rgba(0, 0, 0, 0.06),0px 8px 10px 1px rgba(0, 0, 0, 0.042),0px 3px 14px 2px rgba(0, 0, 0, 0.036)',
  '0px 5px 6px -3px rgba(0, 0, 0, 0.06),0px 9px 12px 1px rgba(0, 0, 0, 0.042),0px 3px 16px 2px rgba(0, 0, 0, 0.036)',
  '0px 6px 6px -3px rgba(0, 0, 0, 0.06),0px 10px 14px 1px rgba(0, 0, 0, 0.042),0px 4px 18px 3px rgba(0, 0, 0, 0.036)',
  '0px 6px 7px -4px rgba(0, 0, 0, 0.06),0px 11px 15px 1px rgba(0, 0, 0, 0.042),0px 4px 20px 3px rgba(0, 0, 0, 0.036)',
  '0px 7px 8px -4px rgba(0, 0, 0, 0.06),0px 12px 17px 2px rgba(0, 0, 0, 0.042),0px 5px 22px 4px rgba(0, 0, 0, 0.036)',
  '0px 7px 8px -4px rgba(0, 0, 0, 0.06),0px 13px 19px 2px rgba(0, 0, 0, 0.042),0px 5px 24px 4px rgba(0, 0, 0, 0.036)',
  '0px 7px 9px -4px rgba(0, 0, 0, 0.06),0px 14px 21px 2px rgba(0, 0, 0, 0.042),0px 5px 26px 4px rgba(0, 0, 0, 0.036)',
  '0px 8px 9px -5px rgba(0, 0, 0, 0.06),0px 15px 22px 2px rgba(0, 0, 0, 0.042),0px 6px 28px 5px rgba(0, 0, 0, 0.036)',
  '0px 8px 10px -5px rgba(0, 0, 0, 0.06),0px 16px 24px 2px rgba(0, 0, 0, 0.042),0px 6px 30px 5px rgba(0, 0, 0, 0.036)',
  '0px 8px 11px -5px rgba(0, 0, 0, 0.06),0px 17px 26px 2px rgba(0, 0, 0, 0.042),0px 6px 32px 5px rgba(0, 0, 0, 0.036)',
  '0px 9px 11px -5px rgba(0, 0, 0, 0.06),0px 18px 28px 2px rgba(0, 0, 0, 0.042),0px 7px 34px 6px rgba(0, 0, 0, 0.036)',
  '0px 9px 12px -6px rgba(0, 0, 0, 0.06),0px 19px 29px 2px rgba(0, 0, 0, 0.042),0px 7px 36px 6px rgba(0, 0, 0, 0.036)',
  '0px 10px 13px -6px rgba(0, 0, 0, 0.06),0px 20px 31px 3px rgba(0, 0, 0, 0.042),0px 8px 38px 7px rgba(0, 0, 0, 0.036)',
  '0px 10px 13px -6px rgba(0, 0, 0, 0.06),0px 20px 31px 3px rgba(0, 0, 0, 0.042),0px 8px 38px 7px rgba(0, 0, 0, 0.036)',
  '0px 10px 13px -6px rgba(0, 0, 0, 0.06),0px 20px 31px 3px rgba(0, 0, 0, 0.042),0px 8px 38px 7px rgba(0, 0, 0, 0.036)',
  '0px 10px 13px -6px rgba(0, 0, 0, 0.06),0px 20px 31px 3px rgba(0, 0, 0, 0.042),0px 8px 38px 7px rgba(0, 0, 0, 0.036)',
  '0px 10px 13px -6px rgba(0, 0, 0, 0.06),0px 20px 31px 3px rgba(0, 0, 0, 0.042),0px 8px 38px 7px rgba(0, 0, 0, 0.036)',
];
