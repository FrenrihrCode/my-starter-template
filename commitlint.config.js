export default {
  extends: ['gitmoji'],
  /**
   * [Rules] https://commitlint.js.org/#/reference-rules
   */
  rules: {
    'subject-case': () => [2, 'always', ['sentence-case']],
  },
};
/*
  'feat'           // Introducing new features
  'fix'            // Fixing a bug
  'refactor'       // Refactoring code (Not Introducing features or fix)
  'docs'           // add documents
  'test'           // Adding unit tests or e2e test
  'perf'           // Improving performance
  'revert'         // Reverting changes or commits
  'ci'             // working about CI build system
  'wip'            // Work in progress
  'chore'          // Work with configuration or other stuff
*/
