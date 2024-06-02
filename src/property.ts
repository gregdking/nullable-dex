export class Property<T> {
    static boolean(value: boolean = false): Property<boolean> {
        return new Property(value, false);
    }

    static number(
        value: number = 0,
        defaultValue: number = 0
    ): Property<number> {
        return new Property(value, defaultValue);
    }

    static numberOrNull(value: number | null): Property<number | null> {
        return new Property(value, null);
    }

    static string(
        value: string = '',
        defaultValue: string = ''
    ): Property<string> {
        return new Property(value, defaultValue);
    }

    static stringOrNull(value: string | null): Property<string | null> {
        return new Property(value, null);
    }

    constructor(private value: T, private defaultValue: T) {}

    valueOf(): T {
        return this.value;
    }

    set(newValue: T | null | undefined): boolean {
        if (newValue === undefined) return false;
        if (newValue === null) newValue = this.defaultValue;
        if (this.value === newValue) return false;
        this.value = newValue;
        return true;
    }
}
