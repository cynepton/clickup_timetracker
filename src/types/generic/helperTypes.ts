type HexStringAlphabet = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

type HexStringInteger = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type HexAlphaNumeric = HexStringAlphabet | HexStringInteger;

export type HexString = `#${string}`;