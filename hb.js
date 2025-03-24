document.addEventListener("DOMContentLoaded", function () {
    let giftButton = document.getElementById("gift-button");
    let giftContainer = document.getElementById("gift-container");
    let birthdayContent = document.getElementById("birthday-content");
    let messageElement = document.getElementById("message");
    let audio = document.getElementById("birthday-audio");

    // Khi click vào nút nhận quà
    giftButton.addEventListener("click", function () {
        giftContainer.style.display = "none"; // Ẩn nút
        birthdayContent.classList.remove("hidden"); // Hiện nội dung

        // Hiệu ứng gõ chữ
        let messageText = `
        A shining smile, a calming face,
        Naughty eyes with "Have a good meal!"
        A judging gaze when things seem strange,
        You never hide the way you feel.
        Your eyes can heal, your gaze is kind,
        You truly hear, not just in mind.
        If angels walk among us too,
        Then one of them might be you.
        You’re the first one I met in here,
        Thank God it’s you—it’s crystal clear.
        No “Wish you best,” no need to say,
        You are the best in every way.
        Happy Birthday!
        Hope it’s bright,
        Full of joy and pure delight!
        `;
        let lines = messageText.trim().split("\n");
        let index = 0;
        
        function typeMessage() {
            if (index < lines.length) {
                let lineElement = document.createElement("div");
                lineElement.classList.add('line');
                lineElement.textContent = "";
                // lineElement.style.textAlign = "left"; // Align text to the left
                document.getElementById("message").appendChild(lineElement);
                
                let charIndex = 0;
                function typeLine() {
                    if (charIndex < lines[index].length) {
                        lineElement.textContent += lines[index].charAt(charIndex);
                        charIndex++;
                        setTimeout(typeLine, 80); // Tốc độ gõ chữ từng ký tự
                    } else {
                        index++;
                        if (index % 4 === 0) { // Thêm dòng trống sau mỗi 4 dòng
                            let blankLine = document.createElement("div");
                            blankLine.classList.add('line');
                            blankLine.innerHTML = "&nbsp;";
                            document.getElementById("message").appendChild(blankLine);
                        }
                        setTimeout(typeMessage, 200); // Thời gian chờ giữa các dòng
                    }
                }
                typeLine();
            }
        }
        
        setTimeout(typeMessage, 1000); // Bắt đầu sau 1 giây

        // Phát nhạc sau 3 giây
        setTimeout(() => {
            audio.play().catch(() => {
                console.log("Người dùng chưa tương tác, không thể tự động phát âm thanh.");
            });
        }, 1000);

        // Hiệu ứng bóng bay bay lên
        for (let i = 0; i < 15; i++) {
            let balloon = document.createElement("img");
            balloon.src = "balloon.png";
            balloon.classList.add("balloon");
            balloon.style.left = Math.random() * 100 + "vw";
            balloon.style.animationDuration = (Math.random() * 3 + 2) + "s";
            document.body.appendChild(balloon);

            balloon.addEventListener("animationend", function () {
                this.remove();
            });
        }
    });
});