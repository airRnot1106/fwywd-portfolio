import Image from 'next/image';

import { ArticleCard } from '@/components/domain/article/molecules/ArticleCard';

interface AboutArticleCardProps {
  imageSrc: string;
  imageSize: [number, number];
  titleStr: string;
  children: React.ReactNode;
}

export const AboutArticleCard = ({
  imageSrc,
  imageSize,
  titleStr,
  children,
}: AboutArticleCardProps) => {
  const [width, height] = imageSize;

  const image = (
    <div className="grid h-40 place-content-center">
      <Image src={imageSrc} width={width} height={height} alt="" />
    </div>
  );

  const title = (
    <h3 className="text-2xl font-bold text-f-green-400">{titleStr}</h3>
  );

  return (
    <ArticleCard width={[20, 'rem']} image={image} title={title}>
      {children}
    </ArticleCard>
  );
};
