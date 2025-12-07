import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema } from '@/schemas/authSchema';
import { authApi } from '@/api/authApi';
import { Mail, ArrowLeft } from 'lucide-react';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import Alert from '@/components/UI/Alert';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(forgotPasswordSchema),
    });

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            await authApi.forgotPassword(data.email);
            setEmailSent(true);
            toast.success('Password reset link sent to your email');
        } catch (error) {
            toast.error(error.message || 'Failed to send reset link');
        } finally {
            setIsLoading(false);
        }
    };

    if (emailSent) {
        return (
            <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Mail className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="mb-4 text-2xl font-bold">Check Your Email</h2>
                <p className="mb-6 text-gray-600">
                    We've sent you a password reset link. Please check your email and follow
                    the instructions to reset your password.
                </p>
                <Link to="/login" className="text-primary-600 hover:underline">
                    Back to Login
                </Link>
            </div>
        );
    }

    return (
        <div>
            <Link
                to="/login"
                className="mb-6 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to Login
            </Link>

            <h2 className="mb-2 text-2xl font-bold">Forgot Password?</h2>
            <p className="mb-6 text-gray-600">
                Enter your email address and we'll send you a link to reset your password.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                    {...register('email')}
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    leftIcon={<Mail className="h-5 w-5" />}
                    error={errors.email?.message}
                />

                <Button type="submit" fullWidth loading={isLoading}>
                    Send Reset Link
                </Button>
            </form>
        </div>
    );
};

export default ForgotPassword;