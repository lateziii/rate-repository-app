import { Platform } from "react-native";

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      nav: '#4287f5',
      primary: '#0366d6',
    },
    fontSizes: {
      body: 14,
      subheading: 16,
    },
    fonts: {
      default: 'system',
      main: Platform.OS === 'android' ? 'Roboto' : 'Sans-serif',
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
  };
  
  export default theme;