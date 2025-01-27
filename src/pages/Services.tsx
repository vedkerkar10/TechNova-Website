import React from 'react';
import { Code, Cloud, Brain, Lock, Globe, Phone } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices. We create responsive, scalable, and user-friendly solutions tailored to your business needs.',
    features: ['React/Next.js Development', 'E-commerce Solutions', 'Progressive Web Apps']
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure to power your digital transformation. We help businesses leverage cloud technology for improved efficiency and growth.',
    features: ['Cloud Migration', 'AWS/Azure Solutions', 'Cloud Security']
  },
  {
    icon: Brain,
    title: 'AI/ML Services',
    description: 'Cutting-edge artificial intelligence and machine learning solutions to automate processes and gain valuable insights from your data.',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision']
  },
  {
    icon: Lock,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure business continuity in an ever-evolving threat landscape.',
    features: ['Security Audits', 'Penetration Testing', 'Security Training']
  },
  {
    icon: Globe,
    title: 'Digital Strategy',
    description: 'Strategic consulting to help businesses navigate digital transformation and stay competitive in the modern marketplace.',
    features: ['Digital Transformation', 'Technology Roadmap', 'Innovation Consulting']
  },
  {
    icon: Phone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
    features: ['iOS Development', 'Android Development', 'Cross-platform Apps']
  }
];

export default function Services() {
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We offer a comprehensive suite of technology solutions to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform hover:scale-105 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700 dark:text-gray-300 transform hover:translate-x-2 transition-transform duration-300"
                    >
                      <span className="w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </AnimatedSection>
    </div>
  );
}