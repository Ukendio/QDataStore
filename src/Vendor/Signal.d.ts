declare class Signal {
	Fire(...args: unknown[]): void;

	Connect(): RBXScriptConnection;

	Wait(): LuaTuple<unknown[]>;

	Destroy(): void;
}
