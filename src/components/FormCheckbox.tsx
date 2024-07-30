const FormCheckbox = ({
  defaultValue,
}: {
  defaultValue: string | undefined;
}) => {
  return (
    <label className='form-control items-center'>
      <div className='label'>
        <span className='label-text'>Free Shipping</span>
      </div>
      <input
        type='checkbox'
        name='shipping'
        defaultChecked={defaultValue === undefined ? false : true}
        className='checkbox rounded-2xl checkbox-primary'
      />
    </label>
  );
};
export default FormCheckbox;
