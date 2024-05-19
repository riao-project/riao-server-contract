import 'jasmine';
import { SearchQuery } from '../../src';

describe('SearchQuery', () => {
	it('is backwards compatible', () => {
		const dq: SearchQuery = {};
		expect(dq).toBeTruthy();
	});
});
