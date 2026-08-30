import Image from 'next/image';
import styles from './BrandLockup.module.css';

interface BrandLockupProps {
  context?: 'header' | 'footer';
  preload?: boolean;
}

export function BrandLockup({ context = 'header', preload = false }: BrandLockupProps) {
  return (
    <span className={`${styles.lockup} ${styles[context]}`}>
      <span className={styles.markFrame} aria-hidden="true">
        <Image
          src="/brand/kashzo-mark.png"
          alt=""
          width={378}
          height={378}
          preload={preload}
          sizes={context === 'header' ? '44px' : '54px'}
          className={styles.mark}
        />
      </span>
      <span className={styles.wordmark}>
        <strong>KASHZO</strong>
        <span>SOLUTIONS</span>
      </span>
    </span>
  );
}
