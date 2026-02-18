'use client';

import { useState } from 'react';
import Image from 'next/image';
import { portfolio } from '@/data/portfolio';
import { ImageZoomModal } from '@/components/common/image-zoom-modal';

export function EducationSection() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const certifications = [
    {
      title: 'AI/ML & Data Engineering 2024-25',
      issuer: '10 Academy',
      date: '2024-2025',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cer-LCsa8kKypdtzVvnCpCHVZRtDoOr4hu.png',
      skills: ['Machine Learning', 'Data Engineering', 'Python', 'TensorFlow'],
    },
    {
      title: 'Data Science Learning',
      issuer: '10 Academy',
      date: '2025',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/da-VFEZJsUMGRjyecZrZWDqIIu2wH2hLb.png',
      skills: ['Data Preprocessing', 'Exploratory Data Analysis', 'Model Evaluation', 'Data Visualization'],
    },
    {
      title: 'AI Mastermind',
      issuer: 'Generative AI Training Program',
      date: '2024',
      image: '/images/certificates/ai-mastermind.jpg',
      skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'AI Applications'],
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Education & Certifications</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>
            <div className="space-y-6">
              {portfolio.education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border-l-4 border-l-blue-600"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 font-semibold mb-3">
                    {edu.school}
                  </p>
                  <p className="text-gray-600">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer"
                  onClick={() => setSelectedImage({ src: cert.image, alt: cert.title })}
                >
                  {cert.image && (
                    <div className="relative w-full h-40 bg-gray-200">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover hover:opacity-75 transition"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-blue-600 font-semibold text-sm mb-3">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-500 text-sm mb-3">
                      {cert.date}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-500 text-xs mt-4">Click to view full certificate</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ImageZoomModal
        isOpen={!!selectedImage}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
