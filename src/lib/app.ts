const defaultAppOrigin = 'https://app.cadence.engineer';

export const appOrigin = (import.meta.env.PUBLIC_APP_ORIGIN?.trim() || defaultAppOrigin).replace(
	/\/$/,
	''
);

export const signInUrl = `${appOrigin}/signin`;
