import type { HugeRTE } from 'hugerte';

export const getHugeRTE = (): HugeRTE | null => (globalThis as any).hugerte as HugeRTE ?? null;
