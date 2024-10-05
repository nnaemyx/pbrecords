// eslint.config.mjs
import zayne from '@zayne-labs/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default zayne(
  {
    ignores: [],
  },

  // Legacy config
  [
	...compat.config({
    extends: [
      'eslint:recommended',
      // Other extends...
    ],
  }),

  // Other flat configs...
  ]

)