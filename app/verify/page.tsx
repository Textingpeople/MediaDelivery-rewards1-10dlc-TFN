'use client';

import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import { CheckCircle } from 'lucide-react';

// Only allow http/https destinations (blocks javascript:, data:, etc.)
function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

function VerifyPageContent() {
  const searchParams = useSearchParams();
  // Phone is prefilled from the `phone` URL parameter
  const [phone, setPhone] = useState<string>(() => searchParams.get('phone') ?? '');
  const [actionError, setActionError] = useState<string>('');
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Validate the link itself (phone and destination must be present; destination http/https only)
  const phoneParam = searchParams.get('phone');
  const destinationParam = searchParams.get('destination');
  let linkError = '';
  if (!phoneParam) {
    linkError = 'Invalid verification link. Phone number is missing.';
  } else if (!destinationParam) {
    linkError = 'Invalid verification link. Destination is missing.';
  } else if (!isHttpUrl(destinationParam)) {
    linkError = 'Invalid verification link. Destination must be an http or https URL.';
  }
  const error = linkError || actionError;
  const setError = setActionError;

  const handleConfirm = () => {
    const destination = searchParams.get('destination');

    if (!destination) {
      setError('Invalid verification link. Destination is missing.');
      return;
    }

    if (!isHttpUrl(destination)) {
      setError('Invalid verification link. Destination must be an http or https URL.');
      return;
    }

    if (!phone.trim()) {
      setError('Invalid verification link. Phone number is missing.');
      return;
    }

    setError('');
    setIsRedirecting(true);

    // Build redirect URL with all parameters except 'phone'
    const params = new URLSearchParams();
    
    searchParams.forEach((value, key) => {
      if (key !== 'phone') {
        params.append(key, value);
      }
    });

    // Redirect to explicit destination with parameters
    const redirectUrl = `${destination}?${params.toString()}`;
    window.location.href = redirectUrl;
  };


  return (
    <div className="min-h-screen bg-light-bg flex items-center justify-center px-4 py-8">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:bg-primary before:rounded-t-2xl">
        {/* Verification Content */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 px-2">
            Validate your number.
          </h2>
          
          {/* Phone Input Field */}
          <div className="mb-6">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              className="w-full bg-light-bg rounded-lg p-3 sm:p-4 text-lg sm:text-xl font-bold text-foreground tracking-wider text-center border-2 border-[#E5E7EB] focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm mb-4 font-medium" role="alert">{error}</p>
          )}

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            disabled={isRedirecting}
            className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 ${
              isRedirecting
                ? 'bg-gray-400 cursor-not-allowed text-white'
                : 'bg-primary hover:bg-primary-hover text-white shadow-lg hover:shadow-xl !cursor-pointer'
            }`}
          >
            {isRedirecting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Redirecting...
              </span>
            ) : (
              <span className="block sm:inline">Verify Number</span>
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="text-center pt-6 border-t border-[#E5E7EB]">
          <p className="text-xs text-[#475569]">
            Secured by Loyalty Perks Hub
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-light-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-[#475569]">Loading...</p>
        </div>
      </div>
    }>
      <VerifyPageContent />
    </Suspense>
  );
}
