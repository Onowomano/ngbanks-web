import type { APIRoute } from 'astro';
import banks from '../../data/banks.json';

export const GET: APIRoute = () =>
  new Response(JSON.stringify(banks), {
    headers: { 'Content-Type': 'application/json' },
  });
