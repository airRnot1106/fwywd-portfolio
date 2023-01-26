import { AppFooter } from '@/components/common/site/molecules/AppFooter';
import { AppHeader } from '@/components/common/site/molecules/AppHeader';
import { AppHero } from '@/components/common/site/molecules/AppHero';
import { AboutArticleCard } from '@/components/domain/about/molecules/AboutArticleCard';
import { AboutArticleList } from '@/components/domain/about/molecules/AboutArticleList';
import { ArticleTitle } from '@/components/domain/article/atoms/ArticleTitle';

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
      <AppFooter />
    </>
  );
}
