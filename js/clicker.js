var score = document.getElementById('score');
var count = parseInt(localStorage.getItem('count') || 0);
var doubleClick = localStorage.getItem('doubleClick') === 'true' || false;
var business = localStorage.getItem('business') === 'true' || false;

score.innerHTML = count;

setInterval(updateBusiness, 500);

function updateBusiness() {
    if (business === true) {
        businessAdd();
    }
}

function saveAll() {
    saveDoubleClick();
    saveBusiness();
    updateMoney();
}

function addScore() {
    count++;
    if (doubleClick) {
        count++;
    }
    updateMoney();
}

function updateMoney() {
    saveScore();
    updateScore();
}

function updateScore() {
    score.innerHTML = count;
}

function saveBusiness() {
    localStorage.setItem('business', business);
}

function saveDoubleClick() {
    localStorage.setItem('doubleClick', doubleClick);
}

function saveScore() {
    localStorage.setItem('count', count);
}

function clearScore() {
    count = 0;
    doubleClick = false;
    business = false;
    saveAll();
}

function buyDoubleClick() {
    if (count >= 500) {
        count -= 500;
        updateMoney();
        doubleClick = true;
        saveDoubleClick();
    } else if (doubleClick === true) {
        alert("You have already purchased this")
    } else {
        alert("You don't have enough money");
    }
}

function buyBusiness() {
    if (count >= 1000) {
        count -= 1000;
        updateMoney();
        business = true;
        saveBusiness();
    } else if (business === true) {
        alert("You have already purchased this")
    } else {
        alert("You don't have enough money");
    }
}

function businessAdd() {
    count++;
    updateMoney();
}