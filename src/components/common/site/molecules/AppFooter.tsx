import Image from 'next/image';
import Link from 'next/link';

import { Footer } from '@/components/base/molecules/Footer';

export const AppFooter = () => {
  return (
    <Footer>
      <p className="space-x-5 text-white">
        <span className="text-xs">CREATED BY</span>
        <span className="text-xl">airRnot1106</span>
      </p>
      <Image
        src="/logo_white.png"
        width="120"
        height="120"
        alt="fwywd"
        className="my-10"
      />
      <div className="my-6 flex items-center justify-center space-x-5">
        <Link href="https://twitter.com/airRnot1106">
          <Image src="/twitter.png" width="20" height="20" alt="twitter" />
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100083526025233">
          <Image src="/facebook.png" width="20" height="20" alt="facebook" />
        </Link>
      </div>
      <p className="text-xs text-white">©︎ 2022 KIKAGAKU</p>
    </Footer>
  );
};
