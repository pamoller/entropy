const MIN_ENTROPY = 3.5;
const MIN_TOKENS_LENGTH = 32;

export function calculate(token: string): number {
  const length = token.length;
  const frequencies: Record<string,number> = {};

  for (const char of token) {
    frequencies[char] = (frequencies[char] || 0) + 1;
  }

  let res = 0;
  for (const char in frequencies) {
    const frequency = frequencies[char];
    const probability = frequency / length;
    res -= probability * Math.log2(probability);
  }

  return res;
}

export function ensure(token: string, minTokenLength: number = MIN_TOKENS_LENGTH, threshold: number=MIN_ENTROPY): void {
  if (token.length < minTokenLength)
    throw new Error('token is too short');

  const entropy = calculate(token);
  if (entropy < threshold) 
    throw new Error('entropy is too low');
}