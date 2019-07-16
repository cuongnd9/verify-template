function validateId(content) {
  const ids = [
    'code',
    'national_id',
    'name',
    'dob',
    'gender',
    'plan_name',
    'salary',
    'effective_date',
    'expiry_date',
    'premiums'
  ];
  const contentFormatter = content.replace(/"/g, "'").replace(/\s/g, '');
  let count = 0;
  for (const id of ids) {
    const fullId = `id='${id}'`;
    if (contentFormatter.indexOf(fullId) !== -1) {
      count += 1;
    }
  }
  return count > 0;
}

function validateLabel(content) {
  const labels = [
    'Code',
    'National ID',
    'Name',
    'Date of Birth',
    'Gender',
    'Plan',
    'Current Salary',
    'Effective Date',
    'Expiry Date',
    'Premiums'
  ];
  let count = 0;
  for (const label of labels) {
    if (content.indexOf(label) !== -1) {
      count += 1;
    }
  }
  return count > 0;
}

export function validateContent(content) {
  return validateLabel(content) && validateId(content);
}
