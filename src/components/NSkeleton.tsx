import { Skeleton } from '@/components/ui/skeleton';

interface Props {
  className?: string;
}

export const NSkeleton = (props: Props) => {
  return <Skeleton className={`bg-muted dark:bg-muted ${props.className}`} />;
};
