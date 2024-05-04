import { DatabaseRecord } from '@riao/dbal';

export interface DataQuery<T extends DatabaseRecord = DatabaseRecord> {
	limit?: number;
	offset?: number;
}
