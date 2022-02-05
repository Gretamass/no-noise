import styled from 'styled-components';

export const lightTheme = styled.div `
    --text-on-white: var(--text-on-white-light);
    --background-white: var(--background-white-light);
    --text-on-black: var(--text-on-black-light);
    --background-black: var(--background-black-light);
    --button-bg:  var(--button-bg-light);
    --button-text: var(--button-text-light);
`

export const darkTheme = styled.div
    `
    --text-on-white: var(--text-on-white-dark);
    --background-white: var(--background-white-dark);
    --text-on-black: var(--text-on-white-dark);
    --background-black: var(--background-white-dark);
    --button-bg: var(--button-bg-dark);
    --button-text: var(--button-text-dark);
    `
