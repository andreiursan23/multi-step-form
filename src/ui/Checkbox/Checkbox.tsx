import { FC, forwardRef, useEffect, useState } from 'react';
import { Check } from 'iconoir-react';

export type CheckboxProps = {
  name: string;
  label: string;
  placeholder: string;
  onChange: (checked: boolean) => void;
  defaultChecked: boolean;
  errorMessage: string | undefined;
};

const getInputStyle = (isChecked: boolean) =>
  isChecked ? 'border-purple-900 bg-purple-500' : 'bg-transparent border-purple-900';

const Checkbox: FC<CheckboxProps> = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, name, onChange, defaultChecked, errorMessage, ...rest }, ref) => {
    const [checked, setChecked] = useState(defaultChecked);

    useEffect(() => {
      if (onChange) {
        onChange(checked);
      }
    }, [checked, onChange]);

    return (
      <div onClick={() => setChecked(!checked)} className="cursor-pointer relative">
        <span className="relative mr-4 flex items-center mb-6">
          <input
            ref={ref}
            type="checkbox"
            name={name}
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            className={`mr-2 h-4 w-4 cursor-pointer appearance-none rounded border ${getInputStyle(
              checked
            )}`}
            {...rest}
          />

          {checked ? (
            <Check
              strokeWidth={3}
              className="absolute top-[6px] left-[2px] h-3 w-3"
              color="#ffffff"
            />
          ) : undefined}

          <p className="text-base text-purple-900">{label}</p>
        </span>

        {errorMessage && (
          <small className="absolute -bottom-4 left-0 text-xs leading-3 text-red-400">
            {errorMessage}
          </small>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
