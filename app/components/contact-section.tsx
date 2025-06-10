"use client"

import React, { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

interface StatusType {
  type: 'success' | 'error' | '';
  message: string;
}

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<StatusType>({ type: '', message: '' });

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) {
      console.error('Form reference is null');
      return;
    }

    setIsLoading(true);
    setStatus({ type: '', message: '' });

    // Get environment variables
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Debug: Log environment variables (remove in production)
    
    // console.log('Service ID:', SERVICE_ID);
    // console.log('Template ID:', TEMPLATE_ID);
    // console.log('Public Key:', PUBLIC_KEY ? 'Present' : 'Missing');

    // Check if all required credentials are present
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('Missing EmailJS credentials:', {
        SERVICE_ID: !!SERVICE_ID,
        TEMPLATE_ID: !!TEMPLATE_ID,
        PUBLIC_KEY: !!PUBLIC_KEY
      });
      setStatus({
        type: 'error',
        message: 'Email service configuration error. Please try again later.'
      });
      setIsLoading(false);
      return;
    }

    try {
      // Initialize EmailJS with your public key
      emailjs.init(PUBLIC_KEY);

      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );

      console.log('EmailJS Success:', result);
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      
      // Reset form
      form.current.reset();
      
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: `Failed to send message: ${error.text || error.message || 'Unknown error'}. Please try again or contact me directly.`
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 bg-gray-900 text-gray-100 relative">
      {/* Section title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-2">Contact Me</h1>
        <p className="text-xl text-blue-400">Get in touch</p>
        <div className="w-32 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Column - Contact Information */}
        <div className='flex flex-col mx-6 my-auto'>
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6">Let's Get In Touch</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              To get in touch with me, you can reach out to me through my email and LinkedIn. 
              You can also leave a message right here.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase">Name</h3>
                  <p className="text-white">Brian Odero</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase">Address</h3>
                  <p className="text-white">Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase">Email</h3>
                  <p className="text-white">brianodero7537@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {['LinkedIn', 'GitHub', 'Twitter', 'Instagram'].map((platform, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="px-4 py-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300"
                >
                  <span className="text-gray-300 hover:text-white">{platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Column - Contact Form */}
        <div>
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Message Me</h2>
            
            {/* Status Message */}
            {status.message && (
              <div className={`mb-6 p-4 rounded-lg ${
                status.type === 'success' 
                  ? 'bg-green-900/30 border border-green-500 text-green-300' 
                  : 'bg-red-900/30 border border-red-500 text-red-300'
              }`}>
                {status.message}
              </div>
            )}
            
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="from_name" className="block text-gray-400 mb-2">First Name *</label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-gray-400 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="reply_to" className="block text-gray-400 mb-2">Email *</label>
                <input
                  type="email"
                  id="reply_to"
                  name="reply_to"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Your email address"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Message subject"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-vertical"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 font-semibold rounded-lg transition-all duration-300 shadow-lg ${
                  isLoading
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20 hover:shadow-blue-500/30'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
    </div>
  );
}