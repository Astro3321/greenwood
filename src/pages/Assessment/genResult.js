// Returns a object containing Risk Level(RL) for each disorder
// Object Format: {autismRL, adhdRL, dyslexiaRL, dyspraxiaRL, dysgraphiaRL, dyscalculiaRL}

/*  Risk Levels
    Category -1 --> N/A
    Category 0 --> No Risk
    Category 1 --> Low Risk
    Category 2 --> Moderate Risk
    Category 3 --> High Risk
*/

export default function genResult(ans){
    var result = {
        autismRL: "modtly",    
        adhdRL: -1, 
        dyslexiaRL: -1, 
        dyspraxiaRL: -1, 
        dysgraphiaRL: -1, 
        dyscalculiaRL: -1
    };
    
    // Autism Detection 
    const sumAutism = ans.slice(0, 41).reduce((partialSum, a) => partialSum + a, 0)

    if (sumAutism < 70) { result.autismRL = 0; }
    else if (sumAutism > 70 && sumAutism <= 106){ result.autismRL = 1; }
    else if (sumAutism > 107 && sumAutism <= 153){ result.autismRL = 2; }
    else if (sumAutism > 153){ result.autismRL = 3; }
    
    // Dyslexia Detection
    const sumDyslexia = ans.slice(41, 71).reduce((partialSum, a) => partialSum + a, 0)
    const probability = (sumDyslexia / 150) * 100

    if (probability <= 25){ result.dyslexiaRL = 0; }
    else if (probability > 25 && probability <= 50){ result.dyslexiaRL = 1; }
    else if (probability > 50 && probability <=75){ result.dyslexiaRL = 2; }
    else if (probability > 75){ result.dyslexiaRL = 3; }

    return result
}