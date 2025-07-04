document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const catImg = document.getElementById('catImg');
    let yesSize = 1.2;
    let noSize = 1.2;
    const noWords = [
        "No", "wait no?", "why?", "I'm busy anyways", "say no one more time and youll see what im made of", "Are you sure", "ok but pleaseeee", "im begging", "your breaking my heart", "i will die if you keep saying no", "Please stop", "fine i never liked you", "mb thats a lie", "cmonnn please", "im begging"
    ];
    let noClickCount = 0;
    // List of .jpgs except happycat.jpg
    const catImages = [
        "beggingcat1.jpg",
        "beggingcat2.jpg",
        "diecat.jpg",
        "madcat.jpg",
        "punching cat.jpg",
        "questioncat.jpg",
        "sadcat.jpg"
    ];
    let catImgIndex = 0;

    yesBtn.style.fontSize = yesSize + 'em';
    noBtn.style.fontSize = noSize + 'em';

    noBtn.addEventListener('click', function() {
        noClickCount++;
        // Make Yes button bigger, No button smaller (font and button size)
        yesSize += 0.2;
        noSize = Math.max(0.7, noSize - 0.1);
        yesBtn.style.fontSize = yesSize + 'em';
        noBtn.style.fontSize = noSize + 'em';
        noBtn.style.transform = `scale(${noSize})`;
        // Change No button text
        noBtn.textContent = noWords[noClickCount % noWords.length];
        // Alternate cat images except happycat.jpg
        catImgIndex = (catImgIndex + 1) % catImages.length;
        catImg.src = catImages[catImgIndex];
        // After 20 presses, hide the No button
        if (noClickCount >= 15) {
            noBtn.style.display = 'none';
            yesBtn.textContent = "Now you have to say yes";
        }
    });

    yesBtn.addEventListener('click', function() {
        catImg.src = 'happycat.jpg';
        noBtn.style.display = 'none';
        yesBtn.style.display = 'none';
        document.getElementById('yesMsg').textContent = "yay lets go hangout ps* i dont have money so your paying ;) *ps to the ps this website dosent tell me if you said yes so send me a message pls alr thank you :)";
    });
});


