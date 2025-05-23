import React, { createContext, useState } from 'react';
import { Appearance, useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

// Define the structure of the context
// export const ThemeContext = createContext({});

// export const ThemeProvider = ({ children }) => {
//   const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
//   const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

//   return (
//     <ThemeContext.Provider value={colorScheme === 'dark' ? Colors.dark : Colors.light} >
//       {children}
//     <\ThemeContext.Provider>
//   );
// };

export function useThemeColor(
     props: { light?: string; dark?: string },
     colorName: keyof typeof Colors.light & keyof typeof Colors.dark
   ) {
     const theme = useColorScheme() ?? 'light';
     const colorFromProps = props[theme];
   
     if (colorFromProps) {
       return colorFromProps;
     } else {
       return Colors[theme][colorName];
     }
   }
