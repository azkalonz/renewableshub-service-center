export function onZoho(callback: any) {
  window.ZOHO.embeddedApp.on('PageLoad', function () {
    callback();
  });
  window.ZOHO.embeddedApp.init();
}
