import { DatabaseRecord, DatabaseRecordId } from '@riao/dbal';
import { DataQuery } from './data-query';

export interface Request {
	// Request params, e.g. `/users/:id`
	params?: Record<string, any>;

	// Query params, e.g. `/users?limit=10`
	query?: Record<string, any>;
}

export type GetRequest = Request;

export interface GetManyRequest<T extends DatabaseRecord = DatabaseRecord>
	extends GetRequest {
	query?: DataQuery<T>;
}

export interface GetOneRequest<T extends DatabaseRecord = DatabaseRecord>
	extends GetRequest {
	query?: DataQuery<T>;
	params: { id: DatabaseRecordId };
}

export interface PostRequest extends Request {
	body: any;
}

export interface PostOneRequest<T extends DatabaseRecord = DatabaseRecord>
	extends PostRequest {
	body: Partial<T>;
}

export interface PatchRequest extends Request {
	body: any;
}

export interface PatchOneRequest<T extends DatabaseRecord = DatabaseRecord>
	extends PatchRequest {
	params: { id: DatabaseRecordId };
	body: Partial<T>;
}

export type DeleteRequest = Request;

export interface DeleteOneRequest extends DeleteRequest {
	params: { id: DatabaseRecordId };
}

export type ApiRequest<T extends DatabaseRecord = DatabaseRecord> =
	| Request
	| GetRequest
	| GetManyRequest<T>
	| GetOneRequest
	| PostRequest
	| PostOneRequest<T>
	| PatchRequest
	| PatchOneRequest<T>
	| DeleteRequest
	| DeleteOneRequest;
