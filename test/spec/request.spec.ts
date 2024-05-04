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
			offset: 100,
		};
		expect(req).toBeTruthy();
	});

	it('can get one', () => {
		const req: GetOneRequest = {
			id: 5,
		};
		expect(req).toBeTruthy();
	});

	it('can post one', () => {
		const req: PostOneRequest<User> = {
			username: 'bob',
			password: 'password123',
		};
		expect(req).toBeTruthy();
	});

	it('can patch one', () => {
		const req: PatchOneRequest<User> = {
			id: 1,
			data: {
				username: 'bob',
				password: 'password123',
			},
		};
		expect(req).toBeTruthy();
	});

	it('can delete one', () => {
		const req: DeleteOneRequest = {
			id: 1,
		};

		expect(req).toBeTruthy();
	});
});
