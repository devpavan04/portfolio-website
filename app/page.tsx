import { Intro } from '@/components/Intro';
import { Latest } from '@/components/Latest';
import { Socials } from '@/components/Socials';

export default function Home() {
  return (
    <main className='flex flex-col gap-6'>
      <Intro />

      <Socials />

      <Latest />
    </main>
  );
}
