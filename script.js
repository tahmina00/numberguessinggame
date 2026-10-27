
let firstUI = document.getElementById("firstUI");
let secondUI = document.getElementById("secondUI");
let thirdUI = document.getElementById("thirdUI");
let resultUI = document.getElementById("resultUI");

let firstPlayerName = document.getElementById("firstPlayerName");
let firstPlayerNameBtn = document.getElementById("firstPlayerNameBtn");
let firstTitle = document.getElementById("firstTitle");

let firstPlayerNumber = document.getElementById("firstPlayerNumber");
let firstPlayerNumberBtn = document.getElementById("firstPlayerNumberBtn");

let secondPlayerName = document.getElementById("secondPlayerName");
let secondPlayerGuess = document.getElementById("secondPlayerGuess");
let secondPlayerBtn = document.getElementById("secondPlayerBtn");

let resultMessage = document.getElementById("resultMessage");

let playerOneName = "";
let secretTargetNumber = 0;
let playerTwoName = "";


firstPlayerNameBtn.addEventListener("click", () => {
  if (firstPlayerName.value.trim() === "") {
    alert("অনুগ্রহ করে প্লেয়ার ১-এর নাম লিখুন!");
    return;
  }
  playerOneName = firstPlayerName.value;
  firstTitle.innerHTML = "Hello " + playerOneName;

  firstUI.classList.add("hidden");
  secondUI.classList.remove("hidden");
});


firstPlayerNumberBtn.addEventListener("click", () => {
  let numVal = parseInt(firstPlayerNumber.value);
  
  if (isNaN(numVal) || numVal < 1 || numVal > 100) {
    alert("অনুগ্রহ করে ১ থেকে ১০০ এর মধ্যে একটি সঠিক সংখ্যা দিন!");
    return;
  }
  
  secretTargetNumber = numVal;

  secondUI.classList.add("hidden");
  thirdUI.classList.remove("hidden");
});


secondPlayerBtn.addEventListener("click", () => {
  if (secondPlayerName.value.trim() === "" || secondPlayerGuess.value === "") {
    alert("অনুগ্রহ করে প্লেয়ার ২-এর নাম এবং অনুমানকৃত নম্বর উভয়ই দিন!");
    return;
  }

  let guessedNum = parseInt(secondPlayerGuess.value);

  if (isNaN(guessedNum) || guessedNum < 1 || guessedNum > 100) {
    alert("অনুগ্রহ করে ১ থেকে ১০০ এর মধ্যে একটি সংখ্যা অনুমান করুন!");
    return;
  }

  playerTwoName = secondPlayerName.value;

  thirdUI.classList.add("hidden");
  resultUI.classList.remove("hidden");


  if (guessedNum === secretTargetNumber) {
    resultMessage.innerHTML = `অভিনন্দন ${playerTwoName}! আপনি বিজয়ী হয়েছেন! (${playerOneName}-এর নম্বরটি ছিল ${secretTargetNumber})`;
  } else {
    resultMessage.innerHTML = `${playerTwoName} আপনি হেরে গেছেন! ${playerOneName}-এর গোপন নম্বরটি ছিল ${secretTargetNumber}`;
  }
});
