import { useEffect, useState } from "react";

export const useDelayValue = <T>(
  value: T,
  delay: number = 500,
  onDelayComplete?: () => void
): T | null => {
  const [delayedValue, setDelayedValue] = useState<T | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedValue(value);
      onDelayComplete?.();
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay, onDelayComplete]);

  return delayedValue;
};
