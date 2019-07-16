export function validateContent(content) {
  const keys = [
    {
      id: 'code',
      label: 'Code'
    },
    {
      id: 'national_id',
      label: 'National ID'
    },
    {
      id: 'name',
      label: 'Name'
    },
    {
      id: 'dob',
      label: 'Date of Birth'
    },
    {
      id: 'gender',
      label: 'Gender'
    },
    {
      id: 'plan_name',
      label: 'Plan'
    },
    {
      id: 'salary',
      label: 'Current Salary'
    },
    {
      id: 'effective_date',
      label: 'Effective Date'
    },
    {
      id: 'expiry_date',
      label: 'Expiry Date'
    },
    {
      id: 'premiums',
      label: 'Premiums'
    }
  ];
  const contentFormatter = content.replace(/"/g, "'").replace(/\s/g, '');
  let count = 0;
  for (const key of keys) {
    const fullId = `id='${key.id}'`;
    if (contentFormatter.indexOf(fullId) !== -1 && content.indexOf(key.label) !== -1) {
      count += 1;
    }
  }
  return count > 0;
}
