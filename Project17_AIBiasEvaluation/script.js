
function evaluateBias(){

    const text =
        document.getElementById("aiText").value.toLowerCase();

    const bias =
        document.getElementById("biasType").value;

    const result =
        document.getElementById("result");

    if(text===""){
        alert("Please enter AI-generated content.");
        return;
    }

    let detectedBias = [];
    let corrections = [];

    if(
        bias==="gender" ||
        bias==="all"
    ){
        if(
            text.includes("men are better") ||
            text.includes("women are emotional")
        ){
            detectedBias.push(
                "Possible Gender Bias"
            );

            corrections.push(
                "Use gender-neutral language."
            );
        }
    }

    if(
        bias==="racial" ||
        bias==="all"
    ){
        if(
            text.includes("race") ||
            text.includes("ethnicity")
        ){
            detectedBias.push(
                "Possible Racial Bias"
            );

            corrections.push(
                "Avoid assumptions based on race."
            );
        }
    }

    if(
        bias==="cultural" ||
        bias==="all"
    ){
        if(
            text.includes("western") ||
            text.includes("traditional")
        ){
            detectedBias.push(
                "Possible Cultural Bias"
            );

            corrections.push(
                "Include diverse cultural perspectives."
            );
        }
    }

    if(
        bias==="economic" ||
        bias==="all"
    ){
        if(
            text.includes("poor") ||
            text.includes("rich")
        ){
            detectedBias.push(
                "Possible Socioeconomic Bias"
            );

            corrections.push(
                "Avoid stereotypes about income groups."
            );
        }
    }

    if(detectedBias.length===0){

        detectedBias.push(
            "No significant bias detected."
        );

        corrections.push(
            "Continue using inclusive language."
        );
    }

    result.style.display="block";

    result.innerHTML=`
        <h2>Bias Evaluation Report</h2>

        <h3>Detected Issues</h3>

        <ul>
            ${detectedBias.map(
                item=>`<li>${item}</li>`
            ).join("")}
        </ul>

        <h3>Constructive Suggestions</h3>

        <ul>
            ${corrections.map(
                item=>`<li>${item}</li>`
            ).join("")}
        </ul>

        <h3>Final Assessment</h3>

        <p>
            Review the content and ensure fairness,
            inclusiveness, and neutrality.
        </p>
    `;
}