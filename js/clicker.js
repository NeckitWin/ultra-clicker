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
    if (!doubleClick) {
        if (count >= 100) {
            count -= 100;
            updateMoney();
            doubleClick = true;
            saveDoubleClick();
        } else {
            alert("You don't have enough money");
        }
    } else {
        alert("You have already purchased this")
    }
}

function buyBusiness() {
    if (!business) {
        if (count >= 1000) {
            count -= 1000;
            updateMoney();
            business = true;
            saveBusiness();
        } else {
            alert("You don't have enough money");
        }
    } else if (business) {
        alert("You have already purchased this")
    }
}

function businessAdd() {
    count++;
    updateMoney();
}

document.addEventListener('click', function (event) {
    var x = event.clientX;
    var y = event.clientY;
    var img = document.createElement('img');
    img.src = 'https://img.razrisyika.ru/kart/10/36705-anime-tyan-1.jpg';
    img.style.height = '20px';
    img.style.width = '20px';
    img.style.position = 'absolute';
    var rand = Math.random() * (10 - (-10) + 1) + (-10);
    img.style.left = x + rand + 'px';
    img.style.top = y + rand + 'px';
    img.style.zIndex = '1';
    img.style.opacity = '1';

    document.body.appendChild(img);

    anime(img, y);
});

function anime(img, y) {
    var opacity = 1;
    var top = y;

    var animeInterval = setInterval(function () {
        top += 1;
        opacity -= 0.05;

        img.style.top = top + 'px';
        img.style.opacity = opacity;
        img.style.rotate = (Math.random() * (360 - 1 + 1) + 1) + 'px';

        if (opacity <= 0) {
            clearInterval(animeInterval);
            document.body.removeChild(img);
        }
    }, 50)

}