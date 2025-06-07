// Codi per la la gestió de la Cache
if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
            console.log('Service Worker registered with scope:', registration.scope);
        }).catch(function(error) {
        console.log('Service Worker registration failed:', error);
    });
} else {
    console.log('Service Worker registration failed: Insecure context');
}