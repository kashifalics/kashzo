'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/Button';

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
      setSubmitted(true);
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
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-neutral-700">
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-4 py-3"
            placeholder="Your name"
          />
        </label>

        <label className="block text-sm font-medium text-neutral-700">
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-4 py-3"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-neutral-700">
          Company
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-4 py-3"
            placeholder="Company name"
          />
        </label>

        <label className="block text-sm font-medium text-neutral-700">
          Service
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-4 py-3"
          >
            <option>AI & Machine Learning</option>
            <option>Web Development</option>
            <option>Mobile App Development</option>
            <option>Digital Marketing</option>
            <option>General Consultation</option>
          </select>
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-neutral-700">
          Budget range
          <select
            name="budgetRange"
            value={form.budgetRange}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-4 py-3"
          >
            <option value="">Select budget</option>
            <option value="under_25k">Under $25k</option>
            <option value="25k_50k">$25k - $50k</option>
            <option value="50k_100k">$50k - $100k</option>
            <option value="100k_250k">$100k - $250k</option>
            <option value="250k_plus">$250k+</option>
          </select>
        </label>

        <label className="block text-sm font-medium text-neutral-700">
          Timeline
          <select
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-4 py-3"
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

      <label className="block text-sm font-medium text-neutral-700">
        Project details
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
          rows={6}
          className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-4 py-3"
          placeholder="Tell us about your goals, current workflow, and what you need built."
        />
      </label>

      {submitted && (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          Thanks — your project brief has been captured. Our team will review it and get back to you.
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="pt-2">
        <Button type="submit" variant="primary" size="lg" loading={isSending} className="w-full md:w-auto">
          Send project brief
        </Button>
      </div>
    </form>
  );
}
