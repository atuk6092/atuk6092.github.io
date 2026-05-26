// Bu dosya artık kullanılmıyor.
// Tüm push bildirim işlemleri OneSignalSDKWorker.js tarafından yönetiliyor.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
  self.registration.unregister();
});
