import { useLoaderData, LoaderFunctionArgs } from 'react-router-dom';
import { formatPrice, customFetch, generateAmountOptions } from '../utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { type Attributes } from '../types';

export const loader = async (data: LoaderFunctionArgs): Promise<Attributes> => {
  const id = data.params.id as string;
  const response = await customFetch(`/products/${id}`);
  const product = response.data.data;
  const attributes: Attributes = product.attributes;
  return attributes;
};

const SingleProduct = () => {
  const attributes = useLoaderData() as Attributes;
  const { image, title, price, description, colors, company } = attributes;
  const dollarsAmount = formatPrice(price);

  const [pickedColor, setPickedColor] = useState<string>(colors[0]);
  const [amount, setAmount] = useState<number>(1);
  const handleAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAmount(parseInt(e.target.value));
  };

  return (
    <section>
      <div className='text-md breadcrumbs'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </div>
      {/* product */}
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        <img
          src={image}
          alt={title}
          className='w-86 h-96 object-cover rounded lg:w-full'
        />
        <div>
          <h1 className='capitalize text-3xl font-bold'>{title}</h1>
          <h4 className='text-xl text-neutral-content font-bold mt-2'>
            {company}
          </h4>
          <p className='mt-3 text-xl'>{dollarsAmount}</p>
          <p className='mt-6 leading-8'> {description}</p>
          {/* color */}
          <div className='mt-6'>
            <h4 className='text-md font-medium tracking-wider capitalize'>
              colors
            </h4>
            <div className='mt-2'>
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type='button'
                    className={`badge w-6 h-6 mr-2 ${
                      color === pickedColor && 'border-2 border-secondary'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={(e) => {
                      e.preventDefault();
                      if (color === pickedColor) return;
                      return setPickedColor(color);
                    }}
                  ></button>
                );
              })}
            </div>
            <div className='form-control w-full max-w-xs'>
              <label className='label' htmlFor='amount'>
                <h4 className='text-md font-medium tracking-wider capitalize'>
                  Amount
                </h4>
              </label>
              <select
                id='amount'
                className='select select-secondary select-bordered select-md'
                onChange={handleAmount}
                value={amount}
              >
                {generateAmountOptions(20)}
              </select>
            </div>
            <div className='mt-10'>
              <button
                className='btn btn-secondary btn-md uppercase'
                onClick={() => console.log('add to bag')}
              >
                Add to bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
