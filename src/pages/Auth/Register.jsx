import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/schemas/authSchema';
import { useAuth } from '@/hooks/useAuth';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { register: registerUser, isLoading } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data) => {
        const { confirmPassword, ...userData } = data;
        await registerUser(userData);
    };

    return (
        <div>
            <h2 className="mb-6 text-center text-2xl font-bold">Create Account</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                    {...register('name')}
                    type="text"
                    label="Full Name"
                    placeholder="Enter your name"
                    leftIcon={<User className="h-5 w-5" />}
                    error={errors.name?.message}
                />

                <Input
                    {...register('email')}
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    leftIcon={<Mail className="h-5 w-5" />}
                    error={errors.email?.message}
                />

                <Input
                    {...register('password')}
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    placeholder="Create a password"
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
                    placeholder="Confirm your password"
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
                    Sign Up
                </Button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-primary-600 hover:underline">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default Register;