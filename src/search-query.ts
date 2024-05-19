import { DataRecord } from './data-record';

export interface GetSearchQuery<T extends DataRecord = DataRecord> {
	columns?: string[];
	order?: Record<keyof T, 'ASC' | 'DESC'>;
	limit?: number;
	offset?: number;
}

export interface SearchQuery<T extends DataRecord = DataRecord>
	extends GetSearchQuery<T> {
	where?: Partial<T>;
	withCount?: boolean;
}
