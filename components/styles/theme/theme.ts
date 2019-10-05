import {createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#13A8FE',
        },
        secondary: {
            main: '#ffffff',
        },
        error: {
            main: '#CF0060',
        },
        background: {
            default: '#262B32',
        },
        text: {
            primary: '#fff',
            secondary: '#9B9B9B',
        },
    },
    typography: {
        fontFamily: [
            'Montserrat',
            'Roboto',
            'Helvetica Neue',
            'Arial',
            'sans-serif',
        ].join(','),
        fontWeightBold: 900,
        fontWeightMedium: 600,
        fontWeightRegular: 400,
        fontWeightLight: 200,
    },
    overrides: {
        MuiPaper: {
            root: {
                backgroundColor: '#38414d',
            },
        },
    },
});

export default theme;
