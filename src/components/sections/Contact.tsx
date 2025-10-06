import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionContent, Card, Button } from '../ui';
import { contactInfo } from '../../data/portfolio';
import type { ContactFormData, ValidationError, FormState } from '../../types';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    errors: []
  });

  const validateForm = (): ValidationError[] => {
    const errors: ValidationError[] = [];

    if (!formData.name.trim()) {
      errors.push({ field: 'name', message: 'Name is required' });
    }

    if (!formData.email.trim()) {
      errors.push({ field: 'email', message: 'Email is required' });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push({ field: 'email', message: 'Please enter a valid email address' });
    }

    if (!formData.message.trim()) {
      errors.push({ field: 'message', message: 'Message is required' });
    } else if (formData.message.trim().length < 10) {
      errors.push({ field: 'message', message: 'Message must be at least 10 characters long' });
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (errors.length > 0) {
      setFormState({ ...formState, errors });
      return;
    }

    setFormState({ isSubmitting: true, isSuccess: false, errors: [] });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real application, you would send the form data to your backend
      console.log('Form submitted:', formData);
      
      setFormState({ isSubmitting: false, isSuccess: true, errors: [] });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setFormState({ 
        isSubmitting: false, 
        isSuccess: false, 
        errors: [{ field: 'general', message: 'Something went wrong. Please try again.' }] 
      });
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    
    // Clear field-specific errors when user starts typing
    if (formState.errors.some(error => error.field === field)) {
      setFormState({
        ...formState,
        errors: formState.errors.filter(error => error.field !== field)
      });
    }
  };

  const getFieldError = (field: string) => {
    return formState.errors.find(error => error.field === field)?.message;
  };

  return (
    <Section id="contact" background="white">
      <SectionHeader>
        <SectionTitle gradient>{t('contact.title')}</SectionTitle>
        <SectionSubtitle>
          {t('contact.subtitle')}
        </SectionSubtitle>
      </SectionHeader>

      <SectionContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-secondary-600 mb-8">
                I'm always interested in new opportunities, whether that's a full-time position, 
                freelance project, or just a chat about technology. Don't hesitate to reach out!
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-primary-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900">Email</h4>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-secondary-600 hover:text-primary-600 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </motion.div>

              {contactInfo.phone && (
                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Phone className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">{t('contact.info.phone')}</h4>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-secondary-600 hover:text-primary-600 transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </motion.div>
              )}

              {contactInfo.location && (
                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">{t('contact.info.location')}</h4>
                    <span className="text-secondary-600">{contactInfo.location}</span>
                  </div>
                </motion.div>
              )}
            </div>

            {contactInfo.availability && (
              <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
                <p className="text-primary-800 font-medium">
                  {contactInfo.availability}
                </p>
              </div>
            )}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card padding="lg">
              {formState.isSuccess ? (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">
                    {t('contact.form.success')}
                  </h3>
                  <p className="text-secondary-600 mb-6">
                    {t('contact.form.success')}
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setFormState({ isSubmitting: false, isSuccess: false, errors: [] })}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* General error */}
                  {formState.errors.some(error => error.field === 'general') && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                      <AlertCircle className="text-red-500" size={20} />
                      <span className="text-red-700">
                        {getFieldError('general')}
                      </span>
                    </div>
                  )}

                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        getFieldError('name') ? 'border-red-500' : 'border-secondary-300'
                      }`}
                      placeholder={t('contact.form.name')}
                    />
                    {getFieldError('name') && (
                      <p className="mt-1 text-sm text-red-600">{getFieldError('name')}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        getFieldError('email') ? 'border-red-500' : 'border-secondary-300'
                      }`}
                      placeholder={t('contact.form.email')}
                    />
                    {getFieldError('email') && (
                      <p className="mt-1 text-sm text-red-600">{getFieldError('email')}</p>
                    )}
                  </div>

                  {/* Subject field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                      {t('contact.form.subject')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder={t('contact.form.subject')}
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none ${
                        getFieldError('message') ? 'border-red-500' : 'border-secondary-300'
                      }`}
                      placeholder="Tell me about your project or just say hello..."
                    />
                    {getFieldError('message') && (
                      <p className="mt-1 text-sm text-red-600">{getFieldError('message')}</p>
                    )}
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={formState.isSubmitting}
                    disabled={formState.isSubmitting}
                    className="w-full"
                  >
                    {formState.isSubmitting ? t('contact.form.sending') : (
                      <>
                        <Send size={20} className="mr-2" />
                        {t('contact.form.send')}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </SectionContent>
    </Section>
  );
};

export default Contact;
