import { cn } from '@/lib/utils';

type Container = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void
};

export const Container = ({ children, className, onClick }: Container) => {
  return (
    <div
      onClick={onClick}
      className={cn('flex flex-col justify-between items-center', className)}
    >
      {children}
    </div>
  );
};
