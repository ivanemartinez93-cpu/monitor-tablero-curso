const base = import.meta.env.VITE_API_URL || 'https://api.github.com';
const path = '/repos/ivanemartinez93-cpu/tablero-continuidad-ia-demo/actions/workflows/actualizar.yml/runs?per_page=1';
export async function getLatestRun() {
 const response = await fetch(base.replace(/\/$/, '') + path, { headers: { Accept: 'application/vnd.github+json' } });
 if (!response.ok) throw new Error(`GitHub respondió HTTP ${response.status}. Intentá nuevamente más tarde.`);
 const data = await response.json();
 const run = data?.workflow_runs?.[0];
 if (!run || typeof run.status !== 'string' || typeof run.created_at !== 'string' || typeof run.html_url !== 'string' || !run.html_url.startsWith('https://github.com/ivanemartinez93-cpu/tablero-continuidad-ia-demo/actions/runs/')) throw new Error('No hay una ejecución válida disponible para mostrar.');
 return run;
}

