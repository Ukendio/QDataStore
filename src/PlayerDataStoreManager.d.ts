type KeyGenerator = (player: Player) => string;

declare class PlayerDataStoreManager<T> {
	private keyGenerator: KeyGenerator;

	constructor(robloxDataStore: GlobalDataStore, keyGenerator: KeyGenerator);

	DisableSaveOnCloseStudio(): void;

	AddRemovingCallback(callback: Callback): void;

	RemovePlayerDataStore(player: Player): void;

	GetDataStore(player: Player): _DataStore<T>;

	PromiseAllSaves(): Array<Promise<T>>;

	Destroy(): void;

	_createDataStore(player: Player): _DataStore<T>;

	_getKey(player: Player): ReturnType<KeyGenerator>;
}
