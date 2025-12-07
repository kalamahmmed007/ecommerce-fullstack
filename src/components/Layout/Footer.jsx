import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* About */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-white">ShopHub</h3>
                        <p className="mb-4 text-sm">
                            Your one-stop destination for quality products at the best prices.
                            Shop with confidence and convenience.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="transition-colors hover:text-primary-400">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="transition-colors hover:text-primary-400">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="transition-colors hover:text-primary-400">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/about" className="transition-colors hover:text-primary-400">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop" className="transition-colors hover:text-primary-400">
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="transition-colors hover:text-primary-400">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq" className="transition-colors hover:text-primary-400">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="mb-4 font-semibold text-white">Customer Service</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/shipping" className="transition-colors hover:text-primary-400">
                                    Shipping Info
                                </Link>
                            </li>
                            <li>
                                <Link to="/returns" className="transition-colors hover:text-primary-400">
                                    Return Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="transition-colors hover:text-primary-400">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="transition-colors hover:text-primary-400">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-4 font-semibold text-white">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0" />
                                <span>123 Shopping Street, Dhaka, Bangladesh</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-5 w-5 flex-shrink-0" />
                                <span>+880 1234-567890</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-5 w-5 flex-shrink-0" />
                                <span>support@shophub.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} ShopHub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;