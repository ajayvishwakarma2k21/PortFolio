// eslint.config.js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // This object allows you to override or add specific rules.
    rules: {
      // Configure @typescript-eslint/no-unused-vars
      // It's usually the TypeScript version of the rule you want to configure.
      "@typescript-eslint/no-unused-vars": [
        "warn", // You can use "error" to fail the build, or "warn" to just show a warning
        {
          argsIgnorePattern: "^_", // Ignore arguments (like in catch blocks) that start with an underscore
          varsIgnorePattern: "^_", // Ignore variables that start with an underscore
          caughtErrors: "all", // Check caught errors, but they can be ignored if they start with "_" due to argsIgnorePattern
        },
      ],
      // If you're also using the base ESLint `no-unused-vars` (less common with TypeScript setups extending recommended configs),
      // you might need to disable it to prevent conflicts. Often @typescript-eslint/no-unused-vars handles this.
      // "no-unused-vars": "off" // Uncomment if you face conflicts with the base rule
    },
  },
];

export default eslintConfig;
