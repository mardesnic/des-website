export const COLOR = {
    lightest: '#ffffff',
    lighter: '#ededed',
    light: '#dcdcdc',
    dark: '#202020',
    darker: '#181818',
    darkest: '#121212',
    gray: '#999',
    black:'#000',
    white:'#fff',
}

export const themeDark = {
    name:'themeDark',
    secondary: COLOR.lightest,
    secondary1: COLOR.lighter,
    secondary2: COLOR.light,
    primary: COLOR.dark,
    primary1: COLOR.darker,
    primary2: COLOR.darkest,
    gray: COLOR.gray,
    black: COLOR.black,
    white: COLOR.white,
}

export const themeLight = {
    name:'themeLight',
    secondary: COLOR.dark,
    secondary1: COLOR.darker,
    secondary2: COLOR.darkest,
    primary: COLOR.lightest,
    primary1: COLOR.lighter,
    primary2: COLOR.light,
    gray: COLOR.gray,
    black: COLOR.black,
    white: COLOR.white,
}

export const themes = [themeDark, themeLight]