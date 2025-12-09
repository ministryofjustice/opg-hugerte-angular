import { defineConfig } from "eslint/config";
import onlyWarn from "eslint-plugin-only-warn";
import tseslint from "typescript-eslint";

export default defineConfig(tseslint.configs.recommended, [{
    plugins: {
        "only-warn": onlyWarn,
    },

    languageOptions: {
        ecmaVersion: 5,
        sourceType: "module",

        parserOptions: {
            project: ["./tsconfig.json", "modules/*/tsconfig.json"],
        },
    },

    rules: {
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/member-ordering": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-shadow": "off",
        "@typescript-eslint/no-this-alias": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/prefer-for-of": "off",
        "@typescript-eslint/prefer-regexp-exec": "off",
        "no-empty": "off",
        "no-underscore-dangle": "off",
        "one-var": "off",
        "prefer-rest-params": "off",
        "prefer-spread": "off",
        "max-len": ["warn", 260],
        "indent": ["warn", 2],
    },
}]);
