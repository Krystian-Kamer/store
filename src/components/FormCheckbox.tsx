import { useState } from 'react';

const FormCheckbox = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <label className='form-control items-center'>
      <div className='label'>
        <span className='label-text'>Free Shipping</span>
      </div>
      <input
        type='checkbox'
        className='checkbox rounded-2xl checkbox-primary'
        onChange={() => setIsChecked(!isChecked)}
      />
    </label>
  );
};
export default FormCheckbox;
