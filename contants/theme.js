const COLORS = {
  primary: "#4E8FF8",   // Blue
  secondary: "#FF6B6B", // Red
  tertiary: "#57CC99",  // Green
  gray: "#A4A4A4",      // Gray
  gray2: "#D4D4D4",     // Light Gray
  white: "#FFFFFF",     // White
  lightWhite: "#F5F5F5", // Off-White
  // You can replace these colors with your desired values
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 18,
  xLarge: 24,
  xxLarge: 32,
  // Add more font sizes if required
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
  // Add more shadow types for different components
};

// You can add more fonts, line heights, and other font-related properties here
const FONT = {
  regular: 'Arial',
  bold: 'Arial-Bold',
};

export { COLORS, FONT, SIZES, SHADOWS };
