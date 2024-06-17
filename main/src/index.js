// You can write your own logic here to determine the actual url
window.accountingUrl = 'http://localhost:3001';
window.inventoryUrl = 'http://localhost:3002';
window.reportUrl = 'http://localhost:3003';

// Use dynamic import here to allow webpack to interface with module federation code
import('./bootstrap');
