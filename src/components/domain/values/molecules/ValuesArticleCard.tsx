import Image from 'next/image';

import { ArticleCard } from '@/components/domain/article/molecules/ArticleCard';

interface ValuesArticleCardProps {
  imageSrc: string;
  titleStr: string;
  children: React.ReactNode;
}

export const ValuesArticleCard = ({
  imageSrc,
  titleStr,
  children,
}: ValuesArticleCardProps) => {
  const image = (
    <div className="grid h-52 place-content-center">
      <Image src={imageSrc} width="180" height="180" alt="" />
    </div>
  );

  const title = (
    <h3 className="text-xl font-bold text-f-black-100">{titleStr}</h3>
  );

  return (
    <ArticleCard width={[18, 'rem']} image={image} title={title}>
      {children}
    </ArticleCard>
  );
};
