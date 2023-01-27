import Image from 'next/image';

import { Hero } from '@/components/base/molecules/Hero';

export const AppHero = () => {
  return (
    <Hero>
      <div className="mx-10 space-y-5">
        <h1 className="text-4xl font-bold text-white">airRnot1106</h1>
        <h2 className="text-2xl font-bold text-gray-200">ポートフォリオ</h2>
      </div>
      <Image src="/hero.png" width="585" height="498" alt="" />
    </Hero>
  );
};
