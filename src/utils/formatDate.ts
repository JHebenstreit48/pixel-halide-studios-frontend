export default function formatDate(dateString: string): string {
  if (!dateString) return '';

  const [year, month, day] = dateString.split('-').map(Number);
  
  if (!year || !month || !day) return '';

  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}