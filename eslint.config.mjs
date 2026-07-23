import next from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

const eslintConfig = [
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
  ...next,
  ...nextTs,
  // Desliga regras que conflitam com o Prettier (deixa formatação p/ o Prettier).
  prettier,
];

export default eslintConfig;
