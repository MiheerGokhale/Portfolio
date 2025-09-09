import { Container } from '@/components/container';
import { Social } from '@/components/social';
import { cn } from '@/lib/utils';
// import  {Moon} from 'lucide-react';

export const Navbar = ({className}: {className? : string}) => {
  return (
    <Container className={cn('gap-y-4 z-1 bg-neutral-900/60 backdrop-blur',
      className
    )}>
     <div className='flex flex-col gap-2 justify-center items-center pt-4'>
        <h2 className="text-2xl md:text-3xl text-white font-bold font-inter">Miheer Gokhale</h2>
        <p className="text-neutral-400 text-center text-sm text-pretty md:text-lg">
        Full stack developer building fast, accessible web apps.
      </p>
     </div>
     <div className='flex justify-center items-center w-3/4 md:w-1/8'>
        <Social className='hover:text-white transition-all duration-200 ease-in-out' />
        {/* <Moon className='ml-6 text-white' size={24} /> */}
     </div>
     <div className='min-w-4xl mx-auto border border-neutral-800'></div>
    </Container>
  );
};
