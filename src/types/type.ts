type CssLSD = 'l' | 's' | 'd' | '';

export type CssCommonUnit =
  | 'px'
  | 'em'
  | 'ex'
  | 'ch'
  | 'rem'
  | 'lh'
  | `${CssLSD}vmin`
  | `${CssLSD}vmax`
  | '%';

export type CssWidthUnit = CssCommonUnit | `${CssLSD}vw`;

export type CssHeightUnit = CssCommonUnit | `${CssLSD}vh`;

export type CssSizeUnit = CssWidthUnit | CssHeightUnit;

export type CssWidth = [number, CssWidthUnit];

export type CssHeight = [number, CssHeightUnit];

export type CssSize = [number, CssSizeUnit];
