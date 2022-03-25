const formatDate = (date: string | Date): string =>
  new Date(String(date)).toLocaleDateString('en-us', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

export default formatDate;
