// utils/themeColors.ts

export const THEME_COLORS = [
    "primary",
    "secondary",
    "accent",
    "info",
    "success",
    "warning",
    "error"
];
// utils/getNextColor.ts

let randomIndex = 0;

export const getRandomColor = () => {
    const color = THEME_COLORS[randomIndex % THEME_COLORS.length];
    randomIndex++;
    return color;
};