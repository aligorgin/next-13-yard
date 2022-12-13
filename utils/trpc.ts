import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import type { AppRouter } from '../server/routers/_app';

function getBaseUrl() {
	// browset should use relative path
	if (typeof window !== 'undefined') return '';
	// referene for vercel.com
	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL.URL}`;
	// reference for render.com
	if (process.env.RENDER_INTERNAL_HOSTNAME)
		return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;
	// assume localhost
	return `http://localhost:${process.env.POT ?? 3000}`;
}

export const trpc = createTRPCNext<AppRouter>({
	config({ ctx }) {
		return {
			links: [
				httpBatchLink({
					url: `${getBaseUrl()}/api/trpc`
				})
			]
		};
	},
	ssr: true
});
