import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import Button from '@/components/UI/Button';
import EmptyState from '@/components/UI/EmptyState';

const EmptyCart = () => {
    return (
        <EmptyState
            icon={ShoppingBag}
            title="Your cart is empty"
            description="Looks like you haven't added anything to your cart yet."
            action={
                <Link to="/shop">
                    <Button size="lg">Start Shopping</Button>
                </Link>
            }
        />
    );
};

export default EmptyCart;