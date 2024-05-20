import { TopicCard } from './TopicCard';
import { useState } from 'react';

type Topics = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  topics: Topics[];
};

export function Accordion({ topics }: Props) {
  const [openTopicId, setOpenTopicId] = useState<number | null>(null);

  function handleToggle(id: number) {
    setOpenTopicId(openTopicId === id ? null : id);
  }

  return (
    <div className="accordion">
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          isOpen={topic.id === openTopicId}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}
