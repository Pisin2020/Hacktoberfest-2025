import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Full Stack Developer at Google",
      image: "👩‍💻",
      rating: 5,
      content: "CodeAcademy completely transformed my career. I went from having no coding experience to landing my dream job at Google in just 8 months. The hands-on projects and supportive community made all the difference.",
      course: "Full Stack Web Development"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Data Scientist at Netflix",
      image: "👨‍🔬",
      rating: 5,
      content: "The Python Data Science course was incredible. The instructors explain complex concepts in such an easy-to-understand way. I'm now working on machine learning models that impact millions of users daily.",
      course: "Python Data Science"
    },
    {
      id: 3,
      name: "Emma Johnson",
      role: "Mobile App Developer",
      image: "👩‍🎨",
      rating: 5,
      content: "I built my first app while taking the React Native course and it's now generating $5000/month in revenue. The practical approach to learning here is unmatched anywhere else.",
      course: "React Native Mobile Apps"
    },
    {
      id: 4,
      name: "David Park",
      role: "AI Engineer at OpenAI",
      image: "👨‍🚀",
      rating: 5,
      content: "The Machine Learning course gave me the foundation I needed to pursue AI research. The projects were challenging but rewarding, and the mentorship was invaluable.",
      course: "Machine Learning Fundamentals"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Senior Frontend Developer",
      image: "👩‍💼",
      rating: 5,
      content: "As a career changer from marketing to tech, CodeAcademy made the transition smooth and enjoyable. The curriculum is up-to-date with industry standards and the career support is exceptional.",
      course: "Advanced JavaScript"
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "Software Architect",
      image: "👨‍💻",
      rating: 5,
      content: "The Algorithm Mastery course challenged me to think differently about problem-solving. It's been instrumental in my promotion to a senior technical role. Highly recommend to any serious developer.",
      course: "Algorithm Mastery"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Students Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from thousands of students who have transformed their careers with our courses.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-12 h-12 text-primary-600" />
                </div>

                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Course Badge */}
                <div className="mb-6">
                  <span className="inline-block bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.course}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-2xl mr-4"
                  >
                    {testimonial.image}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Animated Border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          {[
            { number: "98%", label: "Student Satisfaction Rate" },
            { number: "15K+", label: "Career Transformations" },
            { number: "4.9/5", label: "Average Course Rating" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 * index }}
                className="text-4xl font-bold gradient-text mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;