'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/Button';
import styles from './ContactForm.module.css';

interface FormState {
  name: string;
  email: string;
  company: string;
  service: string;
  budgetRange: string;
  timeline: string;
  description: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  service: 'AI & Machine Learning',
  budgetRange: '',
  timeline: '',
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
          company: form.company,
          service: form.service,
          budget_range: form.budgetRange,
          timeline: form.timeline,
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
          Company
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company name"
          />
        </label>

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

      <div className={styles.grid}>
        <label className={styles.field}>
          Budget range
          <select
            name="budgetRange"
            value={form.budgetRange}
            onChange={handleChange}
          >
            <option value="">Select budget</option>
            <option value="under_25k">Under $25k</option>
            <option value="25k_50k">$25k - $50k</option>
            <option value="50k_100k">$50k - $100k</option>
            <option value="100k_250k">$100k - $250k</option>
            <option value="250k_plus">$250k+</option>
          </select>
        </label>

        <label className={styles.field}>
          Timeline
          <select
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
          >
            <option value="">Select timeline</option>
            <option value="urgent">ASAP / urgent</option>
            <option value="1_2_months">1-2 months</option>
            <option value="2_3_months">2-3 months</option>
            <option value="3_6_months">3-6 months</option>
            <option value="flexible">Flexible</option>
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
      </div>
    </form>
  );
}
