import { FC } from 'react';
import Select from 'react-select';
import { Controller, Control } from 'react-hook-form';
import { GroupBase, StylesConfig } from 'react-select';

import selectStyles from './styles';

export interface Option {
  value: string;
  label: string;
}

interface ISelectUIProps {
  label: string;
  name: string;
  selectData: string[];
  control: Control<any, any>;
  errorMessage: string | undefined;
}

const SelectUI: FC<ISelectUIProps> = (props: ISelectUIProps) => {
  const { label, name, selectData, control, errorMessage } = props;

  const options = selectData?.map((data) => {
    return {
      value: data,
      label: data,
    };
  });

  return (
    <div className="w-full flex flex-col content-center relative transition-all duration-200 ease-in-out">
      <label htmlFor={name} className="font-light text-sm text-gray-500 mb-1">
        {label}:
      </label>

      <div className="mb-6">
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value, ref } }) => (
            <Select
              ref={ref}
              id={name}
              value={options.filter((option) => value.includes(option.value))}
              onChange={(option) => onChange(option?.value)}
              options={options}
              styles={
                selectStyles as unknown as
                  | StylesConfig<Option, false, GroupBase<Option>>
                  | undefined
              }
            />
          )}
        />
      </div>

      <p className="absolute bottom-2 left-1 text-xs leading-3 text-red-400">
        {errorMessage}
      </p>
    </div>
  );
};

export default SelectUI;
