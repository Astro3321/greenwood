// Returns a object containing disorder category and risk level
// Object Format: {disorder, riskLevel}

/*  Disorder Category
    Category 'NU' --> Null 
    Category 'AU' --> Autism
    Category 'DX' --> Dyslexia
*/

/*  Risk Levels
    Category 0 --> No Risk
    Category 1 --> Low Risk
    Category 2 --> Moderate Risk
    Category 3 --> High Risk
*/

export default function genResult(ans){
    var result = {disorder: 'NU', riskLevel: 0};
    var autismRisk = 0;
    var dyslexiaRisk = 0;
    
    //Autism Detection 
    const sumAutism = ans.slice(0, 41).reduce((partialSum, a) => partialSum + a, 0)

    if (sumAutism < 70) { autismRisk = 0; }
    else if (sumAutism > 70 && sumAutism <= 106){ autismRisk = 1; }
    else if (sumAutism > 107 && sumAutism <= 153){ autismRisk = 2; }
    else if (sumAutism > 153){ autismRisk = 3; }
    
    // Dyslexia Detection
    const sumDyslexia = ans.slice(41, 71).reduce((partialSum, a) => partialSum + a, 0)
    const probability = (sumDyslexia / 150) * 100

    if (probability <= 25){ dyslexiaRisk = 0; }
    else if (probability > 25 && probability <= 50){ dyslexiaRisk = 1; }
    else if (probability > 50 && probability <=75){ dyslexiaRisk = 2; }
    else if (probability > 75){ dyslexiaRisk = 3; }

    // Risk Assessment
    if (autismRisk === 0 && dyslexiaRisk === 0){ return result; }

    if (autismRisk > dyslexiaRisk){ result.disorder = 'AU'; result.riskLevel = autismRisk; }
    else if (autismRisk < dyslexiaRisk){ result.disorder = 'DX'; result.riskLevel = dyslexiaRisk; }
    else { result.disorder = "AU DX"; result.riskLevel = autismRisk; }

    return result
}