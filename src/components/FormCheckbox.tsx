
const FormCheckbox = () => {
  return (
    <label className='form-control items-center'>
      <div className='label'>
        <span className='label-text'>Free Shipping</span>
      </div>
      <input
        type='checkbox'
        name='shipping'
        className='checkbox rounded-2xl checkbox-primary'
      />
    </label>
  );
};
export default FormCheckbox;
