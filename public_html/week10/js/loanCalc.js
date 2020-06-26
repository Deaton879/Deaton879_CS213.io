
function doPayment() {
    let a = parseFloat(document.getElementById('principal').value);
    let b = parseFloat(document.getElementById('annualRate').value);
    let c = parseFloat(document.getElementById('years').value);
    let d = parseFloat(document.getElementById('periods').value);
    let payment = computePayment(a, b, c, d);
    return document.getElementById('paymentOut').innerHTML = "$" + payment.toFixed(2);
}

function doBalance() {
    let a = parseFloat(document.getElementById('principal').value);
    let b = parseFloat(document.getElementById('annualRate').value);
    let c = parseFloat(document.getElementById('years').value);
    let d = parseFloat(document.getElementById('periods').value);
    let e = parseFloat(document.getElementById('numPay').value);
    let balance = computeBalance(a, b, c, d, e);
    return document.getElementById('balanceOut').innerHTML = "$" + balance.toFixed(2);
}

function computePayment(principal, annualRate, years, periodsPerYear) {
    let r = annualRate/periodsPerYear;
    let n = years * periodsPerYear;
    let p = principal * r / (1 - (1 + r)**(-1 * n));
    return p;
}

function computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentsPaidToDate) {
    let r = annualRate / periodsPerYear;
    let d = numberOfPaymentsPaidToDate;
    let p = computePayment(principal, annualRate, years, periodsPerYear).toFixed(2);
    return principal * (1 + r)**d - p * ((1 + r)**d - 1) / r;
}