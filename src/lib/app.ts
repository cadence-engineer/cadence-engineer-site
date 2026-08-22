const defaultAppOrigin = 'https://app.cadence.engineer';

function normalizeAppOrigin(value: string | undefined) {
	const configuredOrigin = value?.trim() || defaultAppOrigin;
	const originWithScheme = /^[a-z][a-z\d+.-]*:\/\//i.test(configuredOrigin)
		? configuredOrigin
		: `https://${configuredOrigin.replace(/^\/+/, '')}`;

	return new URL(originWithScheme).origin;
}

export const appOrigin = normalizeAppOrigin(import.meta.env.PUBLIC_APP_ORIGIN);

export const signInUrl = `${appOrigin}/signin`;
