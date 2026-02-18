import Link from 'next/link';
import { portfolio } from '@/data/portfolio';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About</h2>
            <div className="space-y-4">
              <Link
                href={portfolio.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                LinkedIn
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {portfolio.about.bio}
              </p>
            </div>

            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {portfolio.about.bio2}
              </p>
            </div>

            <div className="pt-4">
              <p className="text-gray-600">
                Feel free to reach out to discuss projects, collaboration opportunities, or any questions you might have.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
