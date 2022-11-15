import { RotatingLines } from 'react-loader-spinner';
//import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Spinner } from './Loader.styled';

export const Loader = () => {
  return (
    <Spinner>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Spinner>
  );
};
