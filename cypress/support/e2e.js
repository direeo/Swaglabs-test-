// Import commands.js using ES2015 syntax:
import './commands';

// Import page objects
import LoginPage from './pages/LoginPage';
import InventoryPage from './pages/InventoryPage';

// Make page objects available globally
Cypress.LoginPage = LoginPage;
Cypress.InventoryPage = InventoryPage;