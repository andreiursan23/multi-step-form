import { FC, forwardRef } from 'react';

export type InputProps = {
  id: string;
  label: string;
  placeholder: string;
  errorMessage: string | undefined;
};

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, placeholder, errorMessage, ...props }, ref) => {
    const getBorderStyle = () => {
      if (errorMessage) {
        return 'border-red-400';
      } else {
        return 'border-gray-200';
      }
    };

    return (
      <div className="w-full flex flex-col content-center relative transition-all duration-200 ease-in-out">
        <label htmlFor={id} className="font-light text-sm text-gray-500 pb-1">
          {label}:
        </label>

        <input
          id={id}
          ref={ref}
          name={id}
          type="text"
          aria-label={label}
          placeholder={placeholder}
          className={`flex items-center outline-0 rounded-xl border ${getBorderStyle()} bg-gray-50 py-2 px-3 text-base text-purple-900 mb-6 placeholder:font-extralight placeholder:text-sm placeholder:text-gray-400 hover:border-violet-700 focus:border-violet-700`}
          {...props}
        />

        <p className="absolute bottom-2 left-1 text-xs leading-3 text-red-400">
          {errorMessage}
        </p>
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
