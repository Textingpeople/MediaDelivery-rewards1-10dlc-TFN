import Link from 'next/link';

export default function PrivacyPage() {
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
                <Link href="/privacy" className="text-primary font-semibold hover:text-primary-hover px-3 py-2 rounded-md text-sm font-medium">
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
          <h1 className="text-4xl font-extrabold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-lg text-[#475569]">
            Last Updated: November 24, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Introduction</h2>
          <p className="text-[#475569] mb-6">
            Media Delivery Solutions LLC, a Wyoming limited liability company, d/b/a Loyalty Perks Hub (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our employee recognition and rewards platform and website at loyaltyperkshub.com.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Information We Collect</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.1 Information You Provide</h3>
          <p className="text-[#475569] mb-4">When you sign up for our service, we may collect:</p>
          <ul className="list-disc pl-6 text-[#475569] mb-6 space-y-2">
            <li>Name and contact information (work email, phone number)</li>
            <li>Company ID and employer information</li>
            <li>Job title and department</li>
            <li>Account credentials</li>
            <li>Your SMS opt-in choices</li>
            <li>Billing information for employer accounts (processed by third-party payment processors)</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.2 Recognition and Program Data</h3>
          <p className="text-[#475569] mb-4">When you use our employee recognition platform, we collect data to power your employer&apos;s recognition program, including:</p>
          <ul className="list-disc pl-6 text-[#475569] mb-6 space-y-2">
            <li>Shout-outs, badges and recognition history</li>
            <li>Points earned and perk redemption history</li>
            <li>Birthday and work-anniversary dates used for celebrations and milestone badges</li>
            <li>Participation activity used for team engagement analytics</li>
          </ul>
          <p className="text-[#475569] mb-6">
            <strong>Your recognition history and points are private to you and your employer&apos;s program, and are never sold.</strong> Engagement analytics shown to employers are anonymous and aggregate.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.3 Information Collected Automatically</h3>
          <p className="text-[#475569] mb-4">When you use our platform, we automatically collect:</p>
          <ul className="list-disc pl-6 text-[#475569] mb-6 space-y-2">
            <li>Device information (browser type, operating system)</li>
            <li>IP address and location data</li>
            <li>Usage data (pages visited, time spent, click patterns)</li>
            <li>Platform performance and analytics data</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.4 Mobile Information Sharing</h3>
          <p className="text-[#475569] mb-6">
            <strong>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.</strong> We are committed to protecting your mobile information and will only use it for the purposes outlined in this Privacy Policy, such as providing our recognition platform and communicating with you about your account.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="text-[#475569] mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 text-[#475569] mb-6 space-y-2">
            <li>Provide and maintain our employee recognition and rewards platform</li>
            <li>Power recognition, milestone celebrations, points and employer-chosen perks</li>
            <li>Manage your account</li>
            <li>Send you service-related communications and program updates by email and, if you opt in, SMS</li>
            <li>Generate anonymous, aggregate analytics so employers can understand team engagement</li>
            <li>Detect and prevent fraud or abuse</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Information Sharing and Disclosure</h2>
          <p className="text-[#475569] mb-4">We may share your information with:</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.1 Your Employer&apos;s Program</h3>
          <p className="text-[#475569] mb-6">
            Recognition and points activity is visible within your employer&apos;s program as needed to run it. We do not sell recognition history or points to anyone.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.2 Service Providers</h3>
          <p className="text-[#475569] mb-6">
            Third-party vendors who perform services on our behalf, such as hosting, analytics, payment processing, and customer support. These providers are contractually obligated to protect your information.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.3 Business Transfers</h3>
          <p className="text-[#475569] mb-6">
            In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.4 Legal Requirements</h3>
          <p className="text-[#475569] mb-6">
            When required by law, court order, or government regulation, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.5 With Your Consent</h3>
          <p className="text-[#475569] mb-6">
            We may share your information for any other purpose with your explicit consent.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Data Security</h2>
          <p className="text-[#475569] mb-6">
            We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul className="list-disc pl-6 text-[#475569] mb-6 space-y-2">
            <li>Encryption of data in transit (HTTPS/TLS)</li>
            <li>Secure hosting infrastructure with regular security audits</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Regular security assessments and updates</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. How Long We Keep Your Information</h2>
          <p className="text-[#475569] mb-6">
            We keep your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer period is required or permitted by law. Account information is kept while your account is active and for a reasonable period thereafter for legal and business purposes.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Your Rights and Choices</h2>
          <p className="text-[#475569] mb-4">Depending on your location, you may have the following rights:</p>
          <ul className="list-disc pl-6 text-[#475569] mb-6 space-y-2">
            <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
            <li><strong>Objection:</strong> Object to certain processing of your information</li>
            <li><strong>Opt-out:</strong> Opt out of promotional communications, including promotional SMS by replying STOP</li>
          </ul>
          <p className="text-[#475569] mb-6">
            To exercise these rights, please contact us at <a href="mailto:support@loyaltyperkshub.com" className="text-primary hover:text-primary-hover">support@loyaltyperkshub.com</a>.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Cookies and Tracking Technologies</h2>
          <p className="text-[#475569] mb-6">
            We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Third-Party Links</h2>
          <p className="text-[#475569] mb-6">
            Our platform may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">10. Children&apos;s Privacy</h2>
          <p className="text-[#475569] mb-6">
            Our service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">11. California Privacy Rights</h2>
          <p className="text-[#475569] mb-6">
            If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete your information, and the right to opt-out of the sale of your personal information. We do not sell personal information.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">12. Changes to This Privacy Policy</h2>
          <p className="text-[#475569] mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">13. SMS Communications</h2>
          <p className="text-[#475569] mb-4">
            Loyalty Perks Hub sends SMS (text message) communications only to users who have opted in. Account Notifications and Promotional messages each require a separate, optional opt-in:
          </p>
          <ul className="list-disc pl-6 text-[#475569] mb-6 space-y-2">
            <li><strong>Account Notifications:</strong> recognition alerts, milestone and anniversary notices, points updates and account updates.</li>
            <li><strong>Promotional:</strong> new perks in your company&apos;s catalog and monthly team challenges.</li>
          </ul>
          <p className="text-[#475569] mb-4">
            Texts never include points balances tied to cash, account numbers or SSNs.
          </p>
          <p className="text-[#475569] mb-4">
            <strong>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.</strong>
          </p>
          <p className="text-[#475569] mb-6">
            Message and data rates may apply. Message frequency varies. To opt out of SMS messages at any time, reply <strong>STOP</strong> to any message. For help, reply <strong>HELP</strong> or contact us at <a href="mailto:support@loyaltyperkshub.com" className="text-primary hover:text-primary-hover">support@loyaltyperkshub.com</a>. To re-subscribe, opt in again through the sign-up form or contact us.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Sample Messages</h3>
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

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">14. Contact Us</h2>
          <p className="text-[#475569] mb-4">
            If you have any questions about this Privacy Policy or our privacy practices, please contact us:
          </p>
          <div className="bg-light-bg rounded-lg p-6 mb-8">
            <p className="text-[#475569] mb-2"><strong>Media Delivery Solutions LLC</strong></p>
            <p className="text-[#475569] mb-2"><strong>Address:</strong> 9 Johnston Dr, Bloomsbury, NJ 08804, United States</p>
            <p className="text-[#475569] mb-2"><strong>Phone:</strong> <a href="tel:+19083998307" className="text-primary hover:text-primary-hover">(908) 399-8307</a></p>
            <p className="text-[#475569] mb-2"><strong>Email:</strong> <a href="mailto:support@loyaltyperkshub.com" className="text-primary hover:text-primary-hover">support@loyaltyperkshub.com</a></p>
            <p className="text-[#475569]"><strong>Website:</strong> <a href="https://loyaltyperkshub.com" className="text-primary hover:text-primary-hover">loyaltyperkshub.com</a></p>
          </div>

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
