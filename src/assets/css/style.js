import { createGlobalStyle } from 'styled-components';
import { device } from '../../theme';

export const GlobalCSS = createGlobalStyle `
    /**
    * Reset Styels
    */

    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    ${'' /* body::-webkit-scrollbar {
        width: .8em;
    }    
    body::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }   
    body::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.primary};
        outline: 1px solid slategrey;
    } */}
    // Layouts
   
        $smlg-device: 'only screen and (max-width: 1199px)';
        
        $extra-device: 'only screen and (min-width: 1600px) and (max-width: 1919px)';
        
        $laptop-device: 'only screen and (min-width: 1200px) and (max-width: 1599px)';
        $lg-layout: 'only screen and (min-width: 992px) and (max-width: 1199px)';
        $md-layout:'only screen and (min-width: 768px) and (max-width: 991px)';
        $sm-layout:'only screen and (max-width: 767px)';
        $large-mobile: 'only screen and (max-width: 575px)';
        /* container 450px*/
        $small-mobile: 'only screen and (max-width: 479px)';
        /* container 300px*/
        
        @media #{$large-mobile} {
            .container {
                width: 450px;
            }
        }
        
        @media #{$small-mobile} {
            .container {
                width: 320px;
            }
        }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    nav,
    section,
    summary {
        display: block;
    }
    audio,
    canvas,
    video {
        display: inline-block;
    }
    audio:not([controls]) {
        display: none;
        height: 0;
    }
    [hidden] {
        display: none;
    }
    html,
    button,
    input,
    select,
    textarea {
        font-family: "Source Sans Pro", Helvetica, sans-serif;
    }
    a {
        color: #ca3c08;
        text-decoration: none;
    }
    a:visited {
        color: #ac0404;
    }
    a:focus {
        outline: thin dotted;
    }
    a:active,
    a:hover {
        color: #ea9629;
        outline: 0;
    }
    a:hover {
        text-decoration: underline;
    }
    address {
        font-style: italic;
        margin: 0 0 24px;
    }
    abbr[title] {
        border-bottom: 1px dotted;
    }
    b,
    strong {
        font-weight: bold;
    }
    dfn {
        font-style: italic;
    }
    mark {
        background: #ff0;
        color: #000;
    }
    p {
        margin: 0 0 24px;
    }
    code,
    kbd,
    pre,
    samp {
        font-family: monospace, serif;
        font-size: 14px;
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
    }
    pre {
        background: #f5f5f5;
        color: #666;
        font-family: monospace;
        font-size: 14px;
        margin: 20px 0;
        overflow: auto;
        padding: 20px;
        white-space: pre;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
    blockquote,
    q {
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
        quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: "";
        content: none;
    }
    blockquote {
        font-size: 18px;
        font-style: italic;
        font-weight: 300;
        margin: 24px 40px;
    }
    blockquote blockquote {
        margin-right: 0;
    }
    blockquote cite,
    blockquote small {
        font-size: 14px;
        font-weight: normal;
        text-transform: uppercase;
    }
    blockquote em,
    blockquote i {
        font-style: normal;
        font-weight: 300;
    }
    blockquote strong,
    blockquote b {
        font-weight: 400;
    }
    small {
        font-size: smaller;
    }
    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }
    sup {
        top: -0.5em;
    }
    sub {
        bottom: -0.25em;
    }
    dl {
        margin: 0 20px;
    }
    dt {
        font-weight: bold;
    }
    dd {
        margin: 0 0 20px;
    }
    menu,
    ol,
    ul {
        margin: 16px 0;
        padding: 0 0 0 40px;
    }
    ul {
        list-style-type: square;
    }
    nav ul,
    nav ol {
        list-style: none;
        list-style-image: none;
    }
    li>ul,
    li>ol {
        margin: 0;
    }
    img {
        -ms-interpolation-mode: bicubic;
        border: 0;
        vertical-align: middle;
    }
    svg:not(:root) {
        overflow: hidden;
    }
    figure {
        margin: 0;
    }
    form {
        margin: 0;
    }
    fieldset {
        border: 1px solid #c0c0c0;
        margin: 0 2px;
        min-width: inherit;
        padding: 0.35em 0.625em 0.75em;
    }
    legend {
        border: 0;
        padding: 0;
        white-space: normal;
    }
    button,
    input,
    select,
    textarea {
        font-size: 100%;
        margin: 0;
        max-width: 100%;
        vertical-align: baseline;
    }

    button,
    input {
        line-height: normal;
    }

    button,
    html input[type="button"],
    input[type="reset"],
    input[type="submit"] {
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;
        cursor: pointer;
    }

    button[disabled],
    input[disabled] {
        cursor: default;
    }

    input[type="checkbox"],
    input[type="radio"] {
        padding: 0;
    }

    input[type="search"] {
        -webkit-appearance: textfield;
        -moz-appearance: textfield;
        appearance: textfield;
        appearance: textfield;
        padding-right: 2px;
        /* Don't cut off the webkit search cancel button */
        width: 270px;
    }

    input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
        appearance: none;
    }

    button::-moz-focus-inner,
    input::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
    textarea {
        overflow: auto;
        vertical-align: top;
    }
    table {
        border-bottom: 1px solid #ededed;
        border-collapse: collapse;
        border-spacing: 0;
        font-size: 14px;
        line-height: 2;
        margin: 0 0 20px;
        width: 100%;
    }
    caption,
    th,
    td {
        font-weight: normal;
        text-align: left;
    }
    caption {
        font-size: 16px;
        margin: 20px 0;
    }
    th {
        font-weight: bold;
        text-transform: uppercase;
    }
    td {
        border-top: 1px solid #ededed;
        padding: 6px 10px 6px 0;
    }
    del {
        color: #333;
    }
    ins {
        background: #fff9c0;
        text-decoration: none;
    }
    hr {
        background-size: 4px 4px;
        border: 0;
        height: 1px;
        margin: 0 0 24px;
    }

    /**
    * Typography
    */

    * {
        box-sizing: border-box;
    }
    img {
        max-width: 100%;
    }
    html {
        overflow: hidden;
        overflow-y: auto;
    }
    body {
        overflow: hidden;
        font-size: ${props => props.theme.font.bodyFontSize};
        line-height: ${props => props.theme.lineHeights.text};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: ${props => props.theme.font.bodyFont};
        color: ${props => props.theme.colors.bodyColor};
        font-weight: 400;
        margin: 0;     
    }
    a {
        transition: ${props => props.theme.baseTransition};
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6,
    address,
    p,
    pre,
    blockquote,
    dl,
    dd,
    menu,
    ol,
    ul,
    table,
    caption,
    hr {
        margin: 0;
        margin-bottom: 15px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6 {
        font-family: ${props => props.theme.font.headingFont};
        line-height: ${props => props.theme.lineHeights.heading};
        color: ${props => props.theme.colors.headingCollor};
    }
    h1,
    .h1 {
        font-size: ${props => props.theme.font.headingFontSizes.h1};
        @media ${device.medium} { 
            font-size: calc(${props => props.theme.font.headingFontSizes.h1} - 4px);
        }
        @media ${device.small} { 
            font-size: calc(${props => props.theme.font.headingFontSizes.h1} - 6px);
        }
        @media ${device.xsmall} { 
            font-size: calc(${props => props.theme.font.headingFontSizes.h1} - 8px);
        }
    }
    h2,
    .h2 {
        font-size: ${props => props.theme.font.headingFontSizes.h2};
        @media ${device.medium} { 
            font-size: calc(${props => props.theme.font.headingFontSizes.h1} - 2px);
        }
        @media ${device.small} { 
            font-size: calc(${props => props.theme.font.headingFontSizes.h1} - 4px);
        }
    }
    h3,
    .h3 {
        font-size: ${props => props.theme.font.headingFontSizes.h3};
        @media ${device.medium} { 
            font-size: calc(${props => props.theme.font.headingFontSizes.h1} - 2px);
        }
        @media ${device.small} { 
            font-size: calc(${props => props.theme.font.headingFontSizes.h1} - 2px);
        }
    }
    h4,
    .h4 {
        font-size: ${props => props.theme.font.headingFontSizes.h4};
    }
    h5,
    .h5 {
        font-size: ${props => props.theme.font.headingFontSizes.h5};
    }
    h6,
    .h6 {
        font-size: ${props => props.theme.font.headingFontSizes.h6};
    }
    h1,
    .h1,
    h2,
    .h2,
    h3,
    .h3 {
        font-weight: 700;
    }
    h4,
    .h4,
    h5,
    .h5 {
        font-weight: 600;
    }
    h6,
    .h6 {
        font-weight: 500;
    }
    a:hover,
    a:focus,
    a:active {
        text-decoration: none;
        outline: none;
    }
    a:visited {
        color: inherit;
    }
    input,
    button,
    select,
    textarea {
        background: ${props => props.theme.colors.transparent};
        border: 1px solid ${props => props.theme.colors.borderColor};
        transition: all 0.4s ease-out 0s;
        color: ${props => props.theme.colors.bodyColor};
        &:focus,
        &:active {
            outline: none;
            border-color: ${props => props.theme.colors.primary};
        }
    }
    input,
    select,
    textarea {
        width: 100%;
        font-size: ${props => props.theme.font.bodyFontSize};
    }
    input,
    select {
        height: 40px;
        padding: 0 15px;
    }
    .wrapper{
        position: relative;
    }
    main.page-content div div, footer div {
        position: relative;
        z-index: 2;
    }

    .rn_surface {
        position: relative;
        overflow: hidden
    }

    .rn_surface::after,
    .rn_surface::before {
        content: '';
        height: 100%;
        position: absolute;
        top: 0;
        width: 100%
    }

    .rn_surface::after {
        background: #fff;
        z-index: 1
    }

    .touch .rn_surface::after,
    .touch .rn_surface::before {
        visibility: hidden
    }

    .rn_surface.animated::before {
        background: #ddd;
        animation: rn_surface 2s cubic-bezier(.80, 0, .180, 1) both;
        z-index: 3;
    }

    .rn_surface.animated::after {
        animation: rn_surfaceBack 2s cubic-bezier(.80, 0, .180, 1) both
    }
    .medium-zoom-image, .medium-zoom-overlay {
        z-index: 9999;
    }
    .overlay-wrapper-open {
        height: 100vh;
        overflow-y: hidden;
    }
    .cursor {
        position: fixed;
        width: 30px;
        height: 30px;
        margin-top: -14px;
        margin-left: -14px;
        border: 1.5px solid rgba(0, 28, 67, 0.5);
        border-radius: 50%;
        pointer-events: none;
        opacity: 1;
        box-sizing: border-box;
        transform: scale(1);
        transition: transform .35s ease-out;
        z-index: 999999999;
    }
    @media screen and (max-width: 1200px){
        .cursor{
            display: none
        }
    }
    .gatsby-image-wrapper{
        z-index: -1 !important;
    }
    
    /* Creative Agency Service  */
        .creative-service-wrapper {
            .row {
                &.creative-service {
                    a{
                        display: flex;
                        height: 100%;
                    }
                    .service {
        
                        &.service__style--2 {
                            margin-top: 30px;
                            background: #f6f6f6;
                        }
                    }
                }
            }
            
        }
        
        
        
        .service-one-wrapper{
            @media #{$md-layout} {
                margin: 0 -40px;
            }
        }
        
        .service{
    // Service Style One
    &.service__style--1 {
        padding: 40px 0;
        @extend %transition;
        @extend %posrelative;
        z-index: 2;
        @media #{$sm-layout} {
            padding: 15px 0;
        }
        @media #{$md-layout} {
            padding: 20px 0;
        }
        .icon {
            img {
                margin-bottom: 34px;
                @media #{$sm-layout} {
                    margin-bottom: 14px;
                    height: 53px;
                }
                @media #{$large-mobile} {
                    margin-bottom: 13px;
                    height: 45px;
                }
            }
        }
        .content {
            h4 {
                &.title {
                    margin-bottom: 20px;
                    font-weight: 400;
                    font-size: 24px;
                    @media #{$sm-layout} {
                        margin-bottom: 12px;
                        font-weight: 400;
                        font-size: 20px;
                    }
                    @media #{$large-mobile} {
                        margin-bottom: 9px;
                        font-size: 18px;
                    }
                    
                }
            }
            p {
                opacity: 0.75;
                font-weight: 300;
            }
        }
    }
    &.service__style--2 {
        padding: 30px 35px;
        @extend %transition;
        @extend %posrelative;
        z-index: 2;
        border-radius: 10px;
        @media #{$laptop-device} {
            padding: 30px 28px;
        }
        @media #{$md-layout} {
            padding: 30px 25px;
        }
        @media #{$sm-layout} {
            padding: 30px 14px;
        }
        @media #{$large-mobile} {
            padding: 30px 18px;
            margin-top: 30px;
        }

        &::before {
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            background-image: linear-gradient(to right, #4A00B6 , #4D00E1);
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0;
            visibility: hidden;
            @extend %transition;
            border-radius: 10px;
            @media #{$large-mobile} {
                opacity: 0;
                visibility: hidden;
            }
        }
        .icon {
            font-size: 54px;
            font-weight: 400;
            margin-bottom: 23px;
            display: inline-flex;
            color: 4A00B6;
            @extend %transition;
            @media #{$md-layout} {
                margin-bottom: 11px;
            }
            @media #{$large-mobile} {
                color: #4A00B6;
            }
           svg {
                stroke-width: 1 !important;
           }
        }
        .content {
            h3 {
                &.title {
                    margin-bottom: 19px;
                    font-weight: 500;
                    @extend %transition;
                    @media #{$laptop-device} {
                        font-size: 19px;
                    }
                    @media #{$sm-layout} {
                        font-size: 20px;
                    }
                    @media #{$md-layout} {
                        margin-bottom: 8px;
                    }
                    @media #{$large-mobile} {
                        color: #000;
                    }
                    a {
                        color: inherit;
                        @media #{$large-mobile} {
                            color: #000;
                        }
                    }
                }
            }
            p {
                @extend %transition;
                color: rgba(29,29,36,0.75);
                @media #{$large-mobile} {
                    color: #59595E;
                }

            }
        }

        &:hover{
            box-shadow: 0 10px 25px 10px rgba(0, 0, 0, 0.1);
            transform: translateY(-5px);
            &::before {
                opacity: 1;
                visibility: visible;
            }
            .icon{
                color: #ffffff;
            }
            .content{
                h3 {
                    &.title{
                       color: #ffffff;    
                    }
                }
                p{
                   color: #ffffff;  
                }
            }
        }

        &.service-left-align {
            display: flex;
            padding: 50px 24px;
            .icon {
                padding-right: 20px;
            }
        }
    }
    
}

    /* ---------------------------
        Standard Service  
    -------------------------------*/
    .standard-service {
        .thumbnai {
            img {
                border-radius: 5px;
            }
        }
        .content{
            h3 {
                font-size: 19px;
                margin-top: 30px;
                margin-bottom: 10px;
                font-weight: 600;
                a {
                    @extend %transition;
                    color: #000;
                    &:hover {
                        color: #fff;
                    }
                }
            }
            p {
                font-size: 15px;
                line-height: 24px;
            }
            a {
    
            }
        }
    }
    
    
    
    .text-center ,
    .text-left {
        .service {
            &.service__style--2 {
                padding: 60px 45px;
                @media #{$sm-layout} {
                    padding: 30px 14px;
                }
                @media #{$lg-layout} {
                    padding: 30px 14px;
                }
                @media #{$md-layout} {
                    padding: 30px 14px;
                }
            }
        }
    }
    
    // Sercvice Style One
    .service-white{
        // Service Style One
        .service__style--1 {
            z-index: 2;
            .content {
                h4 {
                    &.title {
                       color: #c6c9d8;
                    }
                }
                p{
                    color: #c6c9d8;
    
                }
            }
        }
    }
    
    /*---------------------------
        Paralax Service Style  
    -----------------------------*/
    
    .rn-paralax-service {
        .service__style--2 {
            z-index: 2;
            padding: 40px 40px;
            background: rgba(255,255,255, 0.3);
            margin-top: 40px;
            overflow: hidden;
            border: 2px solid transparent;
            
            @media #{$sm-layout} {
                padding: 30px 20px;
                background: transparent;
                margin-top: 30px;
            }
            
            .icon {
                color: #000;
            }
            .content {
                h3 {
                    &.title {
                        font-size: 19px;
                        color: #000;
                    }
                }
                p {
                    color: 000;
                }
            }
            &:hover {
                border: 2px solid $theme-color;
                &::before {
                    border-radius: 0;
                }
            }
        }
    }
    
    /* Creative Agency Service  */
    .creative-service-wrapper {
        .row {
            &.creative-service {
                a{
                    display: flex;
                    height: 100%;
                }
                .service {
    
                    &.service__style--2 {
                        margin-top: 30px;
                        background: #f6f6f6;
                    }
                }
            }
        }
        
    }
    
    
    
    .service-one-wrapper{
        @media #{$md-layout} {
            margin: 0 -40px;
        }
    }
    .ptb--120,
    .ptb--80 {
        @media #{$sm-layout} {
            padding: 60px 0 !important;
        }
        @media #{$md-layout} {
            padding: 80px 0 !important;
        }
}
/*-------------------------------
    Pricing Area  
--------------------------------*/

.rn-pricing {
    border: 2px solid #4A00B6;
    border-radius: 5px;
    transition: all 0.6s cubic-bezier(0.33, 0.84, 0.31, 0.98);
    transform-style: preserve-3d;
    position: relative;
    z-index: 2;

    &::before {
        z-index: -1;
        display: inline-block;
        content: '';
        -webkit-transition: all 0.6s cubic-bezier(0.33, 0.84, 0.31, 0.98);
        transition: all 0.6s cubic-bezier(0.33, 0.84, 0.31, 0.98);
        opacity: 0;
        border-radius: 5px;
        background-color: #4A00B6;
        background-image: linear-gradient(145deg, #4A00B6 0%, #9B0FB6 100%);
        position: absolute;
        top: -2px;
        right: -2px;
        bottom: -2px;
        left: -2px;
    }
    .pricing-table-inner{
        padding: 40px;
        .pricing-header {
            margin-bottom: 30px;
            padding-bottom: 30px;
            text-align: center;
            border-bottom: 1px solid #4A00B6;
            h4 {
                &.title {
                    margin-bottom: 30px;
                }
            }
            .pricing {
                span {
                    display: block;
                    &.price {
                        font-size: 100px;
                        color: #4A00B6;
                        line-height: 1;
                    }
                    &.subtitle {
                        font-size: 14px;
                        color: $theme-color;
                    }
                }
            }
        }
        .pricing-body {
            text-align: left;
            margin-bottom: 48px;
            ul {
                &.list-style--1 {

                }
            }
        }
        .pricing-footer {
            text-align: center;
            a {
                &.rn-btn {
                    
                    color: #4A00B6
                    background: #ffffff;
                    color: #4A00B6;
                    border: 2px solid;
                    border-color: #4A00B6;
                    padding: 10px 23px
                    border-radius: 4px
                    -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
                    transition: all .3s cubic-bezier(.645,.045,.355,1);
                }
            }
        }
    }

    &:hover,
    &.active {
        &::before {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
        }
        .pricing-table-inner{
            .pricing-header {
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                h4 {
                    &.title {
                        color: #fff;
                        
                        border-color: #4A00B6;;
                    }
                }
                .pricing {
                    span {
                        display: block;
                        &.price {
                            color: #ffffff;
                        }
                        &.subtitle {
                            color: #ffffff;
                        }
                    }
                }
            }
            .pricing-body {
                ul {
                    &.list-style--1 {
                        li {
                            color: #ffffff;
                            svg {
                                color: #ffffff;
                            }
                        }
                    }
                }
            }
            .pricing-footer {
                text-align: center;
                a {
                    &.rn-btn {
                        
                        color: #4A00B6;
                        
                        border-color: #ffffff;
                       
                    }
                }
            }
        }
    }
}

.list-style--1 {
    @extend %liststyle;
    li {
        color: #7e7e7e;
        font-weight: 400;
        font-size: 16px;
        line-height: inherit;
        margin-bottom: 10px;
        i,
        svg {
            color: $theme-color;
            margin-right: 5px;
        }
    }

    &.text-white {
        li {
            color: #ffffff;
        }
    }
}

ul {
    &.list-style {
        @extend %liststyle;
        li {
            position: relative;
            padding-left: 16px;
            color: rgba(29, 29, 36, 0.75);
            font-size: 18px;
            line-height: 25px;
            @media #{$sm-layout} {
                font-size: 16px;
                line-height: 22px;
            }
            &::before {
                position: absolute;
                width: 6px;
                height: 6px;
                background: rgba(29, 29, 36, 0.75);
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                content: "";
                border-radius: 100%;
            }
            & + li{
                margin-top: 10px;
            }
        }
    }
}
/*-------------------------------
    Exaples services foto links  
--------------------------------*/
    .vividworknav {
      width: 33.333%;
      height: auto;
      float: left;
      padding: 0;
      position: relative;
      background-color: #15171B;
    }

    .vividworknav:hover img {
      opacity: 0.3;
    }

    .vividworknav:hover .work-text-content {
      opacity: 1; 
    }

    .vividworknav img {
      padding: 0;
      width: 100%;
      display: block;
      opacity: 1;
    }

    .vividworknav img,
    .work-text-content {
      -webkit-transition: opacity 0.5s ease-out;
      -moz-transition: opacity 0.5s ease-out;
      -o-transition: opacity 0.5s ease-out;
      transition: opacity 0.5s ease-out;
    }

    .work-text-content {
      position: absolute;
      color: white;
      left: 0;
      top: 25%;
      right: 0;
      bottom: 0;
      font-size: 24px;
      text-align: center;
      opacity: 0;
      z-index: 10;
    }



`;