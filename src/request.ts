import { DatabaseRecord, DatabaseRecordId } from '@riao/dbal';
import { DataQuery } from './data-query';

export type ApiRequest<T = {}> = T;

export interface GetManyRequest<T extends DatabaseRecord = DatabaseRecord>
	extends ApiRequest {
	query: DataQuery<T>;
}

export interface GetOneRequest extends ApiRequest {
	id: DatabaseRecordId;
}

export interface PostOneRequest<T extends DatabaseRecord = DatabaseRecord>
	extends ApiRequest {
	data: Partial<T>;
}

export interface PatchOneRequest<T extends DatabaseRecord = DatabaseRecord>
	extends ApiRequest {
	id: number | string;
	data: Partial<T>;
}

export interface DeleteOneRequest extends ApiRequest {
	id: number | string;
}
