declare class PendingPromiseTracker<T> {
	Add(promise: Promise<T>): void;

	GetAll(): Array<Promise<T>>;
}
