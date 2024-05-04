import { DatabaseRecord, DatabaseRecordId } from '@riao/dbal';
import { DataQuery } from './data-query';

export type GetManyRequest<T extends DatabaseRecord = DatabaseRecord> =
	DataQuery<T>;

export interface GetOneRequest {
	id: DatabaseRecordId;
}

export type PostOneRequest<T extends DatabaseRecord = DatabaseRecord> =
	Partial<T>;

export interface PatchOneRequest<T extends DatabaseRecord = DatabaseRecord> {
	id: DatabaseRecordId;
	data: Partial<T>;
}

export interface DeleteOneRequest {
	id: DatabaseRecordId;
}

export type ApiRequest<T extends DatabaseRecord = DatabaseRecord> =
	| GetManyRequest<T>
	| GetOneRequest
	| PostOneRequest<T>
	| PatchOneRequest<T>
	| DeleteOneRequest;
