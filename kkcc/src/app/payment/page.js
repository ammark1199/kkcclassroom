"use client";
import { useState } from "react";
import { 
  HomeIcon,
  BookOpenIcon,
  BellIcon,
  ClipboardDocumentIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
  CogIcon,
  CreditCardIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  Bars3Icon,
  XMarkIcon,
  LifebuoyIcon,
  BookmarkIcon,
  CheckCircleIcon,
  LockClosedIcon
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const paymentPlans = [
  {
    id: "free",
    name: "Free Plan",
    price: "$0",
    period: "forever",
    description: "Access to basic content (Units 1-3)",
    features: [
      "First 3 units unlocked",
      "Community Q&A access",
      "Basic learning materials",
      "Email support (72hr response)"
    ],
    recommended: false,
    unitsIncluded: "Units 1-3"
  },
  {
    id: "premium",
    name: "Premium Plan",
    price: "$4.99",
    period: "month",
    description: "Full access to all course content (10 units)",
    features: [
      "All 10 units unlocked",
      "Premium video content",
      "Downloadable resources & templates",
      "Priority Q&A support",
      "Certificate of completion",
      "Weekly live Q&A sessions"
    ],
    recommended: true,
    unitsIncluded: "All 10 units"
  },
  {
    id: "annual",
    name: "Annual Premium",
    price: "$39.99",
    period: "year",
    description: "Best value - save 33% compared to monthly",
    features: [
      "Everything in Premium",
      "2 months free compared to monthly",
      "Exclusive annual bonus content",
      "Early access to new features",
      "Priority support (24hr response)"
    ],
    recommended: true,
    unitsIncluded: "All 10 units + bonuses"
  }
];

const paymentMethods = [
  {
    id: "credit",
    name: "Credit/Debit Card",
    icon: "/visama.png",
    description: "Visa, Mastercard, American Express"
  },
  {
    id: "paypal",
    name: "PayPal",
    icon: "/paypal.png",
    description: "Pay with your PayPal account"
  }
];

const SidebarItem = ({ icon: Icon, label, href, expanded }) => {
  return (
    <Link
      href={href}
      className={`flex items-center p-3 rounded-lg transition-colors hover:bg-[#F1EFE7] text-gray-700 hover:text-black`}
    >
      <Icon className="w-5 h-5" />
      {expanded && <span className="ml-3">{label}</span>}
    </Link>
  );
};

const Sidebar = ({ expanded, toggleSidebar, mobileOpen, setMobileOpen }) => {
  const navItems = [
    { icon: HomeIcon, label: "Dashboard", href: "/dashboard" },
    { icon: BookOpenIcon, label: "Courses", href: "/courses" },
    { icon: BellIcon, label: "Announcements", href: "/announcements" },
    { icon: ClipboardDocumentIcon, label: "Exams", href: "/exams" },
    { icon: QuestionMarkCircleIcon, label: "Q&A", href: "/qna" },
    { icon: BookmarkIcon, label: "Resources", href: "/resources" },
    { icon: LifebuoyIcon, label: "Help & Support", href: "/help" },
  ];

  const accountItems = [
    { icon: UserCircleIcon, label: "Profile", href: "/profile" },
    { icon: CogIcon, label: "Settings", href: "/settings" },
    { icon: CreditCardIcon, label: "Subscription Management", href: "/payment" },
  ];

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-20"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen bg-white border-r border-gray-200 z-30 transition-all duration-300 ${
          expanded ? "w-64" : "w-20"
        } ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex flex-col h-full p-4">
          <button
            onClick={toggleSidebar}
            className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#F1EFE7] ml-auto mb-4"
          >
            {expanded ? (
              <ChevronDoubleLeftIcon className="w-5 h-5 text-[#FF637A]" />
            ) : (
              <ChevronDoubleRightIcon className="w-5 h-5 text-[#FF637A]" />
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#F1EFE7] ml-auto mb-4"
          >
            {mobileOpen ? (
              <XMarkIcon className="w-5 h-5 text-[#FF637A]" />
            ) : (
              <Bars3Icon className="w-5 h-5 text-[#FF637A]" />
            )}
          </button>

          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <SidebarItem
                key={item.href}
                icon={item.icon}
                label={item.label}
                href={item.href}
                expanded={expanded}
              />
            ))}
          </nav>

          <div className="mt-auto pt-4 border-t border-gray-200">
            <p className={`text-xs text-gray-500 mb-2 ${!expanded && "hidden"}`}>
              ACCOUNT
            </p>
            {accountItems.map((item) => (
              <SidebarItem
                key={item.href}
                icon={item.icon}
                label={item.label}
                href={item.href}
                expanded={expanded}
              />
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default function PaymentPage() {
  const [expanded, setExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("premium");
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: ""
  });

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayPalCheckout = () => {
    // This would typically redirect to PayPal's checkout
    // For demo, we'll just show an alert
    alert("Redirecting to PayPal checkout...");
    // In a real implementation, you would:
    // 1. Create a PayPal order via your backend API
    // 2. Redirect to PayPal's checkout page
    // 3. Handle the return callback after payment
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === "paypal") {
      handlePayPalCheckout();
      return;
    }
    // Handle credit card payment submission
    console.log("Processing payment:", { 
      plan: paymentPlans.find(p => p.id === selectedPlan),
      paymentMethod,
      cardDetails
    });
  };

  return (
    <div className="min-h-screen bg-[#F1EFE7] font-sans text-gray-900">
      <Sidebar 
        expanded={expanded} 
        toggleSidebar={toggleSidebar}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className={`transition-all duration-300 ${expanded ? 'lg:ml-64' : 'lg:ml-20'}`}>
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center">
              <button 
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#F1EFE7] mr-2"
                onClick={() => setMobileOpen(true)}
              >
                <Bars3Icon className="w-5 h-5 text-[#FF637A]" />
              </button>
              <Link href="/" className="flex items-center">
                <Image 
                  src="/KKC_Logo.png" 
                  alt="KKC Logo" 
                  width={120} 
                  height={40} 
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            <div className="flex items-center space-x-6">
              <Link href="/donate" className="text-sm font-medium text-[#FF637A] hover:text-[#e04d65] transition">
                Donate
              </Link>
              
              <button className="text-gray-600 hover:text-black">
                <BellIcon className="w-6 h-6" />
              </button>
              
              <Link href="/account/profile" className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#FF637A] flex items-center justify-center text-white font-medium">
                  <UserCircleIcon className="w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
          >
            <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF637A] to-[#F1EFE7] flex items-center justify-center text-white text-xl font-bold">
                Choose Your Plan
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                <div className="flex justify-between items-end">
                  <div>
                    <h1 className="text-2xl font-bold text-white">Unlock Your Potential</h1>
                    <p className="text-white/90 mt-1">Select the perfect plan for your learning journey</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {paymentPlans.map((plan) => (
                  <motion.div
                    key={plan.id}
                    whileHover={{ y: plan.id === "free" ? 0 : -5 }} // No hover effect for free plan
                    className={`relative p-6 rounded-xl border-2 ${
                      plan.recommended 
                        ? "border-[#FF637A] shadow-lg ring-2 ring-[#FF637A]/20" 
                        : "border-gray-200"
                    } bg-white ${plan.id === "free" ? "opacity-90" : ""}`}
                  >
                    {plan.recommended && (
                      <div className="absolute top-0 right-0 bg-[#FF637A] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                        RECOMMENDED
                      </div>
                    )}
                    {plan.id === "free" && (
                      <div className="absolute top-0 left-0 bg-gray-200 text-gray-800 text-xs font-bold px-3 py-1 rounded-br-lg rounded-tl-lg">
                        CURRENT PLAN
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-2 text-black">{plan.name}</h3>
                    <div className="flex items-end mb-4">
                      <span className="text-3xl font-bold text-[#FF637A]">{plan.price}</span>
                      <span className="text-gray-500 ml-1">
                        {plan.period === "forever" ? "" : `/${plan.period}`}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-3">
                      <span className="text-sm font-medium text-gray-700">Includes:</span>
                      <span className="text-sm font-bold text-[#FF637A] ml-1">{plan.unitsIncluded}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircleIcon className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${
                            plan.id === "free" ? "text-gray-400" : "text-green-500"
                          }`} />
                          <span className={`text-gray-700 ${plan.id === "free" ? "text-gray-500" : ""}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => plan.id !== "free" && setSelectedPlan(plan.id)}
                      className={`w-full py-3 rounded-lg font-semibold ${
                        plan.id === "free"
                          ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                          : selectedPlan === plan.id
                            ? "bg-[#FF637A] text-white hover:bg-[#e04d65]"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      } transition`}
                      disabled={plan.id === "free"}
                    >
                      {plan.id === "free" ? "Your Current Plan" : 
                       selectedPlan === plan.id ? "Selected" : "Select Plan"}
                    </button>
                  </motion.div>
                ))}
              </div>

              {selectedPlan !== "free" && (
                <>
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-black">Payment Method</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto">
                      {paymentMethods.map((method) => (
                        <motion.div
                          key={method.id}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setPaymentMethod(method.id)}
                          className={`p-4 rounded-lg border-2 cursor-pointer ${
                            paymentMethod === method.id
                              ? "border-[#FF637A] bg-[#FF637A]/10"
                              : "border-gray-200 bg-white"
                          }`}
                        >
                          <div className="flex items-center">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                              paymentMethod === method.id ? "bg-[#FF637A]/20" : "bg-gray-100"
                            }`}>
                              <Image 
                                src={method.icon} 
                                alt={method.name} 
                                width={24} 
                                height={24} 
                                className="w-6 h-6"
                              />
                            </div>
                            <div>
                              <h4 className={`font-medium ${
                                paymentMethod === method.id ? "text-[#FF637A]" : "text-black"
                              }`}>
                                {method.name}
                              </h4>
                              <p className="text-xs text-gray-500">{method.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {paymentMethod === "credit" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="bg-white p-6 rounded-xl border border-gray-200 max-w-2xl mx-auto"
                      >
                        <h3 className="text-lg font-semibold mb-4 text-black">Card Details</h3>
                        <form onSubmit={handleSubmit}>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Card Number
                              </label>
                              <input
                                type="text"
                                name="number"
                                value={cardDetails.number}
                                onChange={handleCardChange}
                                placeholder="1234 5678 9012 3456"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FF637A] focus:border-[#FF637A]"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Cardholder Name
                              </label>
                              <input
                                type="text"
                                name="name"
                                value={cardDetails.name}
                                onChange={handleCardChange}
                                placeholder="John Doe"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FF637A] focus:border-[#FF637A]"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Expiry Date
                              </label>
                              <input
                                type="text"
                                name="expiry"
                                value={cardDetails.expiry}
                                onChange={handleCardChange}
                                placeholder="MM/YY"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FF637A] focus:border-[#FF637A]"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                CVV
                              </label>
                              <input
                                type="text"
                                name="cvv"
                                value={cardDetails.cvv}
                                onChange={handleCardChange}
                                placeholder="123"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FF637A] focus:border-[#FF637A]"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </motion.div>
                    )}

                    {paymentMethod === "paypal" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="bg-white p-6 rounded-xl border border-gray-200 max-w-2xl mx-auto text-center"
                      >
                        <div className="w-20 h-20 mx-auto bg-[#F1EFE7] rounded-full flex items-center justify-center mb-4">
                          <Image 
                            src="/paypal.png" 
                            alt="PayPal" 
                            width={40} 
                            height={40} 
                            className="w-10 h-10"
                          />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-black">Pay with PayPal</h3>
                        <p className="text-gray-600 mb-6">
                          You'll be redirected to PayPal to complete your payment securely
                        </p>
                        <button
                          onClick={handlePayPalCheckout}
                          className="px-8 py-3 bg-[#FF637A] text-white rounded-lg font-semibold hover:bg-[#e04d65] transition shadow-md"
                        >
                          Continue to PayPal
                        </button>
                        <p className="text-xs text-gray-500 mt-4">
                          By clicking this button, you agree to our Terms of Service
                        </p>
                      </motion.div>
                    )}
                  </div>

                  <div className="bg-[#F1EFE7] p-6 rounded-xl border border-gray-200 max-w-2xl mx-auto">
                    <h3 className="text-lg font-semibold mb-4 text-black">Order Summary</h3>
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Plan:</span>
                        <span className="font-medium text-black">
                          {paymentPlans.find(p => p.id === selectedPlan)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Billing:</span>
                        <span className="font-medium text-black">
                          {selectedPlan === "annual" ? "Annual (Save 33%)" : "Monthly"}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Content Access:</span>
                        <span className="font-medium text-black">
                          {paymentPlans.find(p => p.id === selectedPlan)?.unitsIncluded}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Payment Method:</span>
                        <span className="font-medium text-black">
                          {paymentMethods.find(p => p.id === paymentMethod)?.name}
                        </span>
                      </div>
                    </div>
                    <div className="border-t border-gray-300 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-black">Total:</span>
                        <span className="text-2xl font-bold text-[#FF637A]">
                          {paymentPlans.find(p => p.id === selectedPlan)?.price}
                          <span className="text-sm font-normal text-gray-500 ml-1">
                            {selectedPlan === "annual" ? "/year" : "/month"}
                          </span>
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={handleSubmit}
                      className="w-full mt-6 py-3 bg-[#FF637A] text-white rounded-lg font-semibold hover:bg-[#e04d65] transition shadow-md"
                    >
                      {paymentMethod === "paypal" ? "Continue to PayPal" : "Complete Payment"}
                    </button>
                    <p className="text-xs text-gray-500 mt-3 text-center">
                      By completing your purchase, you agree to our Terms of Service and Privacy Policy.
                      Cancel anytime.
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}