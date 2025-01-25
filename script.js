document.addEventListener("DOMContentLoaded", function() {
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.style.position = 'fixed';
    loader.style.top = '50%';
    loader.style.left = '50%';
    loader.style.transform = 'translate(-50%, -50%)';
    loader.style.border = '16px solid #f3f3f3';
    loader.style.borderRadius = '50%';
    loader.style.borderTop = '16px solid #3498db';
    loader.style.width = '120px';
    loader.style.height = '120px';
    loader.style.animation = 'spin 2s linear infinite';
    document.body.appendChild(loader);

    window.addEventListener('load', function() {
        loader.style.display = 'none';
    });
});

const style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}`;
document.head.appendChild(style);