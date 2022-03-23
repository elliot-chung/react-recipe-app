import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        border: 0;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 1.5;
        margin: 0;
        padding: 0;
        width: 100vw;
        overflow-x: hidden;
        background-color: ${({ theme }) => theme.colors.primaryBackground};
    }

    div,
    span,
    object,
    iframe,
    img,
    table,
    caption,
    thead,
    tbody,
    tfoot,
    tr,
    td,
    article,
    aside,
    canvas,
    details,
    figure,
    hgroup,
    menu,
    nav,
    footer,
    header,
    section,
    summary,
    mark,
    audio,
    video {
        border: 0;
        margin: 0;
        padding: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    address,
    code,
    del,
    dfn,
    em,
    ins,
    q,
    samp,
    small,
    strong,
    sub,
    sup,
    b,
    i,
    hr,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    legend,
    label {
        border: 0;
        color: ${({ theme }) => theme.colors.primaryInk};
        font-size: 100%;
        margin: 0;
        padding: 0;
        vertical-align: baseline;
    }

    article,
    aside,
    canvas,
    figure,
    figure img,
    figcaption,
    hgroup,
    footer,
    header,
    nav,
    section,
    audio,
    video {
        display: block;
    }

    table {
        border-collapse: separate;
        border-spacing: 0;
    }

    caption,
    th,
    td {
        text-align: left;
        vertical-align: middle;
    }

    a img {
        border: 0;
    }

    :focus {
        outline: 0;
    }

    a,
    a:link,
    a:visited,
    a:focus,
    a:hover,
    a:active {
        text-decoration: none;
    }

    button {
    cursor: pointer;
    }

    /* established typography */

    h1 {
        font-size: 36px;
        font-weight: 600;
    }

    h2 {
        font-size: 32px;
        font-weight: 600;
    }

    h3 {
        font-size: 28px;
        font-weight: 600;
    }

    h4 {
        font-size: 24px;
    }

    h5 {
        font-size: 20px;
    }

    p {
        font-size: 16px;
    }

    main {
        margin-top: ${({ theme }) => theme.componentSizes.navbarHeight};
    }

    /* main body padding */
    ${({ theme }) => theme.mediaQueries.mobile} {
        main {
            padding: 1rem;
        }
    }

    ${({ theme }) => theme.mediaQueries.tablet} {
        main {
            padding: 2rem;
        }
    }

    ${({ theme }) => theme.mediaQueries.desktop} {
        main {
            padding: 3rem;
        }
    }

    ${({ theme }) => theme.mediaQueries.desktopL} {
        main {
            padding: 4rem;
        }
    }

`;

export default GlobalStyle;
