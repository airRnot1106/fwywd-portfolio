import Image from 'next/image';

import { ArticleCard } from '@/components/domain/article/molecules/ArticleCard';

interface AboutArticleCardProps {
  imageSrc: string;
  titleStr: string;
  children: React.ReactNode;
}

export const AboutArticleCard = ({
  imageSrc,
  titleStr,
  children,
}: AboutArticleCardProps) => {
  const image = (
    <div className="grid h-40 place-content-center">
      <Image src={imageSrc} width="180" height="180" alt="" />
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
