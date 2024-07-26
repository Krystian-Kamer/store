import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({ text }: { text: string }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      type='submit'
      className='btn btn-primary btn-block uppercase'
      disabled={isSubmitting}
    >
      {isSubmitting ? <span className='loading loading-spinner'></span> : text}
    </button>
  );
};
export default SubmitBtn;
