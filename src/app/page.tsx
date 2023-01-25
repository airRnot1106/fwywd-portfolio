import { AppFooter } from '@/components/common/site/molecules/AppFooter';
import { AppHeader } from '@/components/common/site/molecules/AppHeader';
import { AppHero } from '@/components/common/site/molecules/AppHero';

export default function Home() {
  return (
    <>
      <AppHeader />
      <AppHero />
      <AppFooter />
    </>
  );
}
