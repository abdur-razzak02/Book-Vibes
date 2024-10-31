import errorImage from './../../assets/404-status-code.png'

const ErrorPage = () => {
    return (
        <div>
            <img src={errorImage} alt="error-image" className='w-full h-full min-h-screen object-cover'/>
        </div>
    );
};

export default ErrorPage;