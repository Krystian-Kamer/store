import { useRouteError, Link } from 'react-router-dom';

type RouteStatus = {
  status?: number;
};

const ErrorElement = () => {
  const error = useRouteError() as RouteStatus;
  console.log(error);
  return <h4 className='font-bold text-4xl'>There was an error...</h4>;
};
export default ErrorElement;
