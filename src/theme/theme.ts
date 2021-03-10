import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      "html, body": {
        fontFamily: 'Lato, sans-serif',
      },
      "body": {
        backgroundColor: '#272D45',
      },
    },
  },
});

export default theme;
