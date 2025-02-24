const herName = 'Putri';

function startProposal() {
    toggleSection('buildup-section', 'buildup-section'); // Ensure buildup is active
    displayBuildup();
}

function displayBuildup() {
    const buildupTitle = document.getElementById('buildup-title');
    const buildupText = document.getElementById('buildup-text');
    const questionButton = document.getElementById('question-button');
    buildupTitle.textContent = `Dear ${herName},`;

    const messages = [
        "From the moment I met you, my world changed forever.",
        "Your smile lights up my darkest days,",
        "And your laughter is my favorite song.",
        "I can’t imagine a future without you by my side."
    ];
    let index = 0;

    function showNextMessage() {
        if (index < messages.length) {
            buildupText.textContent += `${messages[index]}\n`;
            index++;
            setTimeout(showNextMessage, 2000); // 2-second delay between messages
        } else {
            questionButton.style.display = 'inline'; // Show the question button after buildup
        }
    }

    buildupText.textContent = '';
    showNextMessage();
}

function showQuestion() {
    toggleSection('buildup-section', 'question-section');
    document.getElementById('question-title').textContent = `${herName}, will you make me the happiest person alive?`;
}

function answer(choice) {
    toggleSection('question-section', 'response-section');
    const responseText = document.getElementById('response-text');

    if (choice === 'yes') {
        const bearArt = ".-\"\"\"\"\"\"\"\"-.\n .'          '.\n/   ʕ ˵• ₒ •˵ ʔ  \\\n: ,          : '\n `._         _.'\n    `\"'\"\"\"\"\"`";
        responseText.textContent = `YES!!! You've just made my dreams come true!\nI love you, ${herName}, forever and always.\n\n${bearArt}`;
    } else {
        responseText.textContent = `Oh... I respect your choice.\nI’ll always cherish you, ${herName}.\nIf you ever change your mind, I’ll be waiting with all my heart.`;
    }
}

function toggleSection(hideId, showId) {
    document.getElementById(hideId).classList.remove('active');
    const showSection = document.getElementById(showId);
    showSection.classList.add('active');
}