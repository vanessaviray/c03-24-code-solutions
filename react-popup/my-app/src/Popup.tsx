import { ReactNode } from 'react';
import './Popup.css';
import { createPortal } from 'react-dom';

type Props = {
  isOpen: boolean;
  positionTo: HTMLElement | null;
  onClose: () => void;
  children: ReactNode;
  opacity?: number;
};

export function Popup({
  isOpen,
  positionTo,
  onClose,
  children,
  opacity = 0.5,
}: Props) {
  if (!isOpen) {
    return null;
  }
  const r = positionTo?.getBoundingClientRect();
  const top = r ? r.top + r.height : '50%';
  const left = r ? r.left + r.width / 2 : '50%';

  return createPortal(
    <>
      <div
        onClick={onClose}
        className="backdrop"
        style={{ backgroundColor: `rgb(0, 0, 0, ${opacity})` }}></div>
      <div style={{ top: top, left: left, position: 'absolute' }}>
        {children}
      </div>
    </>,
    document.body
  );
}
