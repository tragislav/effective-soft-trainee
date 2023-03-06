module.exports = {
  '*.ts?(x)': [
    'eslint --fix',
    'stylelint --config ts.stylelintrc.json',
    () => 'tsc -p tsconfig.json --noEmit',
  ],
  '*.css': 'stylelint --config css.stylelintrc.json',
  '*': 'prettier  --ignore-unknown --write',
};
