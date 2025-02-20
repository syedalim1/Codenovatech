
import { Link } from 'react-router-dom';
import ClientLogos from '../ServicesPage/ClientLogos';

function BlogFooter() {
  return (
    <div>
      {/* Trusted By Section */}
      <div className="mt-16 py-12 border-t border-gray-200">
        <h3 className="text-center text-gray-500 mb-8">
          Trusted by leading companies
        </h3>
        <ClientLogos />
      </div>
      {/* Newsletter CTA */}

      <div className="mt-16 bg-gray-800/50 border border-gray-700/50 hover:border-teal-500/30 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Subscribe to our newsletter for exclusive content and early access to
          new posts.
        </p>
        <div className="flex gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="px-6 py-3 bg-gray-800/50 border border-gray-700/50 hover:border-teal-500/30 text-primary rounded-full font-medium hover:bg-gray-100">
            Subscribe
          </button>
        </div>
      </div>
      {/* View All Button */}
      <div className="mt-16 text-center">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gray-800/50 border border-gray-700/50 hover:border-teal-500/30 text-white rounded-full font-medium hover:bg-secondary transition-colors"
        >
          View All Articles
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default BlogFooter