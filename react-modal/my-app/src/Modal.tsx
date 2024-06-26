import { ReactNode, useEffect, useRef } from 'react';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ children, isOpen, onClose }: Props) {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    isOpen ? modal.current?.showModal() : modal.current?.close();
  }),
    [isOpen];

  function handleKeyDown(event: React.KeyboardEvent<HTMLDialogElement>) {
    event.key === 'Escape' && onClose();
  }

  return (
    <dialog ref={modal} onKeyDown={handleKeyDown}>
      {children}
    </dialog>
  );
}
