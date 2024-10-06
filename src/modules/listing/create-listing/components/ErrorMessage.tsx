import { FieldErrors, FieldValues } from "react-hook-form";
import "./Component.scss";

interface InputProps {
  errors: FieldErrors<FieldValues>;
  id: string;
}

function ErrorMessage({ errors, id }: InputProps) {
  const errorMessage = errors[id]?.message;

  return (
    <>
      {errorMessage && (
        <p className="text-rose-500 text-xs mt-2">{String(errorMessage)}</p>
      )}
    </>
  );
}

export default ErrorMessage;
