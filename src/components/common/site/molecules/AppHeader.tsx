import Image from 'next/image';

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
        <a href="#about" className="text-xl text-f-green-400">
          ABOUT
        </a>
        <a href="#skills" className="text-xl text-f-green-400">
          SKILLS
        </a>
        <a href="#values" className="text-xl text-f-green-400">
          VALUES
        </a>
        <a href="#future" className="text-xl text-f-green-400">
          FUTURE
        </a>
      </div>
    </Header>
  );
};
