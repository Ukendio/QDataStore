declare class DataStoreWriter {
	SetRawData(data: object): void;

	AddWriter(name: string, value: unknown): void;

	WriteMerge<O extends object>(original: O): O;
}
