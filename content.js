console.log("Fiverr Scam Detector Active");

/* SCAM WORDS */

let scamWords = {
    "telegram": 30,
    "whatsapp": 30,
    "gmail": 20,
    "outside fiverr": 40,
    "pay outside": 50,
    "crypto": 40,
    "contact me outside": 30,
    "send your email": 25
};

/* CREATE FLOATING PANEL */

let panel =
document.createElement("div");

panel.style.position = "fixed";
panel.style.top = "20px";
panel.style.right = "20px";
panel.style.background = "white";
panel.style.padding = "15px";
panel.style.borderRadius = "10px";
panel.style.boxShadow =
"0 0 10px rgba(0,0,0,0.2)";
panel.style.zIndex = "9999";
panel.style.fontFamily = "Arial";
panel.style.width = "220px";

document.body.appendChild(panel);

/* MAIN FUNCTION */

function detectScamMessages() {

    let totalRisk = 0;

    let messages =
    document.querySelectorAll("p");

    messages.forEach(message => {

        let text =
        message.innerText.toLowerCase();

        let suspicious = false;

        for(let word in scamWords){

            if(text.includes(word)){

                suspicious = true;

                totalRisk += scamWords[word];

            }

        }

        /* PREVENT DUPLICATES */

        if(
            suspicious &&
            !message.dataset.checked
        ){

            message.dataset.checked = "true";

            /* STYLE MESSAGE */

            message.style.backgroundColor =
            "#ffdddd";

            message.style.border =
            "2px solid red";

            message.style.padding =
            "8px";

            message.style.borderRadius =
            "8px";

            /* WARNING */

            let warning =
            document.createElement("div");

            warning.innerText =
            "⚠ Suspicious Message";

            warning.style.color = "red";
            warning.style.fontWeight = "bold";
            warning.style.marginBottom = "5px";

            message.parentNode
            .insertBefore(warning, message);

        }

    });

    /* LIMIT RISK */

    if(totalRisk > 100){
        totalRisk = 100;
    }

    /* TRUST SCORE */

    let trustScore =
    100 - totalRisk;

    let status = "";

    if(trustScore >= 70){

        status =
        "✅ Trusted Client";

    }
    else if(trustScore >= 40){

        status =
        "⚠ Be Careful";

    }
    else{

        status =
        "🚨 Suspicious Client";

    }

    /* UPDATE PANEL */

    panel.innerHTML = `
        <h3>Fiverr Scam Detector</h3>

        <p><b>Trust Score:</b>
        ${trustScore}/100</p>

        <p><b>Status:</b>
        ${status}</p>
    `;

}

/* RUN CONTINUOUSLY */

setInterval(detectScamMessages, 2000);