// phone counter event handler
document.getElementById("phonePlusBtn").addEventListener("click", function () {
  const phoneCount = document.getElementById("phoneCount").value;
  const newPhoneCount = parseInt(phoneCount) + 1;
  document.getElementById("phoneCount").value = newPhoneCount;

  const phoneCost = document.getElementById("cost").innerText;
  const newCost = parseInt(phoneCost) + 1219;
  document.getElementById("cost").innerText = newCost;

  const subTotal = document.getElementById("subTotal").innerText;
  const newSubTotal = parseInt(subTotal) + 1219;
  document.getElementById("subTotal").innerText = newSubTotal;

  const total = document.getElementById("total").innerText;
  const newTotal = parseInt(total) + 1219;
  document.getElementById("total").innerText = newTotal;
});

document.getElementById("phoneMinusBtn").addEventListener("click", function () {
  const phoneCount = document.getElementById("phoneCount").value;
  const newPhoneCount = parseInt(phoneCount) - 1;
  const lowerValue = (document.getElementById("phoneCount").value =
    newPhoneCount);
  if (lowerValue < 0) {
    document.getElementById("phoneCount").value = 0;
  }

  const phoneCost = document.getElementById("cost").innerText;
  const newCost = parseInt(phoneCost) - 1219;
  const lowerValueCost = (document.getElementById("cost").innerText = newCost);
  if (lowerValueCost < 1219) {
    document.getElementById("cost").innerText = 0;
  }

  const subTotal = document.getElementById("subTotal").innerText;
  const newSubTotal = parseInt(subTotal) - 1219;
  const lowerValueSubTotal = (document.getElementById("subTotal").innerText =
    newSubTotal);
  if (lowerValueSubTotal < 59) {
    document.getElementById("subTotal").innerText = 0;
  }

  const total = document.getElementById("total").innerText;
  const newTotal = parseInt(total) - 1219;
  const lowerValueTotal = (document.getElementById("total").innerText =
    newTotal);
  if (lowerValueTotal < 59) {
    document.getElementById("total").innerText = 0;
  }
});

document.getElementById("phoneRemove").addEventListener("click", function () {
  document.getElementById("cartItemOne").style.display = "none";
});

// Cover counter event handler
// plus Button
document.getElementById("casePlusBtn").addEventListener("click", function () {
  const caseCount = document.getElementById("caseCount").value;
  const newCaseCount = parseInt(caseCount) + 1;
  document.getElementById("caseCount").value = newCaseCount;

  const coverCost = document.getElementById("coverCost").innerText;
  const newCoverCost = parseInt(coverCost) + 59;
  document.getElementById("coverCost").innerText = newCoverCost;

  const subTotal = document.getElementById("subTotal").innerText;
  const newSubTotal = parseInt(subTotal) + 59;
  document.getElementById("subTotal").innerText = newSubTotal;

  const total = document.getElementById("total").innerText;
  const newTotal = parseInt(total) + 59;
  document.getElementById("total").innerText = newTotal;
});

// minus button
document.getElementById("caseMinusBtn").addEventListener("click", function () {
  const caseCount = document.getElementById("caseCount").value;
  const newCaseCount = parseInt(caseCount) - 1;
  const lowerValue = (document.getElementById("caseCount").value =
    newCaseCount);
  if (lowerValue < 0) {
    document.getElementById("caseCount").value = 0;
  }

  const coverCost = document.getElementById("coverCost").innerText;
  const newCoverCost = parseInt(coverCost) - 59;
  const lowerValueCost = (document.getElementById("coverCost").innerText =
    newCoverCost);
  if (lowerValueCost < 59) {
    document.getElementById("coverCost").innerText = 0;
  }

  const subTotal = document.getElementById("subTotal").innerText;
  const newSubTotal = parseInt(subTotal) - 59;
  const lowerValueSubTotal = (document.getElementById("subTotal").innerText =
    newSubTotal);
  if (lowerValueSubTotal < 59) {
    document.getElementById("subTotal").innerText = 0;
  }

  const total = document.getElementById("total").innerText;
  const newTotal = parseInt(total) - 59;
  const lowerValueTotal = (document.getElementById("total").innerText =
    newTotal);
  if (lowerValueTotal < 59) {
    document.getElementById("total").innerText = 0;
  }
});
// remove Button
document.getElementById("caseRemove").addEventListener("click", function () {
  document.getElementById("cardItemTwo").style.display = "none";
});
