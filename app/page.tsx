import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero - Centered Style */}
      <section className="bg-gradient-to-b from-gray-900 to-slate-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <span className="inline-block px-4 py-1 bg-slate-700 text-slate-300 text-sm rounded-full mb-6">
            Trusted by 500+ German Retailers
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Wholesale Electronics<br />
            <span className="text-slate-400">Made Simple</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            German engineering meets wholesale efficiency. Premium tech products
            delivered to your business within 24-48 hours across Europe.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100">
              Browse Catalog
            </Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-slate-500 text-white font-semibold rounded-lg hover:bg-slate-800">
              Request Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 bg-slate-100 border-b">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900">2,800+</div>
            <div className="text-sm text-gray-500">Products</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">7 Years</div>
            <div className="text-sm text-gray-500">Experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">98%</div>
            <div className="text-sm text-gray-500">Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">24h</div>
            <div className="text-sm text-gray-500">Shipping</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">What Our Partners Say</h2>
          <p className="text-gray-600 text-center mb-12">Join hundreds of satisfied retailers across Germany</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Clicknook has transformed our supply chain. Fast delivery and excellent product quality.",
                name: "Thomas M.",
                role: "Electronics Retailer, Munich",
                rating: 5
              },
              {
                quote: "The payment on delivery option gives us flexibility. Best wholesale partner we've worked with.",
                name: "Sarah K.",
                role: "Tech Shop Owner, Berlin",
                rating: 5
              },
              {
                quote: "Reliable, professional, and always on time. Our go-to supplier for three years now.",
                name: "Michael B.",
                role: "Online Seller, Hamburg",
                rating: 5
              },
            ].map((t, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-2xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">&quot;{t.quote}&quot;</p>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories - Compact Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Product Range</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { icon: "🔊", name: "Speakers", count: "450+" },
              { icon: "🎧", name: "Audio", count: "380+" },
              { icon: "🔋", name: "Power Banks", count: "290+" },
              { icon: "⌚", name: "Wearables", count: "520+" },
              { icon: "📱", name: "Accessories", count: "680+" },
              { icon: "🔌", name: "Cables", count: "480+" },
            ].map((c, i) => (
              <Link key={i} href={`/products#${c.name.toLowerCase()}`} className="p-4 bg-white rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-1">{c.icon}</div>
                <div className="font-medium text-gray-900 text-sm">{c.name}</div>
                <div className="text-xs text-gray-500">{c.count}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why German Retailers Choose Clicknook</h2>
              <div className="space-y-6">
                {[
                  { title: "Pay on Delivery", desc: "Inspect your products before payment. No upfront risk." },
                  { title: "24-48h Delivery", desc: "Fast shipping across Germany and Europe." },
                  { title: "Bulk Discounts", desc: "Volume pricing that grows with your business." },
                  { title: "Quality Guaranteed", desc: "Every product tested before shipping." },
                ].map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{f.title}</h3>
                      <p className="text-gray-600 text-sm">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Get Started Today</h3>
              <p className="text-gray-300 mb-6">
                Join 500+ retailers who trust Clicknook for their wholesale electronics needs.
              </p>
              <ul className="space-y-3 mb-6 text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No minimum order for first purchase
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Personal account manager
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Prices in EUR, invoices included
                </li>
              </ul>
              <Link href="/contact" className="block w-full py-3 bg-white text-gray-900 font-semibold rounded-lg text-center hover:bg-gray-100">
                Request Your Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Questions? We&apos;re Here to Help</h2>
          <p className="text-slate-300 mb-6">Contact our German-speaking support team</p>
          <p className="text-slate-400">info@clicknookstore.com | Mon-Fri 9:00-18:00 CET</p>
        </div>
      </section>
    </div>
  );
}
