const formatCpf = (value: string): string => {
  if(value === undefined || value === null || value === '') {
    return '';
}
  const badchars = /[^\d]/g;
  const mask = /(\d{3})(\d{3})(\d{3})(\d{2})/;
  const cpf = value.replace(badchars, '');
  return cpf.replace(mask, '$1.$2.$3-$4');
};

export default formatCpf;
