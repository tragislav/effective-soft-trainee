import { useState } from 'react';

import { AccordionContent, AccordionButton, AccordionInner } from './styled';

import { ReactComponent as Minus } from '../../../assets/images/minus.svg';
import { ReactComponent as Plus } from '../../../assets/images/plus.svg';

interface AccordionProps {
  title: string;
  desc: string;
}

function Accordion({ title, desc }: AccordionProps) {
  const [accordeonIsActive, setIsActive] = useState<boolean>(false);

  return (
    <AccordionContent>
      <AccordionButton
        type="button"
        onClick={() => setIsActive(!accordeonIsActive)}
      >
        <div>{title}</div>
        {accordeonIsActive ? <Minus /> : <Plus />}
      </AccordionButton>
      {accordeonIsActive && (
        <AccordionInner
          type="button"
          onClick={() => setIsActive(!accordeonIsActive)}
        >
          {desc}
        </AccordionInner>
      )}
    </AccordionContent>
  );
}

export default Accordion;
