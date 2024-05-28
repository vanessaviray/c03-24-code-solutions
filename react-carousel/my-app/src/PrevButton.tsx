import { FaArrowLeft } from 'react-icons/fa';

type Props = {
  onClick: () => void;
};

export function PrevButton({ onClick }: Props) {
  return <FaArrowLeft onClick={onClick} />;
}
