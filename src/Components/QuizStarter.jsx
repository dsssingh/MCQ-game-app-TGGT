
import { Link } from 'react-router-dom';

const QuizStarter = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-100px)]'>
            <div className="w-[96%] md:w-[50%] mx-auto shadow-xl py-5 text-center border">
                <p className='text-lg md:text-2xl font-bold mb-3'>Quiz System</p>
                <p className='mb-3 text-red-500'>I didn't make the fields necessary for testing purposes</p>
                <Link to={'/quiz'}  className='mt-3 py-2 px-3 font-bold bg-transparent border rounded-[1px] border-blue-600'>Start Quiz</Link>
            </div>
        </div>
    );
};

export default QuizStarter;