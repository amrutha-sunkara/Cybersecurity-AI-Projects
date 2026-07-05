function generateContent(){

    const format =
        document.getElementById("format").value;

    const scenario =
        document.getElementById("scenario").value;

    const result =
        document.getElementById("result");

    if(scenario===""){
        alert("Please enter a phishing scenario");
        return;
    }

    if(format==="poster"){

        result.innerHTML = `
        <h3>🖼 PHISHING AWARENESS POSTER</h3>

        <p>
        <strong>Scenario:</strong>
        ${scenario}
        </p>

        <h4>Warning Signs:</h4>

        <ul>
            <li>Suspicious links</li>
            <li>Urgent requests</li>
            <li>Requests for passwords or OTP</li>
            <li>Unknown sender</li>
        </ul>

        <h4>Safety Tips:</h4>

        <ul>
            <li>Never share OTPs</li>
            <li>Verify sender identity</li>
            <li>Check website URLs carefully</li>
            <li>Report phishing attempts</li>
        </ul>
        `;

    }

    else{

        result.innerHTML = `
        <h3>🎬 VIDEO SCRIPT</h3>

        <p>
        <b>Scene 1:</b>
        User receives:
        "${scenario}"
        </p>

        <p>
        <b>Scene 2:</b>
        User clicks the suspicious message.
        </p>

        <p>
        <b>Scene 3:</b>
        Narrator explains this is a phishing attack.
        </p>

        <p>
        <b>Scene 4:</b>
        Advice:
        Never share passwords,
        bank details,
        or OTPs.
        </p>

        <p>
        <b>Final Message:</b>
        Think Before You Click!
        Stay Safe Online.
        </p>
        `;
    }
}