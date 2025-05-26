'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { CheckCircle } from 'lucide-react';
import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../_components/Navbar';
import Sidebar from '../../_components/Sidebar';

export default function SummaryPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();

  const amount = searchParams.get('amount') || '0';
  const type = searchParams.get('type') || 'One-Time';

  const [recycle, setRecycle] = useState(true);
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const toggleSidebar = () => setExpanded(!expanded);
  const closeSidebar = () => setMobileOpen(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

      const stopRecycle = setTimeout(() => setRecycle(false), 3500);
      const hideConfetti = setTimeout(() => setShowConfetti(false), 6000);

      return () => {
        clearTimeout(stopRecycle);
        clearTimeout(hideConfetti);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F1EFE7] font-sans text-gray-900 relative overflow-hidden">
      <Sidebar 
        expanded={expanded} 
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        toggleSidebar={toggleSidebar}
      />
      <Navbar onMenuToggle={() => setMobileOpen(!mobileOpen)} />

      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={recycle}
          numberOfPieces={250}
          gravity={0.4}
        />
      )}

      <div className={`transition-all duration-300 ${expanded ? 'lg:ml-64' : 'lg:ml-20'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-center">
          <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full p-10 text-center space-y-8 border border-[#FFDEE3]">
            <motion.div
              className="flex justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <CheckCircle className="text-[#FF637A] w-16 h-16" strokeWidth={1.5} />
            </motion.div>

            <div>
              <h1 className="text-4xl font-extrabold text-[#FF637A]">Thank You!</h1>
              <p className="text-lg text-gray-700 mt-2">
                Your {type.toLowerCase()} donation of <span className="font-bold">${amount}.00 USD</span> was successful.
              </p>
            </div>

            <div className="bg-[#FFF7F8] border border-[#FFD6DE] rounded-2xl p-6 text-left space-y-4 shadow-inner">
              <h3 className="text-xl font-semibold text-[#FF637A]">Donation Summary</h3>
              <div className="flex justify-between text-gray-700">
                <span>Donation type</span>
                <span>{type}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Amount</span>
                <span>${amount}.00 USD</span>
              </div>
              <div className="border-t border-gray-200" />
              <div className="flex justify-between font-bold text-black text-lg">
                <span>Total</span>
                <span>${amount}.00 USD</span>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              A confirmation email will be sent to you. For questions, contact{' '}
              <a href="mailto:support@kkc.com" className="underline text-[#FF637A]">
                support@kkc.com
              </a>.
            </p>

            <div className="space-y-3">
              <button
                onClick={() => router.push('/')}
                className="bg-[#FF637A] hover:bg-[#ff8496] transition-all text-white text-lg px-6 py-3 rounded-xl font-semibold shadow-md w-full"
              >
                Done
              </button>
              <button
                onClick={() => router.push('/courses')}
                className="bg-white border border-[#FF637A] text-[#FF637A] hover:bg-[#FFF0F3] transition-all text-lg px-6 py-3 rounded-xl font-semibold shadow-sm w-full"
              >
                Continue Learning
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}