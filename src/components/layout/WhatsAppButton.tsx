import { whatsappConfig } from '@/lib/config/site-config';
import styles from './WhatsAppButton.module.css';

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${whatsappConfig.number}?text=${encodeURIComponent(whatsappConfig.message)}`;
  return <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with Kashzo Solutions on WhatsApp" className={styles.button}>
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.55 7.47L3.5 20.5l1.35-4.3A8.5 8.5 0 1 1 20.5 11.7Z"/><path d="M8.2 7.7c.2-.45.42-.46.64-.47h.55c.17 0 .37.06.48.34l.7 1.7c.08.2.04.36-.07.53l-.48.62c-.12.14-.2.28-.08.49.48.84 1.1 1.54 1.89 2.13.23.17.4.14.56-.05l.73-.84c.17-.2.37-.23.59-.14l1.62.76c.25.12.42.18.48.28.07.12.07.68-.16 1.25-.23.57-1.33 1.09-1.84 1.14-.47.05-1.07.08-2.85-.66-2.4-1-4.05-3.45-4.17-3.62-.12-.16-.99-1.32-.99-2.52 0-1.2.63-1.8.86-2.05Z"/></svg>
  </a>;
}
