import { projects } from '@/app/(routes)/projects/data';
import Link from 'next/link';
import { fjallaOne } from '@/app/fonts';
import { Separator } from '@/components/ui/separator';

export default function Projects() {
  return (
    <ol className='flex flex-col gap-4'>
      {projects.map(({ title, description, href }) => (
        <>
          <Link href={href} target='_blank' rel='noopener noreferrer'>
            <li key={title} className='flex flex-col gap-1'>
              <h2 className={`${fjallaOne.className} text-light-accent dark:text-dark-accent text-[24px]`}>{title}</h2>
              <p className='text-[16px]'>{description}</p>
            </li>
          </Link>

          <Separator />
        </>
      ))}
    </ol>
  );
}
