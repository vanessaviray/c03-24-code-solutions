type ButtonProps = {
  buttonText: string;
};

export function ButtonContainer({ buttonText }: ButtonProps) {
  return (
    <div>
      <button>{buttonText}</button>
    </div>
  );
}
