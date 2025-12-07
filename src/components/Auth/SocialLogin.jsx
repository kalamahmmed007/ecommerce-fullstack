const SocialLogin = ({ onGoogle, onFacebook }) => {
    return (
        <div className="mt-4 flex flex-col gap-2">
            <button
                onClick={onGoogle}
                className="w-full rounded bg-red-600 py-2 text-white hover:bg-red-700"
            >
                Login with Google
            </button>
            <button
                onClick={onFacebook}
                className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
            >
                Login with Facebook
            </button>
        </div>
    );
};

export default SocialLogin;
