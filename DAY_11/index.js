function convert(){
    const val = parseFloat(document.getElementById("input").value);
    const type = document.getElementById("type");
    result = 0;
    if (type === "kg-to-lbs") result = val * 2.20462;
    else result = val / 2.20462;
    document.getElementById("result").textContent = `RESULT: ${result.toFixed(2)}`;
}

