import React from 'react';
import { Users, Target, Rocket } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const team = [
  {
    name: 'David Chen',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300',
    bio: 'With 15+ years in tech leadership, David founded TechNova with a vision to transform businesses through innovative technology solutions.'
  },
  {
    name: 'Maria Rodriguez',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300',
    bio: 'Maria brings extensive experience in cloud architecture and AI, leading our technical strategy and innovation initiatives.'
  },
  {
    name: 'James Wilson',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300',
    bio: 'James leads our design team, ensuring all our solutions deliver exceptional user experiences and visual appeal.'
  },
  {
    name: 'Sarah Park',
    role: 'Head of AI',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300',
    bio: 'Sarah specializes in machine learning and AI solutions, driving innovation in our intelligent systems development.'
  }
];

const values = [
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'We put our clients first, focusing on understanding their unique needs and delivering tailored solutions.'
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'We constantly push boundaries and embrace new technologies to solve complex challenges.'
  },
  {
    icon: Rocket,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from code quality to client communication.'
  }
];

export default function About() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-indigo-600 dark:bg-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-4xl font-bold text-white mb-6 animate-slide-up">About TechNova</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            We're a team of passionate technologists dedicated to helping businesses thrive in the digital age through innovative solutions and strategic thinking.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="inline-block p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full mx-auto object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 mb-2">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}