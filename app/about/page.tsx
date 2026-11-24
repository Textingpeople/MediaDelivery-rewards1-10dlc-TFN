import Link from 'next/link';
import { Shield, Target, Users, TrendingUp, Award, BarChart3, Heart } from 'lucide-react';

export default function AboutPage() {
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
                <Link href="/about" className="text-primary font-semibold hover:text-primary-hover px-3 py-2 rounded-md text-sm font-medium">
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

      {/* Hero Section */}
      <section className="bg-light-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-foreground mb-6">
              About Loyalty Perks Hub
            </h1>
            <p className="text-xl text-[#475569] max-w-3xl mx-auto">
              Loyalty Perks Hub is an employee recognition and rewards platform that employers provide to their teams, so great work gets noticed and celebrated.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-[#475569] mb-4">
              Loyalty Perks Hub was built around a simple idea: people do their best work when they feel seen. Too often, good work goes unnoticed until an annual review, if it is noticed at all.
            </p>
            <p className="text-lg text-[#475569] mb-4">
              We make it easy for peers and managers to recognize effort as it happens, from a quick shout-out to a work-anniversary badge. &quot;Loyalty&quot; here means employee loyalty: the connection people build with their team and their workplace.
            </p>
            <p className="text-lg text-[#475569]">
              Our goal is to make thoughtful recognition accessible to every workplace, from small teams to large enterprises, in the office or remote.
            </p>
          </div>
          <div className="bg-light-bg rounded-2xl p-8 border border-[#E5E7EB]">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Recognition-Focused</h3>
                  <p className="text-[#475569]">
                    Every feature is built around making recognition timely, genuine and easy to give and receive.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Privacy First</h3>
                  <p className="text-[#475569]">
                    Recognition history and points are private to the employee and their employer&apos;s program, and are never sold.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Built to Scale</h3>
                  <p className="text-[#475569]">
                    Start with simple shout-outs and grow into milestone celebrations, perks and team-wide participation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-light-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Recognition Matters</h2>
            <p className="text-xl text-[#475569]">
              Feeling appreciated at work changes how people show up. A timely thank-you tells someone their effort mattered, strengthens bonds between teammates and makes it easier for remote and hybrid teams to feel connected.
            </p>
          </div>

          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-foreground">How Loyalty Perks Hub Works</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-8">
              <h4 className="text-xl font-bold text-foreground mb-4">For Employers</h4>
              <ul className="space-y-3 text-[#475569]">
                <li>Provide Loyalty Perks Hub to your team and share your Company ID with employees.</li>
                <li>Choose the perks points can be redeemed for, such as extra PTO, team experiences or company swag.</li>
                <li>Enable peer-to-peer and manager-led recognition, plus birthday and work-anniversary celebrations.</li>
                <li>See anonymous, aggregate team engagement analytics.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-8">
              <h4 className="text-xl font-bold text-foreground mb-4">For Employees</h4>
              <ul className="space-y-3 text-[#475569]">
                <li>Sign up with the Company ID your employer provided.</li>
                <li>Give and receive shout-outs and badges, including milestone badges for birthdays and work anniversaries.</li>
                <li>Earn points from recognition and redeem them for perks your employer chooses.</li>
                <li>Look back on your recognition history, which stays private to you and your employer&apos;s program.</li>
                <li>Choose whether to receive SMS and email notifications.</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Peer &amp; Manager Recognition</h3>
              <p className="text-[#475569]">
                Shout-outs and badges from teammates and managers, the moment great work happens.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Milestone Celebrations</h3>
              <p className="text-[#475569]">
                Birthdays and work anniversaries are celebrated with milestone badges.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Remote &amp; Hybrid Friendly</h3>
              <p className="text-[#475569]">
                Virtual shout-outs and badges keep distributed teams connected.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Team Analytics</h3>
              <p className="text-[#475569]">
                Anonymous, aggregate engagement analytics for employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Recognize Great Work?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Sign up with the Company ID your employer provided and start giving and receiving recognition.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-primary-hover transition-colors shadow-lg"
          >
            Employee Sign Up
          </Link>
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
