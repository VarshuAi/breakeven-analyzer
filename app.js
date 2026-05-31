
            window.calcBE = function() {
                const f = parseFloat(document.getElementById('be-fixed').value || 20000);
                const p = parseFloat(document.getElementById('be-price').value || 50);
                const v = parseFloat(document.getElementById('be-var').value || 20);
                const res = document.getElementById('be-res');
                if (p <= v) {
                    res.innerText = "Error: Sale price must exceed variable costs.";
                    return;
                }
                const units = Math.ceil(f / (p - v));
                res.innerHTML = `Required Units: <strong>${units} Units</strong> to break even.`;
            }
            calcBE();
        