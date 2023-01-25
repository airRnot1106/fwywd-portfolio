import Image from 'next/image';

import { Hero } from '@/components/base/molecules/Hero';

export const AppHero = () => {
  return (
    <Hero>
      <div className="mx-10 space-y-5">
        <h1 className="text-4xl font-bold text-white">メインタイトル</h1>
        <h2 className="text-2xl font-bold text-gray-200">サブタイトル</h2>
      </div>
      <Image src="/hero.png" width="500" height="500" alt="" />
    </Hero>
  );
};
