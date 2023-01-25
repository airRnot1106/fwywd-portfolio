import type { CssWidth } from '@/types/type';

interface ArticleCardProps {
  width: CssWidth;
  image: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
}

export const ArticleCard = ({
  width,
  image,
  title,
  children,
}: ArticleCardProps) => {
  const [widthNum, unit] = width;

  return (
    <div
      className="flex flex-col items-center space-y-5 break-words p-3 [&>*]:leading-10"
      style={{ width: `${widthNum}${unit}` }}
    >
      {image}
      {title}
      {children}
    </div>
  );
};
