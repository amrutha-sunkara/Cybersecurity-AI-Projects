function generateReport() {

    const name = document.getElementById("username").value;
    const platformData = document.getElementById("platforms").value;
    const result = document.getElementById("result");

    if(name === "" || platformData === ""){
        alert("Please fill all fields.");
        return;
    }

    const platforms = platformData
        .split("\n")
        .filter(item => item.trim() !== "");

    let riskScore = 0;

    platforms.forEach(platform => {
        const lower = platform.toLowerCase();

        if(lower.includes("location"))
            riskScore += 3;

        if(lower.includes("phone"))
            riskScore += 2;

        if(lower.includes("contacts"))
            riskScore += 3;

        if(lower.includes("email"))
            riskScore += 1;

        if(lower.includes("photos"))
            riskScore += 1;

        if(lower.includes("search history"))
            riskScore += 2;
    });

    let riskLevel = "";
    let cssClass = "";

    if(riskScore >= 8){
        riskLevel = "HIGH";
        cssClass = "high";
    }
    else if(riskScore >= 4){
        riskLevel = "MEDIUM";
        cssClass = "medium";
    }
    else{
        riskLevel = "LOW";
        cssClass = "low";
    }

    let recommendations = [];

    if(platformData.toLowerCase().includes("location"))
        recommendations.push(
            "Disable location sharing where not necessary."
        );

    if(platformData.toLowerCase().includes("phone"))
        recommendations.push(
            "Hide your phone number from public profiles."
        );

    if(platformData.toLowerCase().includes("contacts"))
        recommendations.push(
            "Review app permissions for contact access."
        );

    recommendations.push(
        "Delete unused accounts."
    );

    recommendations.push(
        "Review privacy settings regularly."
    );

    result.style.display = "block";

    result.innerHTML = `
        <h2>Digital Footprint Report</h2>

        <p><strong>User:</strong> ${name}</p>

        <p>
            <strong>Platforms Analyzed:</strong>
            ${platforms.length}
        </p>

        <p>
            <strong>Overall Risk:</strong>
            <span class="${cssClass}">
                ${riskLevel}
            </span>
        </p>

        <h3>Recommendations</h3>

        <ul>
            ${recommendations
                .map(item => `<li>${item}</li>`)
                .join("")}
        </ul>
    `;
}