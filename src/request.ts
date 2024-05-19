import { DataRecord, DataRecordId } from './data-record';
import { GetSearchQuery, SearchQuery } from './search-query';

export interface Request {
	// Request params, e.g. `/users/:id`
	params?: Record<string, any>;

	// Query params, e.g. `/users?limit=10`
	query?: Record<string, any>;
}

export type GetRequest = Request;

export interface GetManyRequest<T extends DataRecord = DataRecord>
	extends GetRequest {
	query?: GetSearchQuery<T>;
}

export interface GetOneRequest<T extends DataRecord = DataRecord>
	extends GetRequest {
	query?: SearchQuery<T>;
	params: { id: DataRecordId };
}

export interface PostRequest extends Request {
	body: any;
}

export interface SearchRequest<T extends DataRecord = DataRecord>
	extends PostRequest {
	body: SearchQuery<T>;
}

export interface PostOneRequest<T extends DataRecord = DataRecord>
	extends PostRequest {
	body: Partial<T>;
}

export interface PatchRequest extends Request {
	body: any;
}

export interface PatchOneRequest<T extends DataRecord = DataRecord>
	extends PatchRequest {
	params: { id: DataRecordId };
	body: Partial<T>;
}

export type DeleteRequest = Request;

export interface DeleteOneRequest extends DeleteRequest {
	params: { id: DataRecordId };
}

export type ApiRequest<T extends DataRecord = DataRecord> =
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
