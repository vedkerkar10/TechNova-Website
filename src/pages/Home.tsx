import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cloud, Brain, Star } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    content: 'TechNova has transformed our digital infrastructure. Their innovative solutions have helped us stay ahead of the competition.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Michael Chen',
    role: 'Founder, StartupX',
    content: 'Working with TechNova was a game-changer for our startup. Their expertise in AI and cloud solutions is unmatched.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director, InnovateCo',
    content: 'The team at TechNova consistently delivers exceptional results. Their attention to detail and innovative approach sets them apart.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 dark:from-indigo-900 dark:to-purple-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
            alt="Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            Innovating Tomorrow's Technology Today
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            We transform businesses through cutting-edge technology solutions and innovative digital strategies.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:text-lg transform hover:scale-105 transition-all animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            Explore Our Services
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[Code, Cloud, Brain].map((Icon, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Icon className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {['Web Development', 'Cloud Solutions', 'AI/ML Services'][index]}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {[
                    'Custom web applications built with the latest technologies.',
                    'Scalable and secure cloud infrastructure for your needs.',
                    'Intelligent solutions powered by advanced ML algorithms.',
                  ][index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Our Clients Say
          </h2>
          <div className="relative h-[400px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute w-full transition-all duration-700 ${
                  index === activeTestimonial
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="max-w-3xl mx-auto text-center">
                  <div className="mb-8 transform hover:scale-105 transition-all duration-300">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-indigo-600 dark:bg-indigo-400 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}