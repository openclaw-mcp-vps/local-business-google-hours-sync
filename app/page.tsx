export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Local Business Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Sync Business Hours<br />
          <span className="text-[#58a6ff]">Across Every Platform</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Update your hours once — instantly sync to Google, Yelp, Facebook, and 20+ directories. No more outdated listings or confused customers.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Syncing — $11/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {['Google', 'Yelp', 'Facebook', '20+ More'].map((p) => (
            <div key={p} className="bg-[#161b22] border border-[#30363d] rounded-lg py-3 px-2">
              <span className="text-[#58a6ff] font-semibold text-sm">{p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] font-semibold mb-2">All-Inclusive Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$11</p>
          <p className="text-[#6e7681] text-sm mb-6">/month per location</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              'Sync to Google My Business',
              'Sync to Yelp & Facebook',
              '20+ additional directories',
              'Real-time sync status dashboard',
              'Holiday hours scheduling',
              'Multi-location support',
              'Email alerts on sync errors',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            {
              q: 'Which platforms do you sync to?',
              a: 'We sync to Google My Business, Yelp, Facebook, Apple Maps, Bing Places, and 20+ other local directories automatically.'
            },
            {
              q: 'How long does a sync take?',
              a: 'Most platforms update within minutes. Some directories like Google can take up to 24 hours to reflect changes publicly.'
            },
            {
              q: 'Can I manage multiple locations?',
              a: 'Yes. Each location is billed at $11/mo. You can add, remove, or update locations from your dashboard at any time.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} HoursSync. All rights reserved.
      </footer>
    </main>
  )
}
