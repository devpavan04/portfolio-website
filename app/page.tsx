import { Intro } from '@/components/Intro';
import { Socials } from '@/components/Socials';

export default function Home() {
  return (
    <main className='flex flex-col gap-8'>
      <Intro />

      <Socials />

      {/* <Separator className='bg-light-accent dark:bg-dark-accent' /> */}
    </main>
  );
}
