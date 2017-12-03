
export class Th {
    static async sleep(ms: number): Promise<void> {
        return new Promise<void>(resolve => setTimeout(resolve, ms));
    }

    static async run(p: () => Promise<void>): Promise<void> {
        return p();
    }
}
