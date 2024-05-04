import { DatabaseRecord } from '@riao/dbal';

export type GetManyResponse<T extends DatabaseRecord = DatabaseRecord> = T[];
export type GetOneResponse<T extends DatabaseRecord = DatabaseRecord> = T;

export type PostOneResponse<T extends DatabaseRecord = DatabaseRecord> = T;

export type PatchOneResponse<T extends DatabaseRecord = DatabaseRecord> = T;

export type DeleteOneResponse = void;

export type ApiResponse<T extends DatabaseRecord = DatabaseRecord> =
	| GetManyResponse<T>
	| GetOneResponse<T>
	| PostOneResponse<T>
	| PatchOneResponse<T>
	| DeleteOneResponse;
