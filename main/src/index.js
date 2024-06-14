// You can write your own logic here to determine the actual url
window.app1Url = 'http://localhost:3002';
window.app2Url = 'http://localhost:3003';
window.reportUrl = 'http://localhost:3004';

// Use dynamic import here to allow webpack to interface with module federation code
import('./bootstrap');
