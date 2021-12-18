import { Theme } from "../context/ThemeContext";

export function changeCssRootVariables(theme:Theme) {
    const root = document.querySelector(':root') as HTMLElement;

    const compotents = [
      'body-background',
      'components-background',
      'card-background',
      'card-shadow',
      'text-color',
    ];

    compotents.forEach((compotent) => {
      root.style.setProperty(`--${compotent}-default`, `var(--${compotent}-${theme})`);
    });
}