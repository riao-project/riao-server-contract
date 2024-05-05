import 'jasmine';
import {
	ApiRequest,
	DeleteOneRequest,
	GetManyRequest,
	GetOneRequest,
	PatchOneRequest,
	PostOneRequest,
} from '../../src';
import { User } from '../user';

describe('Request', () => {
	it('is backwards compatible', () => {
		const req: ApiRequest = {};
		expect(req).toBeTruthy();
	});

	it('can get many', () => {
		const req: GetManyRequest<User> = {
			query: { offset: 100 },
		};
		expect(req).toBeTruthy();
	});

	it('can get one', () => {
		const req: GetOneRequest = {
			params: { id: 5 },
		};
		expect(req).toBeTruthy();
	});

	it('can post one', () => {
		const req: PostOneRequest<User> = {
			body: {
				username: 'bob',
				password: 'password123',
			},
		};
		expect(req).toBeTruthy();
	});

	it('can patch one', () => {
		const req: PatchOneRequest<User> = {
			params: { id: 1 },
			body: {
				username: 'bob',
				password: 'password123',
			},
		};
		expect(req).toBeTruthy();
	});

	it('can delete one', () => {
		const req: DeleteOneRequest = {
			params: { id: 1 },
		};

		expect(req).toBeTruthy();
	});
});
