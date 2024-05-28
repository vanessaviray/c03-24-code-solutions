import { FaArrowRight } from 'react-icons/fa';

type Props = {
  onClick: () => void;
};

export function NextButton({ onClick }: Props) {
  return <FaArrowRight onClick={onClick} />;
}
