'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/Button';
import styles from './ContactForm.module.css';

interface FormState {
  name: string;
  email: string;
  service: string;
  description: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  service: 'AI & Machine Learning',
  description: '',
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setError('');
    setSubmitted(false);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError('Online submissions are not configured yet. Please email info@kashzo.com directly.');
      setIsSending(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          service: form.service,
          message: form.description,
          to_name: 'Kashzo Solutions',
        },
        {
          publicKey,
        }
      );

      setSubmitted(true);
      setForm(initialState);
    } catch (err) {
      setError('Something went wrong while sending your message. Please email us directly.');
      console.error(err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.grid}>
        <label className={styles.field}>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </label>

        <label className={styles.field}>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@company.com"
          />
        </label>
      </div>

      <div className={styles.grid}>
        <label className={styles.field}>
          Service
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
          >
            <option>AI & Machine Learning</option>
            <option>Web Development</option>
            <option>Mobile App Development</option>
            <option>Digital Marketing</option>
            <option>General Consultation</option>
          </select>
        </label>
      </div>

      <label className={styles.field}>
        Project details
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Tell us about your goals, current workflow, and what you need built."
        />
      </label>

      {submitted && (
        <div className={`${styles.status} ${styles.success}`} role="status">
          Thanks — your project brief has been captured. Our team will review it and get back to you.
        </div>
      )}

      {error && (
        <div className={`${styles.status} ${styles.error}`} role="alert">
          {error}
        </div>
      )}

      <div>
        <Button type="submit" variant="primary" size="lg" loading={isSending} className={styles.submit}>
          Send project brief
        </Button>
        <p className={styles.privacy}>By sending this form, you agree that Kashzo may use your details to respond to your enquiry.</p>
      </div>
    </form>
  );
}
