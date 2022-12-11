throw new Error("@migration task: Update +server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");


// @migration task: Check imports
import type { RequestHandler } from '@sveltejs/kit';

import { userData } from '$data/data';

export const get: RequestHandler = () => ({
	body: JSON.stringify([...userData]),
	status: 200,
});
