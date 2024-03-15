if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
}

const isOnline = () => {
    if (navigator.onLine) {
        alert('Conectado a internet.');
    } else {
        alert('No hay conexión a internet, inténtalo de nuevo más tarde.');
    }
}

window.addEventListener('online', isOnline);
window.addEventListener('offline', isOnline);

isOnline();