import { DatabaseRecord } from '@riao/dbal';

export type ApiResponse<T = any> = T;

export type GetManyResponse<T extends DatabaseRecord = DatabaseRecord> = T[];
export type GetOneResponse<T extends DatabaseRecord = DatabaseRecord> = T;

export type PostOneResponse<T extends DatabaseRecord = DatabaseRecord> = T;

export type PatchOneResponse<T extends DatabaseRecord = DatabaseRecord> = T;

export type DeleteOneResponse = void;
