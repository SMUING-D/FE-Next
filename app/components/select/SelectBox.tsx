import Select from 'react-select';

export type OptionType = {
  value: string;
  label: string;
};

export type SelectBoxProps = {
  id?: string;
  options: OptionType[];
  onChange: (selectedOption: OptionType | null) => void;
  placeholder?: string;
  value?: OptionType;
};

const SelectBox = ({ id, options, onChange, placeholder, value }: SelectBoxProps) => {
  return (
    <div className="flex w-full flex-col gap-6">
      <Select
        id={id}
        options={options}
        onChange={onChange}
        placeholder={<div className="text-zinc-400">{placeholder}</div>}
        value={value}
        theme={(theme) => ({
          ...theme,
          borderRadius: 5,
          colors: {
            ...theme.colors,
            primary25: '#f6f6f6',
            primary: '#e4e4e4'
          }
        })}
        styles={{
          option: (styles) => ({
            ...styles,
            cursor: 'pointer'
          }),
          control: (styles) => ({
            ...styles,
            border: '2px solid #d4d4d4',
            boxShadow: 'none',
            cursor: 'pointer',
            fontWeight: 300
          })
        }}
      />
    </div>
  );
};

export default SelectBox;
