import type { APIRoute } from 'astro';

const CDN_URL = 'https://cdn.jsdelivr.net/gh/Nigerian-Bank-Logos/ng-bank-logos@main/dist/banks_NGN.json';

export const GET: APIRoute = async () => {
  const upstream = await fetch(CDN_URL);
  const data = await upstream.json();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
};
