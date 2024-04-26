// my file /api/login.ts
import type { APIContext } from 'astro';

export async function POST({ request }: APIContext) {
  const formData = await request.formData();

  return new Response(
    JSON.stringify({
      email: formData.get('email'),
      password: formData.get('password'),
    }),
  );
}

export async function GET({ request }: APIContext) {
  return new Response(
    JSON.stringify({
      name: 'Astro',
      url: 'https://astro.build/',
    }),
  );
}