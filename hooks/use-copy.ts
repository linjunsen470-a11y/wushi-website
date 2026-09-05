'use client';

import { useEffect, useRef, useState } from 'react';

export function useCopy() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copyError, setCopyError] = useState('');
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const requestId = useRef(0);

  useEffect(() => () => {
    requestId.current++;
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const handleCopy = async (value: string, key: string) => {
    const currentRequest = ++requestId.current;
    if (timer.current) clearTimeout(timer.current);
    setCopiedId(null);
    setCopyError('');

    try {
      await navigator.clipboard.writeText(value);
      if (currentRequest !== requestId.current) return;
      setCopiedId(key);
      timer.current = setTimeout(() => setCopiedId(null), 2000);
    } catch {
      if (currentRequest !== requestId.current) return;
      setCopyError(`复制失败，请长按或选中号码手动复制：${value}`);
    }
  };

  return { copiedId, copyError, handleCopy };
}
