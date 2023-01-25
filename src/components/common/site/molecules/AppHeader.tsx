import Image from 'next/image';
import Link from 'next/link';

import { Header } from '@/components/base/molecules/Header';

export const AppHeader = () => {
  return (
    <Header>
      <Image
        src="/logo.png"
        width="150"
        height="150"
        alt="fwywd"
        className="object-none"
      />
      <div className="flex items-center space-x-10">
        <Link href="#about" className="text-xl text-f-green-400">
          ABOUT
        </Link>
        <Link href="#skills" className="text-xl text-f-green-400">
          SKILLS
        </Link>
        <Link href="#values" className="text-xl text-f-green-400">
          VALUES
        </Link>
        <Link href="#future" className="text-xl text-f-green-400">
          FUTURE
        </Link>
      </div>
    </Header>
  );
};
