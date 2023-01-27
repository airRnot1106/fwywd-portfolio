import { ProgressBar } from '@/components/case/progress/atoms/ProgressBar';

import type { CssWidth } from '@/types/type';

interface SkillsProgressBarProps {
  width: CssWidth;
  title: string;
  percent: number;
}

export const SkillsProgressBar = ({
  width,
  title,
  percent,
}: SkillsProgressBarProps) => {
  return (
    <div className="space-y-1">
      <p className="text-xl text-f-green-400">{title}</p>
      <div className="flex items-center space-x-5">
        <ProgressBar width={width} percent={percent} />
        <p className="text-f-green-400">{percent}%</p>
      </div>
    </div>
  );
};
