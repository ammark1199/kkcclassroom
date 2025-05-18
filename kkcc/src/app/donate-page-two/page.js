'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function CardDetailsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const amount = searchParams.get('amount') || '0';
  const type = searchParams.get('type') || 'One-Time';

  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const [errors, setErrors] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const [touched, setTouched] = useState({
    cardNumber: false,
    expiry: false,
    cvc: false,
  });

  const validate = () => {
    const newErrors = { cardNumber: '', expiry: '', cvc: '' };
    const cardNumClean = cardNumber.replace(/\s+/g, '');

    if (!/^\d{16}$/.test(cardNumClean)) {
      newErrors.cardNumber = 'Enter a valid 16-digit card number';
    }

    if (!/^(0[1-9]|1[0-2])\/(\d{2})$/.test(expiry)) {
      newErrors.expiry = 'Enter expiry in MM/YY format';
    }

    if (!/^\d{3,4}$/.test(cvc)) {
      newErrors.cvc = 'Enter a valid CVC (3–4 digits)';
    }

    setErrors(newErrors);
    return !newErrors.cardNumber && !newErrors.expiry && !newErrors.cvc;
  };

  const handleContinue = () => {
    const isValid = validate();
    setTouched({ cardNumber: true, expiry: true, cvc: true });

    if (isValid) {
      router.push(`/summary?amount=${amount}&type=${type}`);
    }
  };

  return (
    <div className="min-h-screen flex font-sans bg-[#F1EFE7] text-black px-24 py-20 gap-12">
      {/* LEFT - Card Details */}
      <div className="flex-1 flex flex-col justify-center space-y-10">
        <h2 className="text-5xl font-extrabold">Add card details</h2>

        <div className="space-y-6">
          {/* Card Number */}
          <div>
            <label className="block text-lg font-medium mb-1">Card number</label>
            <input
              type="text"
              placeholder="1234 1234 1234 1234"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, cardNumber: true }))}
              className={`w-full px-4 py-3 border ${
                touched.cardNumber && errors.cardNumber ? 'border-red-500' : 'border-black'
              } rounded-xl text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#FF637A]`}
            />
            {touched.cardNumber && errors.cardNumber && (
              <p className="text-sm text-red-500 mt-1">{errors.cardNumber}</p>
            )}
          </div>

          {/* Expiry & CVC */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-lg font-medium mb-1">Expiration date</label>
              <input
                type="text"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, expiry: true }))}
                className={`w-full px-4 py-3 border ${
                  touched.expiry && errors.expiry ? 'border-red-500' : 'border-black'
                } rounded-xl text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#FF637A]`}
              />
              {touched.expiry && errors.expiry && (
                <p className="text-sm text-red-500 mt-1">{errors.expiry}</p>
              )}
            </div>
            <div className="w-1/2">
              <label className="block text-lg font-medium mb-1">Security code</label>
              <input
                type="text"
                placeholder="CVC"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, cvc: true }))}
                className={`w-full px-4 py-3 border ${
                  touched.cvc && errors.cvc ? 'border-red-500' : 'border-black'
                } rounded-xl text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#FF637A]`}
              />
              {touched.cvc && errors.cvc && (
                <p className="text-sm text-red-500 mt-1">{errors.cvc}</p>
              )}
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="bg-[#FF637A] text-white text-lg px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#ff8496] transition-all w-full mt-4"
        >
          Submit Donation
        </button>
        <p className="text-sm text-gray-600 text-center mt-2">
          🔒 Transactions are secure and encrypted.
        </p>
      </div>

      {/* RIGHT - Summary */}
      <div className="w-2/5 bg-white bg-opacity-90 backdrop-blur-xl rounded-3xl shadow-xl flex flex-col justify-center p-10 space-y-6">
        <h3 className="text-3xl font-bold text-[#FF637A]">Donation Summary</h3>
        <div className="text-xl font-bold">
          CA${amount}.00{' '}
          <span className="ml-2 px-3 py-1 text-sm bg-[#FFE5E9] rounded-full font-semibold">
            {type}
          </span>
        </div>

        <div className="text-base font-medium text-gray-800">
          <div className="flex justify-between py-2">
            <span>Donation {type}</span>
            <span>CA${amount}.00</span>
          </div>
          <div className="border-t border-gray-300 my-2" />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>CA${amount}.00</span>
          </div>
        </div>

        <div className="text-sm text-gray-600 bg-[#F1EFE7] p-4 rounded-xl shadow-inner">
          Your donation will be processed in CAD and securely transferred. Tax deductibility depends on your country's laws.
        </div>
      </div>
    </div>
  );
}
