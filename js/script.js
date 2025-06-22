const output = document.getElementById("output");
const copyBtn = document.getElementById("copyBtn");

// 3 opcions: num, llarg, llati
function generarParagraf(ambInici) {
    const inici = "Baliga balaguipsum,";
    let par = ambInici ? inici + " " : "";

    const llargada = document.getElementById("paragraphLength").value;
    const barrejaLlati = document.getElementById("barrejaLlati").checked;
    let minFrases, maxFrases;

    switch(llargada) {
        case "curt":
            minFrases = 3;
            maxFrases = 6;
            break;
        case "llarg":
            minFrases = 15;
            maxFrases = 25;
            break;
        default:
            minFrases = 8;
            maxFrases = 16;
    }

    const numFrases = Math.floor(Math.random() * (maxFrases - minFrases + 1)) + minFrases;

    for (let i = 0; i < numFrases; i++) {
        const usaLlati = barrejaLlati && Math.random() < 0.3; // 30% probabilitat de frase llatina
        const frases = usaLlati ? frasesLlatines : frasesVegeta;
        const random = Math.floor(Math.random() * frases.length);
        par += frases[random] + " ";
    }
    return `<p>${par.trim()}</p>`;
}

document.getElementById("generateBtn").addEventListener("click", () => {
    const n = parseInt(document.getElementById("numParagraphs").value);
    output.innerHTML = "";

if (n === 9000) {
    output.innerHTML = `
        <p class="over9000-msg">Què collons fots txitxarel·lo?! <br> No podem generar text per sobre de 9000!!!</p>
        <img class="over9000-img" src="../images/over-9000.gif" alt="Over 9000">
    `;
    return;
}

    for (let i = 0; i < n; i++) {
        output.innerHTML += generarParagraf(i === 0);
    }
});

copyBtn.addEventListener("click", () => {
    const container = document.getElementById("output");
    const tempElement = document.createElement("textarea");
    tempElement.value = container.innerText;
    document.body.appendChild(tempElement);
    tempElement.select();
    try {
        document.execCommand("copy");
        copyBtn.textContent = "Copiat!";
    } catch (err) {
        copyBtn.textContent = "Error al copiar!";
    }
    document.body.removeChild(tempElement);
    setTimeout(() => {
        copyBtn.textContent = "📋 Copia";
    }, 2000);
});

// Codi per la la gestió de la Cache
// if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
//     navigator.serviceWorker.register('/service-worker.js')
//         .then(function(registration) {
//             console.log('Service Worker registered with scope:', registration.scope);
//         }).catch(function(error) {
//         console.log('Service Worker registration failed:', error);
//     });
// } else {
//     console.log('Service Worker registration failed: Insecure context');
// }