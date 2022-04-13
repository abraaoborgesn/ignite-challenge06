import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        background: "#1D1D1D",
        dark: {
            "black": "#000000",
            "headingsAndText": "#47585B",
            "info": "#999999",
            "info-50": "rgba(153, 153, 153, 0.5)"
        },
        light: {
            "white": "#FFFFFF",
            "headingsAndText": "#F5F8FA",
            "info": "#DADADA"
        },
        Highlight: "#FFBA08",
        Highlight_50: "rgba(255, 186, 8, 0.5)",

    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'dark.headingsAndText'
            }
        }
    }
})