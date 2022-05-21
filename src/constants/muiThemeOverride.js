import {createTheme} from '@mui/material/styles';
import {responsiveFontSizes} from '@mui/material/styles';

import {bordergrey} from './colors';
import {browngrey} from './colors';
import {pimgdark} from './colors';
import {pimglight} from './colors';
import {pimgmediumgreen} from './colors';
import {darksalmon} from './colors';
import {disableddark} from './colors';
import {disabledlight} from './colors';
import {error} from './colors';
import {errordark} from './colors';
import {errorlight} from './colors';
import {info} from './colors';
import {infodark} from './colors';
import {infolight} from './colors';
import {lightbrown} from './colors';
import {lowcontrastdark} from './colors';
import {lowcontrastlight} from './colors';
import {lowopacitybrown} from './colors';
import {paleolive} from './colors';
import {rouge} from './colors';
import {slategreen} from './colors';
import {success} from './colors';
import {successdark} from './colors';
import {successlight} from './colors';
import {warning} from './colors';
import {warningdark} from './colors';
import {warninglight} from './colors';
import {white} from './colors';

import {spacingl} from './spacing';
import {spacingm} from './spacing';
import {spacings} from './spacing';
import {spacingxl} from './spacing';
import {spacingxs} from './spacing';
import {spacingxxl} from './spacing';
import {spacingxxl2} from './spacing';
import {spacingxxl3} from './spacing';
import {spacingxxl4} from './spacing';
import {spacingxxl5} from './spacing';
import {spacingxxs} from './spacing';

// import {shadow1} from './shadows';
// import {shadow2} from './shadows';

import {typography} from './typography';


export const theme = responsiveFontSizes(createTheme({
  'typography': typography,
  'components': {
    'MuiCssBaseline': {
      'styleOverrides': {
        '@fontFace': 'Montserrat, Fira Sans',
        'html': {
          'fontSize': '62.5%',
        },
        'body': {
          'backgroundColor': white,
          'fontSize': '0 !important',
        },
        '::-webkit-scrollbar': {
          'width': '13px',
        },
        '::-webkit-scrollbar-track': {
          'boxShadow': 'inset 0 0 14px 14px transparent',
          'border': 'solid 4px transparent',
        },
        '::-webkit-scrollbar-thumb': {
          'boxShadow': 'inset 0 0 14px 14px #bbbbbe',
          'border': 'solid 4px transparent',
          'borderRadius': '14px',
        },
        '::-webkit-scrollbar-button': {
          'display': 'none',
        },
      },
    },
    'MuiAlert': {
      'styleOverrides': {
      'filledError': {
        'backgroundColor': error,
      },
      'filledInfo': {
        'backgroundColor': info,
      },
      'filledSuccess': {
        'backgroundColor': success,
      },
      'filledWarning': {
        'backgroundColor': warningdark,
      },
      'root': {
        'paddingLeft': spacingl,
        'paddingRight': spacingl,
      },
     },
    },
    'MuiAvatar': {
      'styleOverrides': {
      'root': {
        'border': 'none !important',
        'boxSizing': 'inherit !important',
      },
      'circular': {
        'height': spacingxl,
        'width': spacingxl,
      },
      'square': {
        'padding': '10.3px 10px 10.7px',
        'borderRadius': '4px',
      },
      'colorDefault': {
        'backgroundColor': pimgdark,
        ...typography.body2,
    }
  }},
    'MuiAvatarGroup': {
      'styleOverrides': {
      'root': {
        'display': 'flex',
      },
      'avatar': {
        'border': '0px solid',
        'borderColor': white,
      },
    }
  },
    'MuiButton': {
      'styleOverrides': {
      'root': {
        'height': '4.0rem',
        'padding': '0px 24px',
      },
      'contained': {
        // 'boxShadow': shadow1,
        '&:hover': {
          // 'boxShadow': shadow2,
        },
      },
      'startIcon': {
        'marginRight': spacingxs,
        'marginLeft': '0rem',
      },
      'iconSizeSmall': {
        marginRight: spacingxxs,
        marginLeft: '0px',
      },
      'outlined': {
        'padding': '0px 24px',
        '&.Mui-disabled': {
          color: disabledlight,
        },
      },
      'outlinedSecondary': {
        'border': 'solid 1px',
        'borderRadius': '4px',
        'borderColor': bordergrey,
      },
      'text': {
        'padding': '0px 24px',
      },
      /* Styles applied to the root element if `size="small"`  */
      'sizeSmall': {
        'height': '24px',
        'padding': '0px 12px',
        ...typography.subtitle1,
      },
      /* Styles applied to the root element if `size="small"` and `variant="text"`. */
      'textSizeSmall': {
        'color': pimgmediumgreen
      },
      /* Styles applied to the root element if `size="small"` and `variant="outlined"`. */
      'outlinedSizeSmall': {
        'border': 'solid 1px',
        'borderRadius': '4px',
        'borderColor': bordergrey,
        'color': pimgdark,
      },
      /* Styles applied to the root element if `size="small"` and `variant="contained"`. */
      'containedSizeSmall': {
        // 'boxShadow': shadow1,
        '&:hover': {
          // 'boxShadow': shadow2,
        },
        'backgroundColor': pimgmediumgreen,
        'color': white,
        'borderRadius': '4px',
      },
    }},
    'MuiIconButton': {
      'styleOverrides': {
        'root': {
          'padding': '12px',
        },
      },
    },
    'MuiAutocomplete': {
      'styleOverrides': {
        'root': {
          '& .MuiOutlinedInput-root.MuiInputBase-sizeSmall': {
            'padding': `0 ${spacingxxs}` 
          }
        },
        'endAdornment': {
          'top': 'auto'
        }
      }
    },
    'MuiContainer': {
      'styleOverrides': {
      'root': {
        '@media (minWidth: 600px)': {
          paddingRight: '0px !important'
        },
      },
    },
    },
    'MuiToggleButton': {
      'styleOverrides': {
        'root': {
          '&.Mui-selected': {
            'color': white,
            'backgroundColor': pimgmediumgreen,
            '&:hover': {
              'color': white,
              'backgroundColor': pimgmediumgreen,
            },
            '&.Mui-disabled': {
              border: 0,
              backgroundColor: disabledlight,
              color: white
            }
          },
          'fontSize': '1.4rem !important',
          '&.Mui-disabled': {
            border: 0,
            color: disabledlight
          }
        },
      },
    },
    'MuiInputBase': {
      'styleOverrides': {
      'root': {
        'height': '4.0rem',
        'color': pimgdark,
        ...typography.body1,
        '&.Mui-disabled': {
          '& fieldset.MuiOutlinedInput-notchedOutline': {
            'borderColor': disabledlight,
            'color': disabledlight,
          },
        },
      },
      'sizeSmall': {
        'height': '24px',
        'paddingRight': '12px !important',
      },
      'inputSizeSmall': {
        ...typography.caption,
        'marginLeft': '4px',
      }
    },
    },
    'MuiFormHelperText': {
      'styleOverrides': {
      'root': {
        'color': pimgmediumgreen,
        ...typography.body2,
      },
      'sizeSmall': {
        'color': pimgmediumgreen,
        ...typography.caption,
      }
      },
    },
    'MuiOutlinedInput': {
      'styleOverrides': {
      'root': {
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          'borderColor': pimgmediumgreen,
        },
        '&.Mui-error .MuiOutlinedInput-notchedOutline': {
          'borderColor': error,
        },
        '&.MuiOutlinedInput-notchedOutline': {
          'borderColor': bordergrey,
        },
        '&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
          'borderColor': pimgmediumgreen,
        },
      },
      'sizeSmall': {
        'height': '24px',
      },
      'inputSizeSmall': {
        'paddingLeft': '8px',
      },
      'input': {
        '&:-webkit-autofill': {
          'height': '0px',
        },
      },
  },
  },
    'MuiFormLabel': {
      'styleOverrides': {
      'root': {
        '&.Mui-disabled': {
          color: disabledlight + '!important',
        },
      },
    },
    },
  'MuiInputLabel': {
    'styleOverrides': {
      'root': {
        'color': pimgdark + ' !important',
        '&.Mui-error': {
          'color': error + ' !important',
        },
        '&.Mui-error:not(.Mui-focused)': {
          'color': pimgdark + ' !important',
        },
        '&.Mui-focused:not(.Mui-error)': {
          'color': pimgmediumgreen + ' !important',
        },
      },
      'shrink': {
        'transform': 'translate(15px, -7px) scale(1.09) !important', 
        'fontSize': '11px !important',
      },
      'outlined': {
        'transform': 'translate(1.4rem, 0.8rem) scale(1)',
      },
    },
  },
  'MuiSlider': {
    'styleOverrides': {
      'valueLabel': {
        'background': 'none',
      },
      'track': {
        'border': 'none',
      },
    }
  },
    'MuiSelect': {
      'styleOverrides': {
        'select': {
          'paddingTop': '5px',
          'paddingBottom': '1px',
        },
    },
    },
    'MuiTab': {
      'styleOverrides': {
        'root': {
          'minWidth': '0 !important',
          'padding': 0,
          'marginRight': spacings,
          'paddingBottom': spacingxxs,
          'flexDirection': 'row',
          'marginBottom': spacingxs,
          ...typography.subtitle1,
          '& > *:first-of-type': {
            'marginBottom': '0 !important',
            'marginRight': spacingxxs,
          }
        },
        'textColorPrimary': {
          'color': pimgdark,
        },
        'labelIcon': {
          'paddingTop': 0,
          'paddingBottom': 0,
          'minHeight': 0,
        },
      },
    },
    'MuiTabs': {
      'styleOverrides': {
      'root': {
        'minHeight': 0,
      },
      'indicator': {
        'display': 'flex',
        'justifyContent': 'center',
        'height': '4px',
        'borderRadius': '50px',
        'maxWidth': '120px',
        'width': '100%',
        'backgroundColor': pimgmediumgreen + '!important',
      },
    },
    },
    'MuiChip': {
      'label': {
        'lineHeight': 1.43,
        'letterSpacing': '0.01px',
        'paddingLeft': spacings,
        'paddingRight': spacings,
      },
     'labelSmall': {
        'fontSize': spacingxs,
        'lineHeight': 1.5,
        'letterSpacing': '0px',
        'padding': '0px 8px',
      },
      'sizeSmall': {
        'height': '18px',
      },
      'root': {
        'height': spacingl,
        'fontSize': '1.4rem',
        'fontFamily': 'Fira Sans',
        'fontWeight': 'normal',
        'fontStretch': 'normal',
        'fontStyle': 'normal',
        'backgroundColor': pimgdark,
        'color': white,
        'width': 'fit-content',
        'display': 'flex',
        'flexWrap': 'wrap',
      },
    },
    'MuiTooltip': {
      'styleOverrides': {
      'arrow': {
        'color': pimgdark,
      },
      'tooltip': {
        'backgroundColor': pimgdark,
        'color': white,
        ...typography.caption,
        'padding': '4px 8px',
      },
    },
  },
    'MuiSnackbar': {
      'styleOverrides': {
      'anchorOriginBottomRight': {
        'bottom': `${spacingxl} !important`, 
        'right': `${spacingxxl2} !important`,
        },
     },
    },
    'MuiCheckbox': {
      'styleOverrides': {
      'root': {
        'padding': spacingxs,
        },
      },
    },
  },
  '.MuiTableCell': {
    'root': {
      'borderRadius': '2px',
    },
    'stickyHeader': {
      'backgroundColor': white,
    },
  },
  'palette': {
    'primary': {
      'main': pimgdark,
      'contrastText': white,
    },
    'secondary': {
      'main': pimgmediumgreen,
      'contrastText': white,
    },
    'error': {
      'light': errorlight,
      'main': error,
      'dark': errordark,
    },
    'warning': {
      'light': warninglight,
      'main': warning,
      'dark': warningdark,
    },
    'info': {
      'light': infolight,
      'main': info,
      'dark': infodark,
    },
    'success': {
      'light': successlight,
      'main': success,
      'dark': successdark,
    },
    'action': {
      'disabledBackground': disabledlight,
      'disabledDark': disableddark,
      'disabled': white,
    },
    'layout': {
      'white': white,
      'pimglight': pimglight,
      'bordergrey': bordergrey,
      'browngrey': browngrey,
      'lowopacitybrown': lowopacitybrown,
      'lowcontrast': {
        'lowcontrastdark': lowcontrastdark,
        'lowcontrastlight': lowcontrastlight,
      },
    },
    'datavisualisation': {
      'slategreen': slategreen,
      'paleolive': paleolive,
      'lightbrown': lightbrown,
      'darksalmon': darksalmon,
      'rouge': rouge,
    },
  },
  'spacing': [spacingxxs, spacingxs, spacings, spacingm, spacingl,
    spacingxl, spacingxxl, spacingxxl2, spacingxxl3, spacingxxl4,
    spacingxxl5],
},));