// Funktion zum Wechseln der Ansicht
function nextStep(stepId) {
    // Alle Karten verstecken
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('active');
        card.classList.add('hidden');
    });

    // Die gewünschte Karte anzeigen
    const nextCard = document.getElementById(stepId);
    nextCard.classList.remove('hidden');
    nextCard.classList.add('active');
}

// Prüfen, ob im Textfeld etwas steht
function checkInput() {
    const input = document.getElementById('omaName').value;
    const btn = document.getElementById('btn-name');
    
    if (input.trim().length > 0) {
        btn.disabled = false;
        btn.classList.remove('disabled');
    } else {
        btn.disabled = true;
        btn.classList.add('disabled');
    }
}

// Namen speichern und zu Schritt 3 gehen
function saveName() {
    const name = document.getElementById('omaName').value;
    // Namen in das Zertifikat schreiben
    document.getElementById('cert-name').innerText = name;
    nextStep('step-3');
}

// Falsche Antwort bei Aufgabe 3
function wrongAnswer() {
    const errorMsg = document.getElementById('error-msg');
    errorMsg.classList.remove('hidden');
}

// Quiz beenden und Zertifikat zeigen
function finishQuiz() {
    // Datum setzen
    const today = new Date();
    document.getElementById('date').innerText = today.toLocaleDateString('de-DE');
    
    // Konfetti-Effekt (optional, einfach simuliert durch Zertifikat anzeigen)
    nextStep('step-cert');
}
