import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

export const useThemeColors = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  return { colorScheme, theme };
};
