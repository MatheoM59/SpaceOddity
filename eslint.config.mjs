import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // Règles supplémentaires pour repérer les erreurs courantes.
  {
    rules: {
      // Version TypeScript de no-unused-vars (comprend les types, enums, etc.)
      "@typescript-eslint/no-unused-vars": "warn", // variable / import déclaré mais jamais utilisé
      // no-undef est désactivé : TypeScript vérifie déjà les variables non définies,
      // et la règle ESLint génère des faux positifs en TS.
      "no-undef": "off",
      "prefer-const": "warn", // "let" jamais réassigné -> devrait être "const"
      "no-var": "error", // interdire "var" (utiliser let / const)
      eqeqeq: ["warn", "always"], // forcer === et !== au lieu de == et !=
      "no-console": "off", // laisser console.log autorisé (pratique pour apprendre)
    },
  },
]);

export default eslintConfig;
