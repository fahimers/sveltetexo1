throw new Error("@migration task: Update +server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");


// @migration task: Check imports
import type { RequestHandler } from '@sveltejs/kit';
import { userData } from '$data/data';

export const get: RequestHandler = ({ params }) => {
	const userPayload = userData.find((value) => value.id === params.user);
	if (userPayload) {
		return {
			body: JSON.stringify(userData[userData.findIndex((value) => value.id === params.user)]),
			status: 200,
		};
	}
	return {
		status: 404,
	};
};
