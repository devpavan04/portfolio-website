import { Intro } from '@/components/Intro';
import { Socials } from '@/components/Socials';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main className='flex flex-col gap-8'>
      <Intro />

      <Socials />

      <Separator />
    </main>
  );
}
