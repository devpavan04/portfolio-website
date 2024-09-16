import { projects } from '@/app/(routes)/projects/data';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { hubotSans } from '@/lib/fonts';

export default function Projects() {
  if (projects.length === 0) return <div className='text-center'>No projects found :(</div>;

  return (
    <>
      {projects.map(({ title, description, href }) => (
        <div key={title} className='flex flex-col gap-4'>
          <Link href={href} target='_blank' rel='noopener noreferrer'>
            <div className='flex flex-col gap-1'>
              <h2
                className={`${hubotSans.className} + text-light-accent dark:text-dark-accent text-[24px] font-medium hover:underline`}
              >
                {title}
              </h2>
              <p className='text-[16px]'>{description}</p>
            </div>
          </Link>

          <Separator />
        </div>
      ))}
    </>
  );
}
