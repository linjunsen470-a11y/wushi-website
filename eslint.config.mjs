import { defineConfig } from "eslint/config";
import next from "eslint-config-next";
import unusedImports from "eslint-plugin-unused-imports";
import security from "eslint-plugin-security";

export default defineConfig([
    ...next,
    {
        plugins: {
            "unused-imports": unusedImports,
            "security": security,
        },
        rules: {
            "no-unused-vars": "off",
            "unused-imports/no-unused-imports": "error",
            "unused-imports/no-unused-vars": [
                "warn",
                { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
            ],
            "security/detect-object-injection": "warn",
            "security/detect-non-literal-require": "error",
            "jsx-a11y/alt-text": "error",
            "jsx-a11y/aria-props": "error",
            "jsx-a11y/role-has-required-aria-props": "error",
        },
    }
]);
