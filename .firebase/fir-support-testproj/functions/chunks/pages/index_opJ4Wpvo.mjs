import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead } from '../astro_8gCrA-3o.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body> <h1>Astro</h1> </body></html>`;
}, "/Users/alejandromarco/Desktop/Firebase-CLI-work/issues/issues_7046/deeply-dwarf/src/pages/index.astro", void 0);

const $$file = "/Users/alejandromarco/Desktop/Firebase-CLI-work/issues/issues_7046/deeply-dwarf/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
