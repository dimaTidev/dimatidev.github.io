'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';

// const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
    // primary: {
    //   main: '#3f51b5',
    // },
    secondary: {
      main: grey[500],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          textTransform: 'none',
          background: blue[700],
          color: "#fff",
          '&:hover': {
            background: blue[800],
          }
        },
        containedSecondary: {
          background: grey[700]
        },
      },
      variants: [
        {
          props: { 
            color: "white" 
          },
          style: {
            textTransform: 'none',
            borderColor: `#fff`,
            color: "#fff",
            '&:hover': {
              borderColor: `#aaa`,
              // color: `#ccc`,
            }
          }
        }
      ]
      // variants: [
      //   {
      //     props: { 
      //       variant: "primaryGradient" 
      //     },
      //     style: {
      //       background: `linear-gradient(45deg, ${blue[700]} 35%, ${blue[300]} 90%)`,
      //       color: "#fff"
      //     }
      //   }
      // ]
    }
  }

  // typography: {
  //   fontFamily: roboto.style.fontFamily,
  // },
  // components: {
    // MuiAlert: {
    //   styleOverrides: {
    //     root: {
    //       variants: [
    //         {
    //           props: { severity: 'info' },
    //           style: {
    //             backgroundColor: '#60a5fa',
    //           },
    //         }
    //       ],
    //     },
    //   },
    // },
  // },
});

export default theme;
// export default createTheme({});