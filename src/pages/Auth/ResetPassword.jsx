import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { resetPasswordSchema } from '@/schemas/authSchema';
import { authApi } from '@/api/authApi';
import { Lock, Eye, EyeOff } from 'lucide-react';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import toast from 'react-hot-toast';

const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(resetPasswordSchema),
    });

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            await authApi.resetPassword(token, data.password);
            toast.success('Password reset successful! Please login.');
            navigate('/login');
        } catch (error) {
            toast.error(error.message || 'Failed to reset password');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h2 className="mb-2 text-2xl font-bold">Reset Password</h2>
            <p className="mb-6 text-gray-600">Enter your new password below.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                    {...register('password')}
                    type={showPassword ? 'text' : 'password'}
                    label="New Password"
                    placeholder="Enter new password"
                    leftIcon={<Lock className="h-5 w-5" />}
                    rightIcon={
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <EyeOff className="h-5 w-5" />
                            ) : (
                                <Eye className="h-5 w-5" />
                            )}
                        </button>
                    }
                    error={errors.password?.message}
                />

                <Input
                    {...register('confirmPassword')}
                    type={showConfirmPassword ? 'text' : 'password'}
                    label="Confirm Password"
                    placeholder="Confirm new password"
                    leftIcon={<Lock className="h-5 w-5" />}
                    rightIcon={
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? (
                                <EyeOff className="h-5 w-5" />
                            ) : (
                                <Eye className="h-5 w-5" />
                            )}
                        </button>
                    }
                    error={errors.confirmPassword?.message}
                />

                <Button type="submit" fullWidth loading={isLoading}>
                    Reset Password
                </Button>
            </form>
        </div>
    );
};

export default ResetPassword;