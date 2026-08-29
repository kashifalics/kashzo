'use client';

import { FormEvent, useMemo, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const suggestions = [
  'I need an AI product for my business',
  'Can you help with a custom SaaS app?',
  'What do you build for mobile products?',
];

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'Hi, I’m Kashzo AI. I can help you scope AI products, software systems, or digital growth projects. What are you building?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const promptExamples = useMemo(() => suggestions, []);

  const sendMessage = async (messageText?: string) => {
    const trimmed = (messageText ?? input).trim();
    if (!trimmed || isSending) {
      return;
    }

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmed,
    };

    setMessages((current) => [...current, userMessage]);
    setInput('');
    setIsSending(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await response.json();
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content:
          data.answer ||
          'Thanks for the brief. We can help assess the right approach for your goals and delivery timeline.',
      };

      setMessages((current) => [...current, assistantMessage]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content:
            'I hit a temporary issue. You can still send a project brief via the contact page or email us directly.',
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendMessage();
  };

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
      <div className="border-b border-neutral-200 bg-primary-50 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-800 text-sm font-bold text-white">
            K
          </div>
          <div>
            <p className="font-semibold text-primary-900">Kashzo AI</p>
            <p className="text-xs text-neutral-600">Real-world product and AI guidance</p>
          </div>
        </div>
      </div>

      <div className="flex h-[420px] flex-col">
        <div className="flex-1 space-y-4 overflow-y-auto p-5">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  message.role === 'user'
                    ? 'bg-primary-800 text-white'
                    : 'bg-neutral-100 text-neutral-800'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="border-t border-neutral-200 bg-neutral-50 p-4">
          <div className="mb-3 flex flex-wrap gap-2">
            {promptExamples.map((example) => (
              <button
                key={example}
                type="button"
                onClick={() => void sendMessage(example)}
                className="rounded-full border border-primary-200 bg-white px-3 py-1.5 text-xs font-medium text-primary-700 hover:bg-primary-50"
              >
                {example}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Describe your project..."
              className="flex-1 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary-400"
            />
            <Button type="submit" variant="primary" size="md" loading={isSending}>
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
