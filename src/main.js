import './style.css';
import { getLatestRun } from './service.js';
import { showLoading, showError, showRun } from './ui.js';
const refresh = document.querySelector('#refresh');
async function update() {
 showLoading(true);
 try { showRun(await getLatestRun()); }
 catch (error) { showError(error.message); }
 finally { showLoading(false); }
}
refresh.addEventListener('click', update);
update();

