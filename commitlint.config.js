module.exports = {
  extends: ['@commitlint/config-conventional', 'gitmoji'],
  /**
   * [Rules] https://commitlint.js.org/#/reference-rules
   */
  rules: {
    'type-case': () => [2, 'always', ['pascal-case']],
    'subject-case': () => [2, 'always', ['sentence-case']],
  },
};
