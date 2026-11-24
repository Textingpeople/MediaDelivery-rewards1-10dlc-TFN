import Link from 'next/link';

export default function TermsPage() {
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
                <Link href="/terms" className="text-primary font-semibold hover:text-primary-hover px-3 py-2 rounded-md text-sm font-medium">
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
          <h1 className="text-4xl font-extrabold text-foreground mb-4">Terms of Service</h1>
          <p className="text-lg text-[#475569]">
            Last Updated: November 24, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-[#475569] mb-6">
            Media Delivery Solutions LLC, a Wyoming limited liability company, d/b/a Loyalty Perks Hub (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the Loyalty Perks Hub employee recognition and rewards platform (the &quot;Service&quot;). By accessing or using the Service, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not access or use the Service. These Terms apply to all users of the Service, including employers, program administrators and employees.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Description of Service</h2>
          <p className="text-[#475569] mb-6">
            Loyalty Perks Hub provides an employee recognition and rewards platform that employers make available to their teams. &quot;Loyalty&quot; refers to employee loyalty; the Service is not a customer or shopping loyalty program. The Service includes:
          </p>
          <ul className="list-disc pl-6 text-[#475569] mb-6 space-y-2">
            <li>Peer-to-peer recognition and shout-outs</li>
            <li>Manager-led recognition</li>
            <li>Birthday and work-anniversary celebrations and milestone badges</li>
            <li>Virtual shout-outs and badges for remote and hybrid teams</li>
            <li>Recognition history that employees can look back on</li>
            <li>Points earned from recognition, redeemable only for perks chosen by the employer</li>
            <li>Team engagement analytics for employers (anonymous and aggregate)</li>
            <li>SMS and email notifications</li>
          </ul>
          <p className="text-[#475569] mb-6 font-semibold">
            Loyalty Perks Hub is an employee recognition platform. Points have no cash value, cannot be exchanged for cash or gift cards, and are redeemable only for perks offered by your employer.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Account Registration and Security</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.1 Account Creation</h3>
          <p className="text-[#475569] mb-6">
            To use the Service, you must sign up with a Company ID provided by your employer and submit accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.2 Account Security</h3>
          <p className="text-[#475569] mb-6">
            You agree to immediately notify us of any unauthorized use of your account or any other breach of security. We will not be liable for any loss or damage arising from your failure to comply with these security obligations.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.3 Account Eligibility</h3>
          <p className="text-[#475569] mb-6">
            You must be at least 18 years old and have the legal capacity to enter into contracts to use the Service. By using the Service, you represent and warrant that you meet these requirements.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Acceptable Use Policy</h2>
          <p className="text-[#475569] mb-4">You agree not to use the Service to:</p>
          <ul className="list-disc pl-6 text-[#475569] mb-6 space-y-2">
            <li>Violate any applicable laws, regulations, or third-party rights</li>
            <li>Send spam, unsolicited messages, or engage in fraudulent activities</li>
            <li>Transmit malware, viruses, or other harmful code</li>
            <li>Interfere with or disrupt the Service or servers</li>
            <li>Attempt to gain unauthorized access to any part of the Service</li>
            <li>Impersonate any person or entity or misrepresent your affiliation</li>
            <li>Collect or harvest personal information without consent</li>
            <li>Post harassing, discriminatory, or inappropriate recognition content</li>
            <li>Use the Service for any illegal or unauthorized purpose</li>
            <li>Manipulate recognition or points in a fraudulent manner</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Recognition Program Rules</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.1 Program Configuration</h3>
          <p className="text-[#475569] mb-6">
            Employers are responsible for configuring their recognition program in compliance with all applicable laws and regulations, and for clearly communicating the program&apos;s earning rules and redemption policies to their employees.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.2 Employee Participation</h3>
          <p className="text-[#475569] mb-6">
            Employers must provide appropriate notice to employees before enrolling them in the program and before sending program communications. Employees choose whether to opt in to text messages.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.3 Points and Perks</h3>
          <p className="text-[#475569] mb-6">
            Points are earned through recognition within your employer&apos;s program. Points are redeemable only for the perks your employer chooses to offer, such as extra PTO, team experiences or company swag. Points are not transferable and are subject to your employer&apos;s program rules.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.4 Perk Fulfillment</h3>
          <p className="text-[#475569] mb-6">
            Employers are solely responsible for providing the perks they offer to their employees. Loyalty Perks Hub is not responsible for perks or benefits offered through an employer&apos;s program.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Fees and Payment</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6.1 Service Fees</h3>
          <p className="text-[#475569] mb-6">
            Fees for the Service, if any, will be specified in your account dashboard or service agreement. You agree to pay all applicable fees in accordance with the payment terms presented to you.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6.2 Payment Terms</h3>
          <p className="text-[#475569] mb-6">
            All fees are non-refundable unless otherwise stated. We reserve the right to change our fees at any time with reasonable notice. Continued use of the Service after fee changes constitutes acceptance of the new fees.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6.3 Late Payment</h3>
          <p className="text-[#475569] mb-6">
            If payment is not received when due, we may suspend or terminate your access to the Service. You will be responsible for all costs of collection, including reasonable attorney fees.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Intellectual Property Rights</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">7.1 Our Rights</h3>
          <p className="text-[#475569] mb-6">
            The Service and all content, features, and functionality are owned by Media Delivery Solutions LLC and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works based on the Service without our express written permission.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">7.2 Your Content</h3>
          <p className="text-[#475569] mb-6">
            You retain ownership of any content you submit through the Service, such as recognition messages. By submitting content, you grant us a worldwide, non-exclusive license to use, reproduce, and display such content solely for the purpose of providing the Service.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Service Availability and Support</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">8.1 Availability</h3>
          <p className="text-[#475569] mb-6">
            We strive to keep the Service available, but we do not guarantee uninterrupted access. We may perform scheduled maintenance with advance notice when possible.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">8.2 Support</h3>
          <p className="text-[#475569] mb-6">
            We provide email support during business hours. Response times may vary based on your service plan and the nature of your inquiry.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Data and Privacy</h2>
          <p className="text-[#475569] mb-6">
            Your use of the Service is also governed by our <Link href="/privacy" className="text-primary hover:text-primary-hover font-medium underline">Privacy Policy</Link>. By using the Service, you consent to our collection and use of information as described in the Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">10. Disclaimers and Limitations of Liability</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">10.1 Service &quot;As Is&quot;</h3>
          <p className="text-[#475569] mb-6">
            THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">10.2 Limitation of Liability</h3>
          <p className="text-[#475569] mb-6">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, MEDIA DELIVERY SOLUTIONS LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">10.3 Maximum Liability</h3>
          <p className="text-[#475569] mb-6">
            Our total liability to you for all claims arising from or related to the Service shall not exceed the amount you paid us in the twelve (12) months preceding the claim.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">11. Indemnification</h2>
          <p className="text-[#475569] mb-6">
            You agree to indemnify, defend, and hold harmless Media Delivery Solutions LLC and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable attorney fees) arising from:
          </p>
          <ul className="list-disc pl-6 text-[#475569] mb-6 space-y-2">
            <li>Your use of the Service</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any rights of another party</li>
            <li>Your violation of applicable laws or regulations</li>
            <li>Your recognition program and any perks or benefits you offer to employees</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">12. Termination</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">12.1 Termination by You</h3>
          <p className="text-[#475569] mb-6">
            You may terminate your account at any time by contacting us. Upon termination, your right to use the Service will immediately cease.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">12.2 Termination by Us</h3>
          <p className="text-[#475569] mb-6">
            We may suspend or terminate your access to the Service at any time, with or without cause, with or without notice. Reasons for termination may include violation of these Terms, non-payment, or any conduct that we believe is harmful to other users or the Service.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">13. Dispute Resolution</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">13.1 Informal Resolution</h3>
          <p className="text-[#475569] mb-6">
            Before filing a claim, you agree to contact us and attempt to resolve the dispute informally by sending a written notice describing the dispute and your proposed resolution.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">13.2 Arbitration</h3>
          <p className="text-[#475569] mb-6">
            If we cannot resolve the dispute informally, any dispute arising from these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">13.3 Class Action Waiver</h3>
          <p className="text-[#475569] mb-6">
            You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">14. General Provisions</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">14.1 Governing Law</h3>
          <p className="text-[#475569] mb-6">
            These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">14.2 Entire Agreement</h3>
          <p className="text-[#475569] mb-6">
            These Terms, together with our Privacy Policy, constitute the entire agreement between you and Media Delivery Solutions LLC regarding the Service and supersede all prior agreements.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">14.3 Severability</h3>
          <p className="text-[#475569] mb-6">
            If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">15. Changes to Terms</h2>
          <p className="text-[#475569] mb-6">
            We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the &quot;Last Updated&quot; date. Your continued use of the Service after changes become effective constitutes acceptance of the modified Terms.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">16. SMS Communications Policy</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">16.1 Overview</h3>
          <p className="text-[#475569] mb-6">
            Loyalty Perks Hub is committed to responsible and transparent SMS communications. This section describes how and when we use SMS (text messaging) to communicate with our users.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">16.2 What We Send</h3>
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

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">16.3 Opt-In</h3>
          <p className="text-[#475569] mb-6">
            SMS messages are optional. During sign-up you may check one or both of two separate, unchecked boxes: one for Transactional Account Notification SMS messages and one for Promotional Marketing SMS messages. A mobile number is required only if you check either box. Opting in is not required to submit the sign-up form or to use the Loyalty Perks Hub platform.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">16.4 Opt-Out</h3>
          <p className="text-[#475569] mb-6">
            You may opt out of SMS messages at any time by replying <strong>STOP</strong> to any message you receive from us. After opting out, you will no longer receive SMS messages from Loyalty Perks Hub. To re-subscribe, opt in again through the sign-up form or contact us at <a href="mailto:support@loyaltyperkshub.com" className="text-primary hover:text-primary-hover">support@loyaltyperkshub.com</a>.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">16.5 Help</h3>
          <p className="text-[#475569] mb-6">
            For help with SMS messages, reply <strong>HELP</strong> to any message or contact us at <a href="mailto:support@loyaltyperkshub.com" className="text-primary hover:text-primary-hover">support@loyaltyperkshub.com</a> or <a href="tel:+19083998307" className="text-primary hover:text-primary-hover">(908) 399-8307</a>.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">16.6 Message &amp; Data Rates</h3>
          <p className="text-[#475569] mb-6">
            Message and data rates may apply depending on your mobile carrier and plan. Message frequency varies. Loyalty Perks Hub is not responsible for any charges incurred from your mobile carrier.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">16.7 Data Privacy</h3>
          <p className="text-[#475569] mb-6">
            <strong>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.</strong> Your phone number and SMS opt-in status are used solely to deliver the text messages described in this section and our{' '}
            <Link href="/privacy" className="text-primary hover:text-primary-hover underline">Privacy Policy</Link>.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">16.8 Sample Messages</h3>
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

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">16.9 Carrier Disclaimer</h3>
          <p className="text-[#475569] mb-6">
            Carriers are not liable for delayed or undelivered messages. Delivery of SMS messages is subject to your mobile carrier&apos;s network availability and coverage.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">17. Contact Information</h2>
          <p className="text-[#475569] mb-4">
            If you have any questions about these Terms, please contact us:
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
