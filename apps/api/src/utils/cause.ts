type ResErrType = {
    cause: {
        code: string 
    }
}

// drizzleのエラーで、err.cause.codeが存在し、string型であることを確認する関数
export function hasCauseCode(err: unknown): err is ResErrType {
    if (typeof err !== 'object' || err === null) return false;
    if (!('cause' in err)) return false;

    const cause = err.cause;
    if (typeof cause !== 'object' || cause === null) return false;
    if (!('code' in cause)) return false;
    return typeof cause.code === 'string';
}