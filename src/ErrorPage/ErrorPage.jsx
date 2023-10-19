import { Link } from 'react-router-dom';
import error from '../../public/images/oops-404-error-with-broken-robot-concept-illustration_114360-5529.avif'
const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full">

                <img src={error} alt="" />
               
                <Link to='/'>
                <button className='btn bg-pink-400 text-white'>Go Home</button>
                </Link>
        </div>
    );
};

export default ErrorPage;