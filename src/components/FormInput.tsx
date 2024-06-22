type Props = {
  label: string;
  name: string;
  type: string;
  defaultValue?: string;
  size?: string;
  placeholder: string;
};

const FormInput = ({ label, name, type, defaultValue, size, placeholder }: Props) => {
  return (
    <label className='form-control'>
      <div className='label'>
        <span className='label-text'>{label}</span>
      </div>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`input input-bordered ${size}`}
      />
    </label>
  );
};
export default FormInput;
