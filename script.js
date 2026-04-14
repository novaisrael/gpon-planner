function calculate() {
    let txPower = 3;
    let fiberLoss = 0.35;
    let spliceLoss = 0.1;

    let length = parseFloat(document.getElementById("length").value) || 0;
    let splitterLoss = parseFloat(document.getElementById("splitter").value) || 0;
    let splices = parseInt(document.getElementById("splices").value) || 0;

    let totalLoss = (length * fiberLoss) + splitterLoss + (splices * spliceLoss);
    let rxPower = txPower - totalLoss;

    let status = "";
    let recommendation = "";

    if (rxPower >= -8) {
        status = "⚠️ TOO STRONG (Risk overload)";
        recommendation = "👉 Add stronger splitter (e.g. 1:16 or 1:32)";
    } else if (rxPower >= -28) {
        status = "✅ OK (Within GPON range)";
        recommendation = "👉 Design is optimal";
    } else {
        status = "❌ TOO WEAK (Signal loss)";
        recommendation = "👉 Reduce splitters or shorten cable";
    }

    document.getElementById("result").innerHTML =
        `Signal: ${rxPower.toFixed(2)} dBm<br>${status}<br><br>${recommendation}`;
}