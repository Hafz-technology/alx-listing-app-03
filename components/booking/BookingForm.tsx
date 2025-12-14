import React from 'react';

const InputField: React.FC<{ label: string; type: string; placeholder?: string }> = ({ label, type, placeholder }) => (
  <div>
    <label htmlFor={label} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      id={label}
      placeholder={placeholder}
      className="appearance-none border border-gray-300 rounded-lg p-3 w-full transition duration-150 ease-in-out focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
);

const BookingForm: React.FC = () => (
  <div className="bg-white p-8 shadow-2xl rounded-xl border border-gray-100">
    <h1 className="text-3xl font-bold text-gray-800 mb-8">Confirm Your Booking</h1>
    <form className="space-y-8">
      
      {/* Contact Information */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField label="First Name" type="text" placeholder="John" />
          <InputField label="Last Name" type="text" placeholder="Doe" />
          <InputField label="Email" type="email" placeholder="john.doe@example.com" />
          <InputField label="Phone Number" type="text" placeholder="(555) 123-4567" />
        </div>
      </section>

      {/* Payment Information */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Payment Information (Card)</h2>
        <div className="space-y-4">
          <InputField label="Card Number" type="text" placeholder="XXXX-XXXX-XXXX-XXXX" />
          <div className="grid grid-cols-2 gap-4">
            <InputField label="Expiration Date" type="text" placeholder="MM/YY" />
            <InputField label="CVV" type="text" placeholder="123" />
          </div>
        </div>
      </section>

      {/* Billing Address */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Billing Address</h2>
        <div className="space-y-4">
          <InputField label="Street Address" type="text" placeholder="123 Main St" />
          <div className="grid grid-cols-2 gap-4">
            <InputField label="Apt/Suite" type="text" placeholder="Apt 2B" />
            <InputField label="City" type="text" placeholder="New York" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <InputField label="State" type="text" placeholder="NY" />
            <InputField label="Zip Code" type="text" placeholder="10001" />
            <InputField label="Country" type="text" placeholder="USA" />
          </div>
        </div>
      </section>

      {/* Confirm Button */}
      <button
        type="submit"
        className="mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full text-lg shadow-md"
      >
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;


