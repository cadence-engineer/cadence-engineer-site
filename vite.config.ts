import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
	// Development stand-in for the Caddy reverse proxy in front of the contact form. These two
	// variables are read only here and are never embedded into the built site.
	const env = loadEnv(mode, process.cwd(), ['CONTACT_']);
	const contactProxy = env.CONTACT_API_ORIGIN
		? {
				'/api/contact': {
					target: env.CONTACT_API_ORIGIN,
					changeOrigin: true,
					rewrite: () => '/v1/contact',
					headers: { 'X-Contact-Site': env.CONTACT_SITE_SECRET ?? '' }
				}
			}
		: undefined;

	return {
		envPrefix: ['VITE_', 'PUBLIC_'],
		plugins: [tailwindcss(), sveltekit()],
		server: { proxy: contactProxy }
	};
});
