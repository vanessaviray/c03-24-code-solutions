import './TopicCard.css';
import { Topic } from './Accordion.tsx';

type Props = {
  topic: Topic;
  isOpen: boolean;
  onToggle: (id: number) => void;
};

export function TopicCard({ topic, isOpen, onToggle }: Props) {
  return (
    <>
      <div className="topic-title" onClick={() => onToggle(topic.id)}>
        {topic.title}
      </div>
      {isOpen && <div className="topic-content">{topic.content}</div>}
    </>
  );
}
