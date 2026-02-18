import { portfolio } from '@/data/portfolio';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Experience</h2>

        <div className="space-y-8">
          {portfolio.experience.map((job, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border-l-4 border-l-blue-600 hover:shadow-lg transition"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {job.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-lg mt-1">
                    {job.company}
                  </p>
                  <p className="text-gray-600 mt-3 leading-relaxed">
                    {job.description}
                  </p>
                </div>
                <div className="flex flex-col justify-start">
                  <span className="text-gray-600 font-medium">
                    {job.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
