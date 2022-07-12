//Bai Tap 1 : Tính tiền lương:
function salary() {
  var getSalaryOfDay = +document.getElementById("salaryOfDay").value;
  var getWorkingDays = +document.getElementById("workingDays").value;
  var totalSalary = getSalaryOfDay * getWorkingDays;
  document.getElementById("result1").innerHTML = totalSalary;
}
//Bài Tập 2: Tính giá trị trung bình của 5 số vừa nhập:
function avg() {
  var getNum1 = +document.getElementById("num1").value;
  var getNum2 = +document.getElementById("num2").value;
  var getNum3 = +document.getElementById("num3").value;
  var getNum4 = +document.getElementById("num4").value;
  var getNum5 = +document.getElementById("num5").value;
  var average = (getNum1 + getNum2 + getNum3 + getNum4 + getNum5) / 5;
  document.getElementById("result2").innerHTML = average;
}
//Bài Tập 3: QUy đổi tiền từ USD sang VND
function moneyExchange() {
  var getMoneyInput = +document.getElementById("dollarAmount").value;
  var totalMoney = getMoneyInput * 23500;
  document.getElementById("result3").innerHTML = totalMoney;
}
//Bài tập 4: Tính diện tích và chu vi của hình chữ nhật
function calc() {
  var getLongValue = +document.getElementById("long").value;
  var getWidthValue = +document.getElementById("width").value;
  var perimeter = (getLongValue + getWidthValue) * 2;
  var area = getLongValue * getWidthValue;
  document.getElementById("resultPerimeter").innerHTML ="Chu vi: " + perimeter;
  document.getElementById("resultArea").innerHTML ="Diện tích: " + area;
}
function calc5 (){
    var getNumber = +document.getElementById("getNumber").value;
    var tens = getNumber / 10;
    var units = getNumber % 10;
    var totalNum = Math.floor(tens) + units;
    document.getElementById("result5").innerHTML =totalNum;
}
