'use client';

import { useState, useSyncExternalStore } from 'react';
import Script from 'next/script';

const preferenceKey = 'wushi-analytics';
const changeEvent = 'wushi-analytics-change';

function getPreference() {
  try {
    return localStorage.getItem(preferenceKey) === 'allowed';
  } catch {
    return false;
  }
}

function subscribe(callback: () => void) {
  function onStorage(event: StorageEvent) {
    if ((event.key === preferenceKey && event.oldValue === 'allowed' && event.newValue !== 'allowed') || event.key === null) {
      window.location.reload();
    } else {
      callback();
    }
  }
  window.addEventListener('storage', onStorage);
  window.addEventListener(changeEvent, callback);
  return () => {
    window.removeEventListener('storage', onStorage);
    window.removeEventListener(changeEvent, callback);
  };
}

const serverPreference = () => false;

export function BaiduAnalytics() {
  const enabled = useSyncExternalStore(subscribe, getPreference, serverPreference);
  if (!enabled) return null;
  return (
    <>
      <Script id="baidu-tongji-init" strategy="afterInteractive">
        {'window._hmt = window._hmt || [];'}
      </Script>
      <Script id="baidu-tongji" src="https://hm.baidu.com/hm.js?5993a407a0f1e813d26b91081adc46c8" strategy="afterInteractive" />
    </>
  );
}

export default function AnalyticsPreference() {
  const enabled = useSyncExternalStore(subscribe, getPreference, serverPreference);
  const [error, setError] = useState('');

  function toggle() {
    try {
      localStorage.setItem(preferenceKey, enabled ? 'denied' : 'allowed');
      setError('');
      // Reload to stop a previously loaded third-party script immediately.
      window.dispatchEvent(new Event(changeEvent));
      if (enabled) window.location.reload();
    } catch {
      setError('浏览器无法保存偏好，请清除浏览器网站数据后重试。');
    }
  }

  return (
    <div className="mt-12 rounded-2xl bg-surface-container-low p-6">
      <h2 className="text-xl font-black text-on-surface">访问统计偏好</h2>
      <p className="mt-3 text-base text-on-surface-variant">
        百度访问统计默认关闭。您可以自愿开启或随时关闭；关闭后页面会刷新，停止继续加载统计脚本。此前产生的数据和 Cookie 不会因此自动删除。
      </p>
      <p role="status" className="mt-3 text-sm text-on-surface-variant">当前：{enabled ? '已开启' : '已关闭'}</p>
      <button type="button" onClick={toggle} className="button-primary mt-4">{enabled ? '关闭访问统计' : '允许访问统计'}</button>
      {error && <p role="alert" className="mt-3 text-primary">{error}</p>}
      <noscript><p className="mt-3">JavaScript 已关闭，访问统计不会加载。</p></noscript>
    </div>
  );
}
