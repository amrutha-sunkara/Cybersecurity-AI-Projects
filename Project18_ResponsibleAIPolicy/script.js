function generatePolicy(){

    const orgName =
        document.getElementById("orgName").value;

    const orgType =
        document.getElementById("orgType").value;

    const scope =
        document.getElementById("scope").value;

    const concern =
        document.getElementById("concern").value;

    const result =
        document.getElementById("result");

    if(orgName==="" || scope===""){
        alert("Please fill all fields.");
        return;
    }

    let additionalPolicy = "";

    if(concern==="Privacy" || concern==="All"){
        additionalPolicy +=
        "\n• Follow India's Digital Personal Data Protection (DPDP) Act.\n";
    }

    if(concern==="Bias and Fairness" || concern==="All"){
        additionalPolicy +=
        "\n• Ensure fairness and eliminate bias in AI systems.\n";
    }

    if(concern==="Transparency" || concern==="All"){
        additionalPolicy +=
        "\n• Maintain transparency and explainability of AI decisions.\n";
    }

    if(concern==="Security" || concern==="All"){
        additionalPolicy +=
        "\n• Implement strong cybersecurity measures.\n";
    }

    result.style.display="block";

    result.innerHTML = `
<h2>Responsible AI Usage Policy</h2>

<b>Organization:</b> ${orgName}

<b>Organization Type:</b> ${orgType}

<b>Scope:</b> ${scope}

<hr>

<h3>1. Purpose</h3>
This policy ensures responsible and ethical use of Artificial Intelligence.

<h3>2. Governance</h3>
The organization shall establish oversight for all AI systems.

<h3>3. Data Privacy</h3>
AI systems must protect personal information and comply with regulations.

<h3>4. Fairness and Accountability</h3>
AI systems should avoid discrimination and bias.

<h3>5. Transparency</h3>
Users should understand how AI decisions are made.

<h3>6. Security</h3>
Appropriate cybersecurity controls must be implemented.

<h3>7. Regulatory Compliance</h3>
This policy aligns with relevant regulations including India's DPDP Act.

<h3>Additional Recommendations</h3>
${additionalPolicy}

<h3>Conclusion</h3>
The organization commits to ethical, transparent, secure, and responsible AI usage.
`;
}