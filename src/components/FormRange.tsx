import { useState } from 'react';
import { formatPrice } from '../utils/index';
const FormRange = () => {
  const [range, setRange] = useState<string>('100000');

  return (
    <label htmlFor='price' className='form-control'>
      <div className='label'>
        <span className='label-text'>Select price</span>
        <span className='label-text-alt'>{formatPrice(range)}</span>
      </div>
      <input
        type='range'
        min={0}
        max='100000'
        name='price'
        value={range}
        step='10'
        className='range range-primary range-sm'
        onChange={(e) => setRange(e.target.value)}
      />
      <div className='label'>
        <span className='label-text-alt'>0</span>
        <span className='label-text-alt'>Max : $1,000.00</span>
      </div>
    </label>
  );
};
export default FormRange;
