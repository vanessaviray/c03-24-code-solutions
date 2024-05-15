type Props = {
  className: string;
  onClick: () => void;
  stateLabel: string;
};

export function ToggleSwitch({ className, onClick, stateLabel }: Props) {
  return (
    <div onClick={onClick} className={className}>
      <div className="slider">
        <div className="switch"></div>
      </div>
      <span className="state-label">{stateLabel}</span>
    </div>
  );
}
