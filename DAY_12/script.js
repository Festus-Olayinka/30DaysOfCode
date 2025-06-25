function calculateTip(){
    const bill = parseFloat(document.getElementById("bill").value);
    const tip = parseFloat(document.getElementById("tip").value);
    const total = bill + (bill * tip/100);
    document.getElementById("total").textContent = `Total Bill is equal to :  #${total.toFixed(2)}`;
}