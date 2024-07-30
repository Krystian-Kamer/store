import { LoaderFunctionArgs, redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import {
  OrdersList,
  SectionTitle,
  ComplexPaginationContainer,
} from '../components';
import { AppStore } from '../store';
import axios from 'axios';
import { Meta, OrderParams, UserInfo } from '../types';
import { QueryClient } from '@tanstack/react-query';

const ordersQuery = (params: OrderParams, user : UserInfo) => {
  return {
    queryKey: ['orders', user.username, params.page || '1'],
    queryFn: () =>
      customFetch('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const loader =
  (store: AppStore, queryClient: QueryClient) =>
  async ({ request }: LoaderFunctionArgs) => {
    const user = store.getState().user.user;
    if (!user) {
      toast.warn('You must be logged in to view orders');
      return redirect('/login');
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await queryClient.ensureQueryData(ordersQuery(params, user));
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage: string = 'There was an error placing your order';
        toast.error(errorMessage);
        return error?.response?.status === 401 ||
          error?.response?.status === 403
          ? redirect('/login')
          : null;
      }
    }
  };

const Orders = () => {
  const { meta } = useLoaderData() as { meta: Meta };
  if (meta.pagination.total < 1) {
    return <SectionTitle text='Please make an order' />;
  }

  return (
    <>
      <SectionTitle text='Your Orders' />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  );
};
export default Orders;
