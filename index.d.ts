declare module 'ndarray' {
  type Data =
    Array<number> | Int8Array | Int16Array | Int32Array |
    Uint8Array | Uint16Array | Uint32Array |
    Float32Array | Float64Array | Uint8ClampedArray;

  interface ndarray {
    data: Data;
    shape: number[];
    stride: number[];
    offset: number;
    get(...args: number[]): number;
    set(...args: number[]): number;
    lo(...args: number[]): ndarray;
    hi(...args: number[]): ndarray;
    step(...args: number[]): ndarray;
    transpose(...args: number[]): ndarray;
    pick(...args: number[]): ndarray;
  }

  function ndarray(data: Data, shape?: number[], stride?: number[], offset?: number): ndarray;

  export = ndarray;
}
