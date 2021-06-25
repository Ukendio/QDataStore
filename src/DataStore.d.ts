declare class _DataStore<T> extends DataStoreStage<T> {
	GetFullPath(): string;

	DidLoadFail(): boolean;

	PromiseLoadSuccessful(): Promise<boolean>;

	Load<D extends unknown>(key: string, _type: D): Promise<D>;

	StoreValueChanged<D extends unknown>(key: string, _type: D): Signal;

	_saveData(writer: string): Promise<ReturnType<GlobalDataStore["UpdateAsync"]>>;

	_promiseLoad(): Promise<ReturnType<GlobalDataStore["GetAsync"]>>;
}
