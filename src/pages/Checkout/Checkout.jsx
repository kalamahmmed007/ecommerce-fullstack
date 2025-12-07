import React from "react";
import CheckoutSteps from "../../components/Checkout/CheckoutSteps";
import ShippingForm from "../../components/Checkout/ShippingForm";
import BillingForm from "../../components/Checkout/BillingForm";
import PaymentMethod from "../../components/Checkout/PaymentMethod";
import OrderSummary from "../../components/Checkout/OrderSummary";

const Checkout = () => {
    return (
        <div className="space-y-6">
            <CheckoutSteps />
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <ShippingForm />
                    <BillingForm />
                    <PaymentMethod />
                </div>
                <div>
                    <OrderSummary />
                </div>
            </div>
        </div>
    );
};

export default Checkout;
