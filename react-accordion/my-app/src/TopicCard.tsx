import { type Topic } from './Accordion.tsx';
import './TopicCard.css';

type Props = {
  topic: Topic;
  isOpen: boolean;
  onToggle: (id: number) => void;
};

export function TopicCard({ topic, isOpen, onToggle }: Props) {
  return (
    <div>
      <div className="topic-title" onClick={() => onToggle(topic.id)}>
        {topic.title}
      </div>
      {isOpen && <div className="topic-content">{topic.content}</div>}
    </div>
  );
}
