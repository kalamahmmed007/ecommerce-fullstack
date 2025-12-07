import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '@/schemas/contactSchema';
import { Mail, Phone, MapPin } from 'lucide-react';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import Card from '@/components/UI/Card';
import toast from 'react-hot-toast';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data) => {
        console.log('Contact form:', data);
        toast.success('Message sent successfully!');
        reset();
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="mx-auto max-w-4xl">
                <h1 className="mb-4 text-center text-4xl font-bold">Contact Us</h1>
                <p className="mb-12 text-center text-gray-600">
                    Have a question? We'd love to hear from you.
                </p>

                <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-100">
                                    <Mail className="h-6 w-6 text-primary-600" />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-semibold">Email</h3>
                                    <p className="text-gray-600">support@shophub.com</p>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-100">
                                    <Phone className="h-6 w-6 text-primary-600" />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-semibold">Phone</h3>
                                    <p className="text-gray-600">+880 1234-567890</p>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-100">
                                    <MapPin className="h-6 w-6 text-primary-600" />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-semibold">Address</h3>
                                    <p className="text-gray-600">
                                        123 Shopping Street<br />
                                        Dhaka, Bangladesh
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <Card>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <Input
                                {...register('name')}
                                label="Name"
                                error={errors.name?.message}
                            />
                            <Input
                                {...register('email')}
                                type="email"
                                label="Email"
                                error={errors.email?.message}
                            />
                            <Input
                                {...register('subject')}
                                label="Subject"
                                error={errors.subject?.message}
                            />
                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    {...register('message')}
                                    rows="4"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>
                            <Button type="submit" fullWidth>
                                Send Message
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Contact;