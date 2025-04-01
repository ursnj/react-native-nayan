import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { NText } from '@/components/NText';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  itemClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  items: { title: string; description: string }[];
}

export const NAccordion = (props: Props) => {
  const { items, className = '', itemClassName = '', titleClassName = '', descriptionClassName = '' } = props;
  return (
    <Accordion type="multiple" collapsible defaultValue={['item-0']} className={cn('w-full', className)}>
      {items.map((item: any, index) => (
        <AccordionItem className={itemClassName} key={index} value={'item-' + index}>
          <AccordionTrigger className="p-3">
            <NText className={cn('text-lg', titleClassName)}>{item.title}</NText>
          </AccordionTrigger>
          <AccordionContent className="p-3 pt-0 border-border">
            <NText className={descriptionClassName}>{item.description}</NText>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
