import { useState } from 'react';
import Panel from './Panel';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const panels = [
    { title: 'Panel 1', content: 'Content for panel 1' },
    { title: 'Panel 2', content: 'Content for panel 2' }
  ];
  if (panels.length === 0) {
    return <div aria-label="Accordion">No panels available</div>;
  }
  return (
    <div aria-label="Accordion">
      {panels.map((panel, idx) => (
        <Panel
          key={panel.title}
          title={panel.title}
          isActive={activeIndex === idx}
          onShow={() => setActiveIndex(idx)}
        >
          {panel.content}
        </Panel>
      ))}
    </div>
  );
}

export default Accordion;
