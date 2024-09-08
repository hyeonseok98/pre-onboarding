import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useId,
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  checkIdButton?: ReactNode;
}

function Input(
  { label, errorMessage, checkIdButton, ...inputProps }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const uniqueId = useId();

  return (
    <div className="flex flex-col">
      <label
        htmlFor={uniqueId}
        className="block mb-4 font-semibold text-slate-700"
      >
        {label}
      </label>

      <input
        id={uniqueId}
        ref={ref}
        {...inputProps}
        className={`w-full px-3 py-2 border outline-none ${
          errorMessage ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:border-1 focus:border-blue-500`}
      />
      {checkIdButton && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          {checkIdButton}
        </div>
      )}
      {errorMessage && (
        <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
}

export default forwardRef(Input);
