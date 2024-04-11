export const findMissingNumber = (sequence: number[]): number | null  => {
  if (sequence.length === 0) {
    return null;
  }
  const numberSet: { [key: number]: boolean } = {};
  let startNumber = Number.MAX_SAFE_INTEGER;

  for (const num of sequence) {
    if (num < 0) {
      // Negative numbers are not allowed
      return null;
    }
    if (num % 1 !== 0) {
      // Only integers are allowed
      return null;
    }
    if (numberSet[num]) {
      // Duplicate numbers are not allowed
      return null;
    }
    if (num < startNumber) {
      startNumber = num;
    }
    numberSet[num] = true;
  }

  for (let i = startNumber; i <= startNumber + sequence.length; i++) {
      if (!numberSet[i]) {
          return i;
      }
  }

  return sequence.length;
};