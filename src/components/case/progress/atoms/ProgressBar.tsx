import type { CssWidth } from '@/types/type';

interface ProgressBarProps {
  width: CssWidth;
  percent: number;
}

export const ProgressBar = ({ width, percent }: ProgressBarProps) => {
  const [widthNum, unit] = width;

  return (
    <div
      className="flex items-center justify-center"
      style={{ width: `${widthNum}${unit}` }}
    >
      <div
        className="h-4 rounded-l-md bg-f-green-300"
        style={{ width: `${percent}%` }}
      ></div>
      <div
        className="h-4 rounded-r-md bg-f-green-100"
        style={{ width: `${100 - percent}%` }}
      ></div>
    </div>
  );
};
