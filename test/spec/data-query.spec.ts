import 'jasmine';
import { DataQuery } from '../../src';

describe('DataQuery', () => {
	it('is backwards compatible', () => {
		const dq: DataQuery = {};
		expect(dq).toBeTruthy();
	});
});
