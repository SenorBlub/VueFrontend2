const colorVariableMap: Record<string, string> = {
    text: "--text-primary",
    primary: "--accent-primary",
    secondary: "--accent-secondary",
    tertiary: "--accent-tertiary",
  
    bgPrimary: "--background-primary",
    bgSecondary: "--background-secondary",
  
    danger: "--danger",
    caution: "--caution",
    alert: "--alert",
    success: "--success"
  };
  
  /**
   * Retrieves the computed color value from a CSS variable.
   * @param colorType - The functional color name
   * @returns The hex color code as a string (e.g., `#F9F9F9`), or a default color if not found.
   */
  export function getPaletteColor(colorType: string): string {
    if (typeof window === "undefined") {
      console.warn(`getPaletteColor: Cannot access window in SSR mode.`);
      return "#2A2A2A"; // Default fallback
    }
  
    const cssVar = colorVariableMap[colorType];
    if (!cssVar) {
      console.warn(`getPaletteColor: Unknown color type '${colorType}'.`);
      return "#2A2A2A"; // Default fallback
    }
  
    const computedColor = window.getComputedStyle(document.body).getPropertyValue(cssVar);
    
    if (!computedColor) {
      console.warn(`getPaletteColor: CSS variable '${cssVar}' not found.`);
      return "#2A2A2A"; // Default fallback
    }

    console.log(computedColor);
  
    return  computedColor;
  }
  