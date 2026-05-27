document.getElementById("checkBtn")
.addEventListener("click", function(){

    let text =
    document.getElementById("message")
    .value.toLowerCase();

    let score = 0;

    let keywords = {
        "telegram": 40,
        "whatsapp": 40,
        "gmail": 20,
        "outside fiverr": 50,
        "crypto": 50,
        "urgent": 10,
        "contact me": 15,
        "pay outside": 60,
        "send email": 25
    };

    for(let word in keywords){

        if(text.includes(word)){
            score += keywords[word];
        }

    }

    let result =
    document.getElementById("result");

    if(score >= 60){

        result.innerHTML =
        "⚠ Scam Likely<br>Risk Score: " + score;

    }
    else if(score >= 20){

        result.innerHTML =
        "⚠ Suspicious Message<br>Risk Score: " + score;

    }
    else{

        result.innerHTML =
        "✅ Seems Safe<br>Risk Score: " + score;

    }

});