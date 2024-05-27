import { useState } from 'react';
import { TopicCard } from './TopicCard.tsx';

export type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  topics: Topic[];
};

export function Accordion({ topics }: Props) {
  const [openTopicId, setOpenTopicId] = useState(0);

  function handleToggle(id: number) {
    setOpenTopicId(openTopicId === id ? 0 : id);
  }

  const topicCards = topics.map((topic) => (
    <TopicCard
      onToggle={handleToggle}
      key={topic.id}
      topic={topic}
      isOpen={topic.id === openTopicId}
    />
  ));

  return <div className="accordion">{topicCards}</div>;
}
