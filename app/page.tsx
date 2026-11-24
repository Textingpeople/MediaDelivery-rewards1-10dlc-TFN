import Link from 'next/link';
import { Star, TrendingUp, Users, Award, BarChart3, Zap, Heart, CheckCircle } from 'lucide-react';

export default function HomePage() {
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
                <Link href="/" className="text-primary font-semibold hover:text-primary-hover px-3 py-2 rounded-md text-sm font-medium">
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

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="inline-flex items-center bg-accent-soft text-foreground border border-primary/20 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Star className="w-4 h-4 mr-2 text-accent fill-accent" />
            Employee Recognition &amp; Rewards
          </div>
          <h1 className="text-5xl font-extrabold text-foreground sm:text-6xl md:text-7xl leading-tight">
            Recognize Great Work
            <span className="block text-primary">the Moment It Happens</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-[#475569]">
            Loyalty Perks Hub is the employee recognition and rewards platform your employer provides, so peers and managers can celebrate great work, milestones and team wins as they happen.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-4 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-primary-hover transition-colors shadow-md"
            >
              Employee Sign Up
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white text-foreground text-lg font-semibold rounded-lg hover:bg-light-bg transition-colors border-2 border-foreground"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Program Disclosure */}
      <section className="bg-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/80 text-lg">
            Loyalty Perks Hub is an employee recognition platform. Points have no cash value, cannot be exchanged for cash or gift cards, and are redeemable only for perks offered by your employer.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground">Everything You Need to Recognize Your Team</h2>
          <p className="mt-4 text-xl text-[#475569]">
            An employee recognition and rewards platform built for modern workplaces
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-[#E5E7EB]">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground text-center mb-3">
              Points & Recognition
            </h3>
            <p className="text-[#475569] text-center">
              Celebrate milestones, going above and beyond, peer shout-outs and manager-led recognition. Points earned are redeemable for perks your employer chooses.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-[#E5E7EB]">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground text-center mb-3">
              Engagement Analytics
            </h3>
            <p className="text-[#475569] text-center">
              Employers see anonymous, aggregate views of recognition activity and participation to understand how the team is engaging.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-[#E5E7EB]">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground text-center mb-3">
              Recognition History
            </h3>
            <p className="text-[#475569] text-center">
              Employees can look back on the shout-outs, badges and milestones they have received. Your history is private to you and your employer&apos;s program.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-light-bg py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">How Recognition Works</h2>
            <p className="mt-4 text-xl text-[#475569]">
              Simple for employers, easy for employees
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-white text-lg mr-6">1</div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Set Up Your Program</h3>
                  <p className="text-lg text-[#475569] leading-relaxed">
                    Your employer chooses how recognition works, including the perks points can be redeemed for, such as extra PTO, team experiences or company swag.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-white text-lg mr-6">2</div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Recognize Your Team</h3>
                  <p className="text-lg text-[#475569] leading-relaxed">
                    Peers and managers send shout-outs and badges for great work. Birthdays and work anniversaries are celebrated with milestone badges, and recognition earns points.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-white text-lg mr-6">3</div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Look Back and Celebrate</h3>
                  <p className="text-lg text-[#475569] leading-relaxed">
                    Employees can revisit their recognition history, and employers see anonymous, aggregate engagement analytics for the team.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-foreground rounded-2xl p-10 text-white">
              <div className="space-y-6">
                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4">
                  <div className="flex items-center">
                    <Award className="w-8 h-8 text-secondary mr-3" />
                    <div>
                      <p className="font-semibold">Milestone Badge</p>
                      <p className="text-white/60 text-sm">Teammate — Q2 Sales Leader</p>
                    </div>
                  </div>
                  <span className="text-secondary font-bold">+500 pts</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4">
                  <div className="flex items-center">
                    <Heart className="w-8 h-8 text-secondary mr-3" />
                    <div>
                      <p className="font-semibold">Peer Recognition</p>
                      <p className="text-white/60 text-sm">Peer shout-out — &quot;Team MVP&quot;</p>
                    </div>
                  </div>
                  <span className="text-secondary font-bold">+150 pts</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4">
                  <div className="flex items-center">
                    <TrendingUp className="w-8 h-8 text-secondary mr-3" />
                    <div>
                      <p className="font-semibold">Team Shout-Out</p>
                      <p className="text-white/60 text-sm">Remote and hybrid team shout-out</p>
                    </div>
                  </div>
                  <span className="text-secondary font-bold">+200 pts</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4">
                  <div className="flex items-center">
                    <Zap className="w-8 h-8 text-accent mr-3" />
                    <div>
                      <p className="font-semibold">Anniversary Badge</p>
                      <p className="text-white/60 text-sm">Teammate — 2-Year Anniversary</p>
                    </div>
                  </div>
                  <span className="text-secondary font-bold">+300 pts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground">Built for Every Workplace</h2>
          <p className="mt-4 text-xl text-[#475569]">
            Whether you&apos;re a small team or an enterprise, recognition scales with you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border-2 border-[#E5E7EB] rounded-xl p-8 hover:border-primary transition-colors">
            <h3 className="text-xl font-bold text-foreground mb-4">Small & Mid-Size Teams</h3>
            <p className="text-[#475569] mb-6">
              Build a strong culture from day one. Recognize great work, celebrate milestones and keep your team connected as you grow.
            </p>
            <ul className="space-y-2 text-[#475569]">
              <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>Easy onboarding</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>Peer-to-peer recognition</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>Birthday & work anniversary celebrations</li>
            </ul>
          </div>

          <div className="border-2 border-primary rounded-xl p-8 bg-accent-soft">
            <div className="inline-block bg-accent text-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">FOR LARGER TEAMS</div>
            <h3 className="text-xl font-bold text-foreground mb-4">Corporate & Enterprise</h3>
            <p className="text-[#475569] mb-6">
              Bring recognition to every department and location with a single employee recognition platform that scales.
            </p>
            <ul className="space-y-2 text-[#475569]">
              <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>Multi-department support</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>Manager-led recognition</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>Anonymous, aggregate team analytics</li>
            </ul>
          </div>

          <div className="border-2 border-[#E5E7EB] rounded-xl p-8 hover:border-primary transition-colors">
            <h3 className="text-xl font-bold text-foreground mb-4">Remote & Hybrid Teams</h3>
            <p className="text-[#475569] mb-6">
              Keep distributed teams connected. Bridge the gap between remote and in-office employees with virtual shout-outs and badges.
            </p>
            <ul className="space-y-2 text-[#475569]">
              <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>Virtual shoutouts & badges</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>SMS & email notifications</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>Recognition history</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-light-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">Why Employees Love Loyalty Perks Hub</h2>
            <p className="mt-4 text-xl text-[#475569]">Recognition that feels good to give and to receive</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <CheckCircle className="w-7 h-7 text-white" />, title: 'Instant Recognition', desc: 'Get recognized the moment you do something great — no waiting for annual reviews.' },
              { icon: <Award className="w-7 h-7 text-white" />, title: 'Perks That Matter', desc: 'Redeem points for perks your employer chooses, like extra PTO, team experiences or company swag.' },
              { icon: <Users className="w-7 h-7 text-white" />, title: 'Team Connection', desc: 'Celebrate wins together. Peer recognition builds stronger bonds and a more supportive culture.' },
              { icon: <TrendingUp className="w-7 h-7 text-white" />, title: 'Career Growth', desc: 'Look back on your shout-outs, badges and milestones whenever you like.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-[#475569]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-foreground rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build a Culture People Love?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Loyalty Perks Hub helps employers recognize their people and helps employees feel seen. Sign up with the Company ID your employer provided.
            </p>
            <Link
              href="/signup"
              className="inline-block px-8 py-4 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-primary-hover transition-colors shadow-lg"
            >
              Employee Sign Up
            </Link>
          </div>
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
