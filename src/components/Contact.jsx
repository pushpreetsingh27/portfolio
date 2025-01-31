import React, { useRef } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const formRef = useRef();

  const contactDetails = [
    {
      icon: <Phone className="text-blue-600" size={28} />,
      label: "Phone",
      value: "+91 9131969278",
    },
    {
      icon: <Mail className="text-green-600" size={28} />,
      label: "Email",
      value: "pushpreet2745@gmail.com",
    },
  ];

  const socialLinks = [
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pushpreetsingh27',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-blue-700"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/pushpreetsingh27',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-800"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    }
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_8564img', // replace with your Service ID
      'template_vti7dcf', // replace with your Template ID
      formRef.current,
      'KNwz5eQU8lqeCv8X-'  // replace with your User ID
    )
    .then(() => {
      toast.success('Email sent successfully!');
      formRef.current.reset();
    })
    .catch(() => toast.error('Failed to send email. Please try again.'));
  };

  return (
    <div id='contact' className="min-h-80 bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <Toaster />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Reach Me</h2>
            <p className="text-gray-600 max-w-md">
              Feel free to get in touch. I'm always open to discussing new projects,
              opportunities, or just having a friendly conversation.
            </p>
          </div>

          <div className="space-y-4">
            {contactDetails.map((detail, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                {detail.icon}
                <div>
                  <p className="text-gray-500 text-sm">{detail.label}</p>
                  <p className="font-semibold text-gray-800">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex space-x-4 items-center">
            <span className="text-gray-600">Connect with me:</span>
            {socialLinks.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <input type="text" name="user_name" placeholder="Your Name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" name="user_email" placeholder="Your Email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea name="message" placeholder="Your Message" rows="4" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
              <Send size={20} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;