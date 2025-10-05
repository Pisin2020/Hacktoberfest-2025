import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    courses: [
      "Web Development",
      "Data Science", 
      "Mobile Development",
      "Machine Learning",
      "DevOps",
      "Cybersecurity"
    ],
    company: [
      "About Us",
      "Our Team",
      "Careers",
      "Press",
      "Blog",
      "Contact"
    ],
    support: [
      "Help Center",
      "Community",
      "Live Chat",
      "Course Refunds",
      "System Requirements",
      "Accessibility"
    ],
    legal: [
      "Terms of Service",
      "Privacy Policy",
      "Cookie Policy",
      "GDPR",
      "Student Agreement",
      "Instructor Agreement"
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Stay Updated with Latest Courses
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Get notified about new courses, special offers, and learning tips.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">C</span>
                  </div>
                  <span className="text-2xl font-bold gradient-text">CodeAcademy</span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Empowering the next generation of developers with cutting-edge courses 
                  and hands-on learning experiences. Join millions of students worldwide.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-400" />
                    <span className="text-gray-400">hello@codeacademy.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-400" />
                    <span className="text-gray-400">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary-400" />
                    <span className="text-gray-400">San Francisco, CA</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.button
                      key={social.label}
                      onClick={() => console.log(`Opening ${social.label}`)}
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.2, y: -2 }}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h4 className="text-white font-semibold text-lg mb-4 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + linkIndex * 0.05 }}
                    >
                      <button
                        className="text-gray-400 hover:text-primary-400 transition-colors duration-200 block hover:translate-x-1 transition-transform text-left"
                        onClick={() => console.log(`Navigate to ${link}`)}
                      >
                        {link}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between"
          >
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © 2025 CodeAcademy. All rights reserved. Made with ❤️ for developers worldwide.
            </p>
            <div className="flex space-x-6">
              <button className="text-gray-400 hover:text-primary-400 transition-colors duration-200" onClick={() => console.log('Terms clicked')}>
                Terms
              </button>
              <button className="text-gray-400 hover:text-primary-400 transition-colors duration-200" onClick={() => console.log('Privacy clicked')}>
                Privacy
              </button>
              <button className="text-gray-400 hover:text-primary-400 transition-colors duration-200" onClick={() => console.log('Cookies clicked')}>
                Cookies
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;