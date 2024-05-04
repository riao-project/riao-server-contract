import 'jasmine';
import {
	ApiResponse,
	DeleteOneResponse,
	GetManyResponse,
	GetOneResponse,
	PatchOneResponse,
	PostOneResponse,
} from '../../src';
import { User } from '../user';

const exampleUser: User = {
	id: '1',
	username: 'bobtest',
	password: 'password1234',
	email: 'bob@test.com',
};

describe('Response', () => {
	it('is backwards compatible', () => {
		const req: ApiResponse = {};
		expect(req).toBeTruthy();
	});

	it('can get many', () => {
		const req: GetManyResponse<User> = [exampleUser];

		expect(req).toBeTruthy();
	});

	it('can get one', () => {
		const req: GetOneResponse<User> = exampleUser;
		expect(req).toBeTruthy();
	});

	it('can post one', () => {
		const req: PostOneResponse<User> = exampleUser;
		expect(req).toBeTruthy();
	});

	it('can patch one', () => {
		const req: PatchOneResponse<User> = exampleUser;
		expect(req).toBeTruthy();
	});

	it('can delete one', () => {
		const req: DeleteOneResponse = null;

		expect(req).toBeNull();
	});
});
