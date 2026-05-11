import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import BlogIndex from './BlogIndex'
import BlogPost from './BlogPost'
import './index.css'

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-blue-900">Illinois Insurance Guide</h1>
            <p className="text-sm text-gray-500">Your trusted guide to Illinois insurance coverage</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/blog" className="hidden sm:inline text-blue-700 font-semibold hover:text-blue-900">Blog</Link>
            <a href="tel:800-616-1418" className="hidden sm:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-bold transition text-sm">
              📞 800-616-1418
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Illinois Insurance Guide</h2>
          <p className="text-xl text-blue-200 mb-8">Your trusted source for Illinois insurance news, laws, and resources</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.usecanopy.com/c/tomlinson-and-co" target="_blank" rel="noopener noreferrer"
               className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-xl text-lg transition transform hover:scale-105">
              🚀 Get a Free Quote
            </a>
            <a href="tel:800-616-1418" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold px-8 py-4 rounded-xl text-lg transition">
              📞 Call 800-616-1418
            </a>
          </div>
        </div>
      </section>

      {/* State Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Illinois Insurance Overview</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">Illinois has a diverse insurance market. Residents need adequate coverage for home, auto, and life insurance. Working with an independent agent helps find the best rates.</p>
          </div>
        </div>
      </section>

      {/* Top Carriers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">Top Insurance Carriers in Illinois</h2>
          <p className="text-center text-gray-600 mb-10">Leading insurance companies serving Illinois residents</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-blue-900 mb-2">State Farm</h3>
          <p className="text-gray-600">State Farm offers comprehensive coverage options across Illinois with competitive rates.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Allstate</h3>
          <p className="text-gray-600">Allstate provides strong Illinois coverage with local agent support.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Progressive</h3>
          <p className="text-gray-600">Progressive is known for competitive auto insurance rates in Illinois.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Travelers</h3>
          <p className="text-gray-600">Travelers offers excellent home and auto bundles for Illinois residents.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Nationwide</h3>
          <p className="text-gray-600">Nationwide provides reliable coverage options throughout Illinois.</p>
        </div>
          </div>
        </div>
      </section>

      {/* Laws & Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Illinois Insurance Laws & Requirements</h2>
          <p className="text-gray-600 mb-8">Stay compliant with Illinois's insurance regulations</p>
          <div className="space-y-6">
            
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 text-xl">⚖️</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Auto Insurance Requirements</h4>
            <p className="text-gray-600 text-sm">Illinois requires all drivers to carry minimum liability insurance.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 text-xl">⚖️</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Homeowners Insurance</h4>
            <p className="text-gray-600 text-sm">Not legally required but required by mortgage lenders.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 text-xl">⚖️</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Workers Compensation</h4>
            <p className="text-gray-600 text-sm">Employers must carry workers comp insurance for employees.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 text-xl">⚖️</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Health Insurance</h4>
            <p className="text-gray-600 text-sm">ACA marketplace options are available for individuals.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 text-xl">⚖️</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Flood Insurance</h4>
            <p className="text-gray-600 text-sm">Recommended in flood-prone areas; not included in standard homeowners policies.</p>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* Recent News (Blog Preview) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-blue-900">Recent News & Articles</h2>
            <Link to="/blog" className="text-blue-700 font-semibold hover:text-blue-900">View all →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            
        <a href="/blog/guide-to-il-insurance" className="block bg-white rounded-xl shadow hover:shadow-md transition p-6 border border-gray-100">
          <p className="text-sm text-blue-600 mb-2">2025-01-15</p>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Complete Guide to Illinois Insurance</h3>
          <p className="text-gray-600 text-sm">Everything you need to know about insurance in Illinois.</p>
          <span className="inline-block mt-3 text-blue-700 font-semibold text-sm">Read more →</span>
        </a>
        <a href="/blog/il-auto-insurance-tips" className="block bg-white rounded-xl shadow hover:shadow-md transition p-6 border border-gray-100">
          <p className="text-sm text-blue-600 mb-2">2025-02-01</p>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Illinois Auto Insurance: Top 5 Money-Saving Tips</h3>
          <p className="text-gray-600 text-sm">Save money on your auto insurance with these proven strategies.</p>
          <span className="inline-block mt-3 text-blue-700 font-semibold text-sm">Read more →</span>
        </a>
        <a href="/blog/homeowners-insurance-il" className="block bg-white rounded-xl shadow hover:shadow-md transition p-6 border border-gray-100">
          <p className="text-sm text-blue-600 mb-2">2025-02-20</p>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Homeowners Insurance in Illinois: What You Need to Know</h3>
          <p className="text-gray-600 text-sm">Protect your biggest investment with the right Illinois homeowners insurance.</p>
          <span className="inline-block mt-3 text-blue-700 font-semibold text-sm">Read more →</span>
        </a>
          </div>
        </div>
      </section>

      {/* Insurance Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Insurance Tips for Illinois Residents</h2>
          <div className="space-y-4">
            
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
          <p className="text-gray-700">Compare at least 3 quotes before choosing Illinois insurance</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
          <p className="text-gray-700">Bundle home and auto for discounts</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
          <p className="text-gray-700">Review your coverage annually</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
          <p className="text-gray-700">Ask about all available discounts</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
          <p className="text-gray-700">Work with an independent agent for best rates</p>
        </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Better Illinois Insurance?</h2>
          <p className="text-blue-200 text-xl mb-8">Compare rates from top carriers and get the coverage you need.</p>
          <a href="https://app.usecanopy.com/c/tomlinson-and-co" target="_blank" rel="noopener noreferrer"
             className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-10 py-5 rounded-xl text-xl transition transform hover:scale-105 shadow-lg">
            🚀 Get Your Free Illinois Insurance Quote
          </a>
          <p className="mt-4 text-blue-200 text-sm">No obligation · Takes 2 minutes · Local Illinois agents available</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-3">Illinois Insurance Guide</h3>
              <p className="text-sm">Your trusted guide to Illinois insurance coverage</p>
              <p className="mt-3 text-sm">📞 <a href="tel:800-616-1418" className="hover:text-white">800-616-1418</a></p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-3">Also from Tomlinson & Co</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://tomlinsonandco.com" className="hover:text-white transition">Tomlinson & Co Insurance</a></li>
                <li><a href="https://hoinsurance.com" className="hover:text-white transition">HOInsurance.com — FL Home Specialists</a></li>
                <li><a href="https://flawc.com" className="hover:text-white transition">FLAWC.com — Florida Workers Comp</a></li>
                <li><a href="https://easycommercialinsurance.com" className="hover:text-white transition">EasyCommercialInsurance.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-sm">
            <p>© {new Date().getFullYear()} Illinois Insurance Guide — A Tomlinson & Co Resource</p>
            <p className="mt-1 text-xs">Information provided for educational purposes only. Contact a licensed agent for personalized advice.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
