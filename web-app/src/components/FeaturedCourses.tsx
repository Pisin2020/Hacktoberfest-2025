import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Globe, Brain, Zap, ChevronRight } from 'lucide-react';

const FeaturedCourses: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: 45623,
      price: 89.99,
      image: "🌐",
      icon: Globe,
      level: "Beginner",
      duration: "40 hours",
      category: "Web Development",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Alex Chen",
      rating: 4.8,
      students: 32156,
      price: 129.99,
      image: "🤖",
      icon: Brain,
      level: "Intermediate",
      duration: "60 hours",
      category: "AI & ML",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "React Native Mobile Apps",
      instructor: "Mike Rodriguez",
      rating: 4.7,
      students: 28945,
      price: 99.99,
      image: "📱",
      icon: Smartphone,
      level: "Intermediate",
      duration: "35 hours",
      category: "Mobile Development",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "Python Data Science",
      instructor: "Emma Wilson",
      rating: 4.9,
      students: 51234,
      price: 79.99,
      image: "📊",
      icon: Database,
      level: "Beginner",
      duration: "45 hours",
      category: "Data Science",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Advanced JavaScript",
      instructor: "Tom Anderson",
      rating: 4.8,
      students: 39876,
      price: 109.99,
      image: "⚡",
      icon: Zap,
      level: "Advanced",
      duration: "50 hours",
      category: "Programming",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 6,
      title: "Algorithm Mastery",
      instructor: "Lisa Chang",
      rating: 4.9,
      students: 25678,
      price: 149.99,
      image: "🧠",
      icon: Code,
      level: "Advanced",
      duration: "70 hours",
      category: "Computer Science",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular courses designed by industry experts to help you 
            build real-world skills and advance your career.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Course Image */}
              <div className={`relative h-48 bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                <div className="text-6xl mb-4">{course.image}</div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <course.icon className="w-6 h-6 text-white/80" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>Enroll Now</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  {course.title}
                </h3>

                <p className="text-gray-600 mb-4">by {course.instructor}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{course.students.toLocaleString()} students</span>
                  <span>{course.duration}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900">
                    ${course.price}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary text-lg px-8 py-4"
          >
            View All Courses
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCourses;