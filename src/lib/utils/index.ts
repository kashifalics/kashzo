import { type ClassValue, clsx } from 'clsx';

/**
 * Classname helper using clsx
 * Merges conditional class names safely
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Format project category for display
 */
export function formatCategory(category: string): string {
  const categoryMap: Record<string, string> = {
    AI: 'AI & Automation',
    Web: 'Web Development',
    Mobile: 'Mobile Apps',
    Growth: 'Digital Marketing',
  };
  return categoryMap[category] || category;
}

/**
 * Format project title for URL slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Format date for display
 */
export function formatDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Truncate text to specified length
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).concat('...');
}

/**
 * Get initials from name
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
    .slice(0, 2);
}

/**
 * Capitalize first letter of string
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Convert snake_case to Title Case
 */
export function titleCase(text: string): string {
  return text
    .split('_')
    .map((word) => capitalize(word))
    .join(' ');
}

/**
 * Format budget range for display
 */
export function formatBudgetRange(range: string): string {
  const budgetMap: Record<string, string> = {
    under_25k: 'Under $25k',
    '25k_50k': '$25k - $50k',
    '50k_100k': '$50k - $100k',
    '100k_250k': '$100k - $250k',
    '250k_plus': '$250k+',
  };
  return budgetMap[range] || range;
}

/**
 * Format timeline for display
 */
export function formatTimeline(timeline: string): string {
  const timelineMap: Record<string, string> = {
    urgent: 'Less than 1 month',
    '1_2_months': '1-2 months',
    '2_3_months': '2-3 months',
    '3_6_months': '3-6 months',
    flexible: 'Flexible timeline',
  };
  return timelineMap[timeline] || timeline;
}

/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Get color by category
 */
export function getCategoryColor(category: string): string {
  const colorMap: Record<string, string> = {
    AI: 'bg-blue-100 text-blue-800 border-blue-200',
    Web: 'bg-purple-100 text-purple-800 border-purple-200',
    Mobile: 'bg-green-100 text-green-800 border-green-200',
    Growth: 'bg-orange-100 text-orange-800 border-orange-200',
  };
  return colorMap[category] || 'bg-gray-100 text-gray-800 border-gray-200';
}

/**
 * Delay promise for async operations
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Get reading time for article/content
 */
export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}
