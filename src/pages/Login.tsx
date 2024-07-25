import {
  ActionFunctionArgs,
  Form,
  Link,
  redirect,
  useNavigate,
} from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components/';
import { toast } from 'react-toastify';
import axios from 'axios';
import { customFetch } from '../utils';
import { loginUser } from '../features/user/userSlice';
import { useAppDispatch } from '../hooks';
import { AppStore } from '../store';
loginUser;

export const action =
  (store: AppStore) =>
  async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post('/auth/local', data);
      store.dispatch(loginUser(response.data));
      toast.success('Logged in successfully');
      return redirect('/');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage: string =
          error?.response?.data?.error?.message ||
          'please double check your crudentails';
        toast.error(errorMessage);
        return null;
      }
    }
  };

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });
      dispatch(loginUser(response.data));
      toast.success('Welcome Guest User');
      navigate('/');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage: string = 'Guest user login error, please try again';
        toast.error(errorMessage);
      }
    }
  };

  return (
    <section className='h-screen grid place-items-center '>
      <Form
        method='POST'
        className='card w-96 bg-base-100 p-8 shadow-lg flex flex-col gap-y-4'
      >
        <h4 className='text-center text-3xl font-bold'> Login</h4>
        <FormInput type='email' label='email' name='identifier' />
        <FormInput type='password' label='password' name='password' />
        <div className='mt-4'>
          <SubmitBtn text='login' />
        </div>
        <button
          type='button'
          className='btn btn-secondary btn-block'
          onClick={loginAsGuestUser}
        >
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
