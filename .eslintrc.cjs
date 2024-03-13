module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    'plugin:react/recommended',
  ],
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'plugins': [
    '@stylistic',
    '@typescript-eslint',
    'no-relative-import-paths',
    'react',
  ],
  'rules': {
    '@stylistic/arrow-parens': [2, 'as-needed', { 'requireForBlockBody': true }],
    '@stylistic/block-spacing': [2, 'always'],
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/indent': ['error', 2],
    '@stylistic/jsx-indent': [2, 2],
    '@stylistic/quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    '@stylistic/semi': ['error', 'always', { 'omitLastInOneLineBlock': true}],
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    'no-empty-function': ['error', { 'allow': ['arrowFunctions'] }],
    '@typescript-eslint/no-empty-function': ['error', { 'allow': ['arrowFunctions'] }],
    'no-relative-import-paths/no-relative-import-paths': [
      'error',
      { 'allowSameFolder': true, 'rootDir': 'src', 'prefix': '@' },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  'settings': {
    'react': {
      'version': 'detect', 
    },
  },
  'root': true,
};
