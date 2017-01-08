(function(){
    var qrCodeUrl = [
        'https://api.qrserver.com/v1/create-qr-code/?size=350x350&margin=10',
        '&data=',
        encodeURIComponent(window.location.href)
    ].join('');
    window.open(qrCodeUrl, 'QR-Code');
})();
