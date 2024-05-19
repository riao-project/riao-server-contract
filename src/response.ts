import { DataRecord } from './data-record';

export type GetManyResponse<T extends DataRecord = DataRecord> = T[];
export type GetOneResponse<T extends DataRecord = DataRecord> = T;

export type SearchResponse<T extends DataRecord = DataRecord> = {
	results: T[];
	count?: number;
};

export type PostOneResponse<T extends DataRecord = DataRecord> = T;

export type PatchOneResponse<T extends DataRecord = DataRecord> = T;

export type DeleteOneResponse = void;

export type ApiResponse<T extends DataRecord = DataRecord> =
	| GetManyResponse<T>
	| GetOneResponse<T>
	| PostOneResponse<T>
	| PatchOneResponse<T>
	| DeleteOneResponse;
