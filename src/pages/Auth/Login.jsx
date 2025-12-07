import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/schemas/authSchema'; // Only import what you need
import useAuth from '@/hooks/useAuth'; // Make sure this is a default export in useAuth.js
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { login, isLoading } = useAuth(); // useAuth must return these

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data) => {
        await login(data);
    };

    return (
        <div className="mx-auto max-w-md rounded bg-white p-6 shadow">
            <h2 className="mb-6 text-center text-2xl font-bold">Welcome Back</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                    {...register('email')}
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    leftIcon={<Mail className="h-5 w-5" />}
                    error={errors.email?.message}
                />

                <div>
                    <Input
                        {...register('password')}
                        type={showPassword ? 'text' : 'password'}
                        label="Password"
                        placeholder="Enter your password"
                        leftIcon={<Lock className="h-5 w-5" />}
                        rightIcon={
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                        }
                        error={errors.password?.message}
                    />
                    <div className="mt-2 text-right">
                        <Link
                            to="/forgot-password"
                            className="text-sm text-primary-600 hover:underline"
                        >
                            Forgot Password?
                        </Link>
                    </div>
                </div>

                <Button type="submit" fullWidth loading={isLoading}>
                    Login
                </Button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/register" className="font-medium text-primary-600 hover:underline">
                    Sign up
                </Link>
            </p>
        </div>
    );
};

export default Login;
