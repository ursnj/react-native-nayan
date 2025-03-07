import { Progress } from '@/components/ui/progress';

interface Props {
  className?: string;
  indicatorClassName?: string;
  value: number;
}

export const NProgress = (props: Props) => {
  const { value, className = '', indicatorClassName = '' } = props;
  return (
    <Progress value={value} indicatorClassName={`bg-primary ${indicatorClassName}`} className={`w-full bg-card border border-border ${className}`} />
  );
};
