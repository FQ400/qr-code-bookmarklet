# QR-Code Bookmarklet

This repo contains the the code for a bookmarklet that creates a QR-Code of the url of the current page. This should make the cross devise development a bit easier and a browser extension isn't needed.

The bookmarklet uses the QR Code Generator service http://goqr.me/api/


## Build the bookmarklet

Prefix the code in `src/qr-code.js` with `javascript:` and url encode the source code using for instance http://meyerweb.com/eric/tools/dencoder/

```
javascript:(function()%7B%0A%20%20%20%20var%20qrCodeUrl%20%3D%20%5B%0A%20%20%20%20%20%20%20%20%27https%3A%2F%2Fapi.qrserver.com%2Fv1%2Fcreate-qr-code%2F%3Fsize%3D350x350%26margin%3D10%27%2C%0A%20%20%20%20%20%20%20%20%27%26data%3D%27%2C%0A%20%20%20%20%20%20%20%20encodeURIComponent(window.location.href)%0A%20%20%20%20%5D.join(%27%27)%3B%0A%20%20%20%20window.open(qrCodeUrl%2C%20%27QR-Code%27)%3B%0A%7D)()%3B
```
