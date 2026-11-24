'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, Building, Phone, User, Briefcase, ChevronRight, CheckCircle, Hash } from 'lucide-react';

type Step = 1 | 2 | 3;

export default function SignupPage() {
  const [step, setStep] = useState<Step>(1);
  const [companyIdError, setCompanyIdError] = useState('');
  const [formData, setFormData] = useState({
    // Step 1 — Company ID
    companyId: '',
    // Step 2 — Personal Info + Contact + Consent
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    department: '',
    smsTransactional: false,
    smsPromotional: false,
    termsAccepted: false,
  });
  const [phoneError, setPhoneError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormData({ ...formData, [e.target.name]: value });
    if (e.target.name === 'phone' || e.target.name === 'smsTransactional' || e.target.name === 'smsPromotional') {
      setPhoneError('');
    }
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3) as Step);
  const prevStep = () => setStep((s) => Math.max(s - 1, 1) as Step);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.smsTransactional || formData.smsPromotional) {
      const digits = formData.phone.replace(/\D/g, '');
      if (digits.length !== 10) {
        setPhoneError('Enter a valid mobile number to receive texts.');
        return;
      }
    }
    setPhoneError('');
    nextStep();
  };

  const steps = [
    { num: 1, label: 'Company ID' },
    { num: 2, label: 'Your Details' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-2xl font-extrabold text-foreground tracking-tight">Loyalty Perks Hub</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-[#475569] hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/about" className="text-[#475569] hover:text-primary px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="/privacy" className="text-[#475569] hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Privacy</Link>
                <Link href="/terms" className="text-[#475569] hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Terms</Link>
                <Link href="/contact" className="text-[#475569] hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                <Link href="/signup" className="bg-primary text-white hover:bg-primary-hover px-4 py-2 rounded-md text-sm font-semibold">Employee Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-light-bg py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-foreground mb-3">Employee Sign Up for Loyalty Perks Hub</h1>
          <p className="text-xl text-[#475569] max-w-2xl mx-auto">
            Join your team on the employee recognition and rewards platform your employer provides.
          </p>
        </div>
      </section>

      {/* Progress Stepper */}
      {step < 3 && (
        <div className="max-w-2xl mx-auto px-4 pt-10">
          <div className="flex items-center justify-between">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${
                    step > s.num
                      ? 'bg-secondary border-secondary text-white'
                      : step === s.num
                      ? 'bg-primary border-primary text-white'
                      : 'bg-white border-gray-300 text-gray-400'
                  }`}>
                    {step > s.num ? <CheckCircle className="w-5 h-5" /> : s.num}
                  </div>
                  <span className={`mt-2 text-xs font-medium ${step === s.num ? 'text-foreground' : 'text-gray-400'}`}>{s.label}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 mb-5 ${step > s.num ? 'bg-secondary' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Form Area */}
      <section className="max-w-2xl mx-auto px-4 py-10 pb-20">
        <div className="bg-white rounded-2xl shadow-xl border border-[#E5E7EB] p-8 md:p-12">

          {/* ── STEP 1: Company ID ── */}
          {step === 1 && (
            <form onSubmit={(e) => {
              e.preventDefault();
              const VALID_IDS = ['1234'];
              if (!VALID_IDS.includes(formData.companyId.trim())) {
                setCompanyIdError('Company ID not found. Please check with your employer or HR team.');
                return;
              }
              setCompanyIdError('');
              nextStep();
            }} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-1">Enter your Company ID</h2>
                <p className="text-[#475569] text-sm">Step 1 of 2 — Your employer provides this ID to get you started</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Company ID *</label>
                <div className="relative">
                  <Hash className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="companyId"
                    required
                    value={formData.companyId}
                    onChange={(e) => {
                      handleChange(e);
                      setCompanyIdError('');
                    }}
                    className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-lg ${
                      companyIdError ? 'border-red-400 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="e.g. 1234"
                  />
                </div>
                {companyIdError && (
                  <p className="text-red-500 text-sm mt-2 font-medium">{companyIdError}</p>
                )}
                <p className="text-xs text-gray-400 mt-2">
                  Your Company ID was provided by your employer or HR team. Contact your manager if you don&apos;t have one.
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary hover:bg-primary-hover text-white text-lg font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 transition-colors"
              >
                Continue <ChevronRight className="w-5 h-5" />
              </button>
            </form>
          )}

          {/* ── STEP 2: Personal Info + Contact + Consent ── */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-1">Your details</h2>
                <p className="text-[#475569] text-sm">Step 2 of 2 — Tell us about yourself and confirm your preferences</p>
              </div>

              {/* Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                    <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange}
                      className="block w-full pl-9 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Jane" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                  <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange}
                    className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Smith" />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Work Email *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                  <input type="email" name="email" required value={formData.email} onChange={handleChange}
                    className="block w-full pl-9 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="jane@company.com" />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mobile phone number (required only if you opt in to texts)</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    className={`block w-full pl-9 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      phoneError ? 'border-red-400 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="(555) 555-5555" />
                </div>
                {phoneError && (
                  <p className="text-red-500 text-sm mt-2 font-medium">{phoneError}</p>
                )}
              </div>

              {/* Job Title */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Job Title *</label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                  <input type="text" name="jobTitle" required value={formData.jobTitle} onChange={handleChange}
                    className="block w-full pl-9 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="e.g. Marketing Manager" />
                </div>
              </div>

              {/* Department */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Department *</label>
                <div className="relative">
                  <Building className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                  <select name="department" required value={formData.department} onChange={handleChange}
                    className="block w-full pl-9 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white">
                    <option value="">Select your department...</option>
                    <option value="sales">Sales</option>
                    <option value="marketing">Marketing</option>
                    <option value="engineering">Engineering</option>
                    <option value="operations">Operations</option>
                    <option value="hr">Human Resources</option>
                    <option value="finance">Finance</option>
                    <option value="customer_success">Customer Success</option>
                    <option value="product">Product</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* What we will text */}
              <div className="bg-light-bg border border-[#E5E7EB] rounded-lg p-5">
                <h3 className="text-sm font-semibold text-foreground mb-2">What Loyalty Perks Hub will text you</h3>
                <ul className="list-disc pl-5 text-sm text-[#475569] space-y-1">
                  <li>Recognition alerts</li>
                  <li>Milestone and anniversary notices</li>
                  <li>Points updates</li>
                  <li>Account notifications</li>
                  <li>New perks and team challenges (promotional, only if you select it below)</li>
                </ul>
              </div>

              {/* SMS Opt-in: Transactional Account Notifications */}
              <div className="bg-light-bg border border-gray-300 rounded-lg p-5">
                <div className="flex items-start">
                  <input type="checkbox" id="smsTransactional" name="smsTransactional" checked={formData.smsTransactional}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded flex-shrink-0" />
                  <label htmlFor="smsTransactional" className="ml-3 text-sm leading-relaxed text-[#475569]">
                    By checking this box, I agree to receive Transactional Account Notification SMS messages from Loyalty Perks Hub at the phone number provided. I understand I may opt out at any time by replying STOP. Reply HELP for help. Message and data rates may apply. Message frequency varies. Opting in is optional and not required to submit this form. Consent is not required as a condition of purchasing any products or services.{' '}
                    <Link href="/terms" className="text-primary hover:text-primary-hover font-medium underline hover:text-[#475569]">Terms of Service</Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-primary hover:text-primary-hover font-medium underline hover:text-[#475569]">Privacy Policy</Link>.
                  </label>
                </div>
              </div>

              {/* SMS Opt-in: Promotional Marketing */}
              <div className="bg-light-bg border border-gray-300 rounded-lg p-5">
                <div className="flex items-start">
                  <input type="checkbox" id="smsPromotional" name="smsPromotional" checked={formData.smsPromotional}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded flex-shrink-0" />
                  <label htmlFor="smsPromotional" className="ml-3 text-sm leading-relaxed text-[#475569]">
                    By checking this box, I agree to receive Promotional Marketing SMS messages from Loyalty Perks Hub at the phone number provided, including new perks and program updates. I understand I may opt out at any time by replying STOP. Reply HELP for help. Message and data rates may apply. Message frequency varies. Opting in is optional and not required to submit this form. Consent is not required as a condition of purchasing any products or services.{' '}
                    <Link href="/terms" className="text-primary hover:text-primary-hover font-medium underline hover:text-[#475569]">Terms of Service</Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-primary hover:text-primary-hover font-medium underline hover:text-[#475569]">Privacy Policy</Link>.
                  </label>
                </div>
              </div>

              {/* Terms */}
              <div className="bg-light-bg border border-gray-300 rounded-lg p-5">
                <div className="flex items-start">
                  <input type="checkbox" id="termsAccepted" name="termsAccepted" required checked={formData.termsAccepted}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded flex-shrink-0" />
                  <label htmlFor="termsAccepted" className="ml-3 text-sm leading-relaxed text-[#475569]">
                    I agree to the{' '}
                    <Link href="/terms" className="text-primary hover:text-primary-hover font-medium underline hover:text-[#475569]">Terms of Service</Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-primary hover:text-primary-hover font-medium underline hover:text-[#475569]">Privacy Policy</Link>. *
                  </label>
                </div>
              </div>

              <div className="flex gap-3">
                <button type="button" onClick={prevStep}
                  className="flex-1 py-4 border-2 border-foreground text-foreground text-lg font-semibold rounded-lg hover:bg-light-bg transition-colors">
                  Back
                </button>
                <button type="submit"
                  className="flex-1 py-4 bg-primary hover:bg-primary-hover text-white text-lg font-semibold rounded-lg shadow-lg transition-colors">
                  Submit
                </button>
              </div>
            </form>
          )}

          {/* ── STEP 3: Confirmation ── */}
          {step === 3 && (
            <div className="text-center py-8">
              <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-3">Sign Up Submitted!</h2>
              <p className="text-lg text-[#475569] mb-4 max-w-md mx-auto">
                Thanks, <strong>{formData.firstName}</strong>! Your Loyalty Perks Hub sign-up has been received.
              </p>
              <div className="bg-light-bg border border-[#E5E7EB] rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
                <p className="text-[#475569] text-sm leading-relaxed">
                  📧 <strong>We&apos;ve notified your employer</strong> (Company ID: <strong>{formData.companyId}</strong>) that you&apos;ve signed up for Loyalty Perks Hub. Once they approve your request, you&apos;ll receive an email at <strong>{formData.email}</strong> with instructions to activate your account.
                </p>
                <p className="text-[#475569] text-sm leading-relaxed mt-3">
                  ⏱ If you have questions, contact us at{' '}
                  <a href="mailto:support@loyaltyperkshub.com" className="text-primary hover:text-primary-hover underline">support@loyaltyperkshub.com</a>{' '}
                  or call <a href="tel:+19083998307" className="text-primary hover:text-primary-hover underline">(908) 399-8307</a>.
                </p>
              </div>
              <Link href="/"
                className="inline-block px-8 py-4 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-primary-hover transition-colors shadow-md">
                Back to Home
              </Link>
            </div>
          )}

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-extrabold text-white tracking-tight">Loyalty Perks Hub</span>
              <p className="text-gray-400 mt-3">
                Employee recognition and rewards, provided by your employer.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/signup" className="text-gray-400 hover:text-white">Employee Sign Up</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                <li><Link href="/sms-policy" className="text-gray-400 hover:text-white">SMS Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                <a href="mailto:support@loyaltyperkshub.com" className="text-gray-400 hover:text-white">support@loyaltyperkshub.com</a>
              </p>
              <p className="text-gray-400 mt-1">
                <a href="tel:+19083998307" className="text-gray-400 hover:text-white">(908) 399-8307</a>
              </p>
              <p className="text-gray-400 mt-2 text-sm">
                9 Johnston Dr<br />
                Bloomsbury, NJ 08804<br />
                United States
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col gap-3 text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Media Delivery Solutions LLC, d/b/a Loyalty Perks Hub. All rights reserved.</p>
            <p>
              9 Johnston Dr, Bloomsbury, NJ 08804, United States · <a href="tel:+19083998307" className="text-gray-400 hover:text-white">(908) 399-8307</a>
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link href="/terms" className="text-gray-400 hover:text-white">Terms</Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy</Link>
              <Link href="/sms-policy" className="text-gray-400 hover:text-white">SMS Policy</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
