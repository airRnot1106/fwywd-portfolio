import Image from 'next/image';

import { AppFooter } from '@/components/common/site/molecules/AppFooter';
import { AppHeader } from '@/components/common/site/molecules/AppHeader';
import { AppHero } from '@/components/common/site/molecules/AppHero';
import { AboutArticleCard } from '@/components/domain/about/molecules/AboutArticleCard';
import { AboutArticleList } from '@/components/domain/about/molecules/AboutArticleList';
import { ArticleTitle } from '@/components/domain/article/atoms/ArticleTitle';
import { SkillsProgressBar } from '@/components/domain/skills/atoms/SkillsProgressBar';
import { SkillsList } from '@/components/domain/skills/molecules/SkillsList';
import { ValuesArticleCard } from '@/components/domain/values/molecules/ValuesArticleCard';
import { ValuesArticleList } from '@/components/domain/values/molecules/ValuesArticleList';

export default function Home() {
  return (
    <>
      <AppHeader />
      <AppHero />
      <main>
        <div className="bg-[url('/bg-about.png')] bg-cover">
          <div
            id="about"
            className="flex flex-col items-center justify-center py-20"
          >
            <ArticleTitle mainTitle="私について" subTitle="ABOUT" />
            <AboutArticleList>
              <AboutArticleCard
                imageSrc="/about-1.png"
                imageSize={[184, 157]}
                titleStr="趣味"
              >
                <p className="text-f-black-100">
                  中学・高校時代では吹奏楽部に所属していました。打楽器が得意です。また、DTMで音楽を作るのが好きです。大学生になってからはプログラミングに目覚め、熱中しています。
                </p>
              </AboutArticleCard>
              <AboutArticleCard
                imageSrc="/about-2.png"
                imageSize={[206, 158]}
                titleStr="好きな食べ物"
              >
                <p className="text-f-black-100">
                  最近はお酒を飲むことが好きです。特にビールが好きで、毎週飲んでいます。ビール以外だとハイボールやワインが好きです。また、お酒と合う料理を食べることが好きです。
                </p>
              </AboutArticleCard>
              <AboutArticleCard
                imageSrc="/about-3.png"
                imageSize={[245, 149]}
                titleStr="性格"
              >
                <p className="text-f-black-100">
                  常に新しい技術に興味を持っており、自分自身を改善しようと努力しています。また、環境を整えることが好きで、コードにおいてもクリーンなアーキテクチャを意識しています。
                </p>
              </AboutArticleCard>
            </AboutArticleList>
          </div>
        </div>
        <div className="-mt-10 bg-[url('/bg-skills.png')] bg-cover">
          <div
            id="skills"
            className="grid grid-cols-2 place-content-around gap-4 pt-32 pb-20"
          >
            <div className="self-center justify-self-center">
              <Image src="/skill.png" width="535" height="372" alt="" />
            </div>
            <div className="w-2/3 space-y-3 break-words">
              <ArticleTitle mainTitle="スキル" subTitle="SKILLS" />
              <p className="leading-8 text-f-black-100">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
              <SkillsList>
                <SkillsProgressBar
                  width={[100, '%']}
                  title="TypeScript"
                  percent={90}
                />
                <SkillsProgressBar
                  width={[100, '%']}
                  title="C++"
                  percent={40}
                />
                <SkillsProgressBar
                  width={[100, '%']}
                  title="Nuxt.js"
                  percent={70}
                />
                <SkillsProgressBar
                  width={[100, '%']}
                  title="Next.js"
                  percent={60}
                />
              </SkillsList>
            </div>
          </div>
        </div>
        <div>
          <div
            id="values"
            className="flex flex-col items-center justify-center pt-20 pb-10"
          >
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
        </div>
        <div className="bg-[url('/bg-future.png')] bg-cover">
          <div
            id="future"
            className="-mt-64 flex justify-center space-x-5 pt-72 pb-20"
          >
            <div className="mt-3 w-1/3 break-words">
              <ArticleTitle mainTitle="3年後にやりたいこと" subTitle="FUTURE" />
              <p className="mt-5 leading-8 text-f-black-100">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
            <Image src="/future.png" width="480" height="251" alt="" />
          </div>
        </div>
      </main>
      <AppFooter />
    </>
  );
}
