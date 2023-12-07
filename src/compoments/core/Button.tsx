interface Props {
  children?: string;
  buttonType?: "white" | "primary" | "secondary" | "danger" | "warning";
  buttonSize?: "lg" | "sm" | "md" | "xl";

  onButtonClick?: (item: any) => void;
}

function Button({
  children,
  buttonType = "primary",
  buttonSize = "xl",
  onButtonClick,
}: Props) {
  return (
    <>
      <button
        type="button"
        className={"m-1 btn btn-" + buttonType + " btn-" + buttonSize}
        onClick={onButtonClick}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
