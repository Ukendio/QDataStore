declare class DataStoreStage<T> {
	GetTopLevelDataStoredSignal(): Signal;

	GetFullPath(): string;

	Load<D extends unknown>(name: string, defaultValue: D): Promise<D>;

	protected _afterLoadGetAndApplyStagedData<D extends unknown>(name: string, data: object, defaultValue: D): D;

	Delete(): void;

	Wipe(): Promise<void>;

	GetSubStore(name: string): this;

	StoreOnValueChange(name: string, valueObject: ValueBase): RBXScriptConnection;

	HasWritableData(): boolean;

	GetNewWriter(): DataStoreWriter;

	Destroy(): void;
}
