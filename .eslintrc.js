module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
  rules: {
    camelcase: 'warn',
    'react/prop-types': 'warn',
    'class-methods-use-this': 'off',
    'react/prefer-stateless-function': 'warn',
    'no-plusplus': 'warn',
    'no-param-reassign': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'react/static-property-placement': 'warn',
    'prefer-destructuring': 'warn',
    'no-use-before-define': 'warn',
    'react/forbid-prop-types': 'warn',
    'react/no-array-index-key': 'warn',
    'react/require-default-props': 'warn',
    'consistent-return': 'warn',
    'no-underscore-dangle': 'warn',
    'no-unused-expressions': 'warn',
    'no-empty': [
      2,
      {
        allowEmptyCatch: true,
      },
    ],
    'react/destructuring-assignment': 'warn',
    'import/prefer-default-export': 'off',
    'no-nested-ternary': 'warn',
    'no-console': 'error',
    'global-require': 'off',
  },
};
