import Link from 'next/link';

export default function SmsPolicyPage() {
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
                <Link href="/" className="text-[#475569] hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-[#475569] hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/privacy" className="text-[#475569] hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" className="text-[#475569] hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Terms
                </Link>
                <Link href="/contact" className="text-[#475569] hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
                <Link href="/signup" className="bg-primary text-white hover:bg-primary-hover px-4 py-2 rounded-md text-sm font-semibold">
                  Employee Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-light-bg py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-foreground mb-4">SMS Policy</h1>
          <p className="text-lg text-[#475569]">
            Last Updated: November 24, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Overview</h2>
          <p className="text-[#475569] mb-6">
            Media Delivery Solutions LLC, a Wyoming limited liability company, d/b/a Loyalty Perks Hub (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to responsible and transparent SMS communications. This page describes how and when we use SMS (text messaging) to communicate with users of Loyalty Perks Hub, the employee recognition and rewards platform that employers provide to their teams.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What We Send</h2>
          <p className="text-[#475569] mb-4">
            We send two types of text messages. You may opt in to each type separately:
          </p>
          <ul className="list-disc pl-6 text-[#475569] mb-6 space-y-2">
            <li><strong>Account Notifications:</strong> recognition alerts, milestone and anniversary notices, points updates and account updates.</li>
            <li><strong>Promotional:</strong> new perks in your company&apos;s catalog and monthly team challenges.</li>
          </ul>
          <p className="text-[#475569] mb-6">
            Texts never include points balances tied to cash, account numbers or SSNs.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Opt-In</h2>
          <p className="text-[#475569] mb-6">
            SMS messages are optional. During sign-up you may check one or both of two separate, unchecked boxes: one for Transactional Account Notification SMS messages and one for Promotional Marketing SMS messages. A mobile number is required only if you check either box. Opting in is not required to submit the sign-up form or to use the Loyalty Perks Hub platform.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Opt-Out</h2>
          <p className="text-[#475569] mb-6">
            You may opt out of SMS messages at any time by replying <strong>STOP</strong> to any message you receive from us. After opting out, you will no longer receive SMS messages from Loyalty Perks Hub. To re-subscribe, opt in again through the sign-up form or contact us at <a href="mailto:support@loyaltyperkshub.com" className="text-primary hover:text-primary-hover">support@loyaltyperkshub.com</a>.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Help</h2>
          <p className="text-[#475569] mb-6">
            For help with SMS messages, reply <strong>HELP</strong> to any message or contact us at:
          </p>
          <div className="bg-light-bg rounded-lg p-6 mb-8">
            <p className="text-[#475569] mb-2"><strong>Media Delivery Solutions LLC</strong></p>
            <p className="text-[#475569] mb-2"><strong>Address:</strong> 9 Johnston Dr, Bloomsbury, NJ 08804, United States</p>
            <p className="text-[#475569] mb-2"><strong>Phone:</strong> <a href="tel:+19083998307" className="text-primary hover:text-primary-hover">(908) 399-8307</a></p>
            <p className="text-[#475569] mb-2"><strong>Email:</strong> <a href="mailto:support@loyaltyperkshub.com" className="text-primary hover:text-primary-hover">support@loyaltyperkshub.com</a></p>
            <p className="text-[#475569]"><strong>Website:</strong> <a href="https://loyaltyperkshub.com" className="text-primary hover:text-primary-hover">loyaltyperkshub.com</a></p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Message &amp; Data Rates</h2>
          <p className="text-[#475569] mb-6">
            Message and data rates may apply depending on your mobile carrier and plan. Message frequency varies. Loyalty Perks Hub is not responsible for any charges incurred from your mobile carrier.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Data Privacy</h2>
          <p className="text-[#475569] mb-6">
            <strong>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.</strong> Your phone number and SMS opt-in status are used solely to deliver the text messages described in this policy and our{' '}
            <Link href="/privacy" className="text-primary hover:text-primary-hover underline">Privacy Policy</Link>.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Sample Messages</h2>
          <p className="text-[#475569] mb-4">
            Examples of the text messages you may receive from Loyalty Perks Hub if you opt in:
          </p>
          <p className="text-foreground font-semibold mb-2">Account Notifications</p>
          <ul className="space-y-3 mb-6">
            <li className="bg-light-bg rounded-lg p-4 text-[#475569]">1. Loyalty Perks Hub: You&apos;re signed up for recognition alerts from your employer&apos;s rewards program. Msg frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out.</li>
            <li className="bg-light-bg rounded-lg p-4 text-[#475569]">2. Loyalty Perks Hub: A teammate just recognized your work! See your shout-out at loyaltyperkshub.com. Reply STOP to opt out.</li>
            <li className="bg-light-bg rounded-lg p-4 text-[#475569]">3. Loyalty Perks Hub: Happy work anniversary! Your milestone badge is waiting at loyaltyperkshub.com. Reply STOP to opt out.</li>
          </ul>
          <p className="text-foreground font-semibold mb-2">Promotional</p>
          <ul className="space-y-3 mb-6">
            <li className="bg-light-bg rounded-lg p-4 text-[#475569]">4. Loyalty Perks Hub: New in your company&apos;s perks catalog: team experience days. See details at loyaltyperkshub.com. Reply STOP to opt out.</li>
            <li className="bg-light-bg rounded-lg p-4 text-[#475569]">5. Loyalty Perks Hub: This month&apos;s team challenge: give 3 peer shout-outs. Join at loyaltyperkshub.com. Reply STOP to opt out.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Carrier Disclaimer</h2>
          <p className="text-[#475569] mb-6">
            Carriers are not liable for delayed or undelivered messages. Delivery of SMS messages is subject to your mobile carrier&apos;s network availability and coverage.
          </p>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 mt-20">
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
