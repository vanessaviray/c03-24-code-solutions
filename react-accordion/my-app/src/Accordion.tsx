import { TopicCard } from './TopicCard';
import { useState } from 'react';

export type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  topics: Topic[];
};

export function Accordion({ topics }: Props) {
  const [openTopicId, setOpenTopicId] = useState<number>(0);

  function handleToggle(id: number) {
    setOpenTopicId(openTopicId === id ? 0 : id);
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
