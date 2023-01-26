import { AppFooter } from '@/components/common/site/molecules/AppFooter';
import { AppHeader } from '@/components/common/site/molecules/AppHeader';
import { AppHero } from '@/components/common/site/molecules/AppHero';
import { AboutArticleCard } from '@/components/domain/about/molecules/AboutArticleCard';
import { AboutArticleList } from '@/components/domain/about/molecules/AboutArticleList';
import { ArticleTitle } from '@/components/domain/article/atoms/ArticleTitle';
import { ValuesArticleCard } from '@/components/domain/values/molecules/ValuesArticleCard';
import { ValuesArticleList } from '@/components/domain/values/molecules/ValuesArticleList';

export default function Home() {
  return (
    <>
      <AppHeader />
      <AppHero />
      <div
        id="about"
        className="flex flex-col items-center justify-center bg-[url('/bg-about.png')] py-14 px-5"
      >
        <ArticleTitle mainTitle="私について" subTitle="ABOUT" />
        <AboutArticleList>
          <AboutArticleCard imageSrc="/about-1.png" titleStr="趣味">
            <p className="text-f-black-100">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </AboutArticleCard>
          <AboutArticleCard imageSrc="/about-2.png" titleStr="好きな食べ物">
            <p className="text-f-black-100">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </AboutArticleCard>
          <AboutArticleCard imageSrc="/about-3.png" titleStr="性格">
            <p className="text-f-black-100">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </AboutArticleCard>
        </AboutArticleList>
      </div>
      <div className="flex flex-col items-center justify-center">
        <ArticleTitle mainTitle="価値観" subTitle="VALUES" />
        <ValuesArticleList>
          <ValuesArticleCard imageSrc="/value1.png" titleStr="価値観01">
            <p className="text-f-black-100">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </ValuesArticleCard>
          <ValuesArticleCard imageSrc="/value2.png" titleStr="価値観02">
            <p className="text-f-black-100">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </ValuesArticleCard>
          <ValuesArticleCard imageSrc="/value3.png" titleStr="価値観03">
            <p className="text-f-black-100">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </ValuesArticleCard>
        </ValuesArticleList>
      </div>
      <AppFooter />
    </>
  );
}
