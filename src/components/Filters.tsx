import { Form, useLoaderData, Link } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';

import { type Meta, type Params } from '../types';
const Filters = () => {
  const { meta } = useLoaderData() as { meta: Meta };
  const { params } = useLoaderData() as { params: Params };
  const { search, category, company, order, price, shipping } = params;

  return (
    <Form
      className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'
      method='GET'
    >
      {/* search */}
      <FormInput
        type='search'
        label='search product'
        name='search'
        defaultValue={search}
        placeholder='name of item'
        size='input-sm'
      />
      {/* form selects */}
      <FormSelect
        label='select category'
        name='category'
        list={meta.categories}
        defaultValue={category}
        size='select-sm'
      />
      <FormSelect
        label='select company'
        name='company'
        list={meta.companies}
        defaultValue={company}
        size='select-sm'
      />
      <FormSelect
        label='sort by'
        name='order'
        list={['a-z', 'z-a', 'lowest price', 'highest price']}
        defaultValue={order}
        size='select-sm'
      />
      <FormRange price={price} />
      <FormCheckbox defaultValue={shipping} />
      {/* buttons */}
      <button type='submit' className='btn btn-primary btn-sm uppercase'>
        search
      </button>
      <Link to='/products' className='btn btn-accent btn-sm uppercase'>
        reset
      </Link>
    </Form>
  );
};
export default Filters;
