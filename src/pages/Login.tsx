import { Form, Link } from 'react-router-dom';
import { FormInput } from '../components/';
import { SubmitBtn } from '../components/';

const Login = () => {
  return (
    <section className='h-screen grid place-items-center '>
      <Form
        method='POST'
        className='card w-96 bg-base-100 p-8 shadow-lg flex flex-col gap-y-4'
      >
        <h4 className='text-center text-3xl font-bold'> Login</h4>
        <FormInput
          type='email'
          label='email'
          name='identifier'
          defaultValue='test@test.com'
        />
        <FormInput
          type='password'
          label='password'
          name='password'
          defaultValue='bananas'
        />
        <div className='mt-4'>
          <SubmitBtn text='login' />
        </div>
        <button type='button' className='btn btn-secondary btn-block'>
          guest user
        </button>
        <p className='text-center'>
          Not a member yet?
          <Link
            to='/register'
            className='ml-2 link link-hover link-primary capitalize'
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
