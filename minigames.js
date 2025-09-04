// minigames.js

class LockpickingGame {
    constructor() {
        this.lockState = 'locked';
    }

    attemptPick() {
        // Logic for lockpicking
        console.log('Attempting to pick the lock...');
        if (Math.random() > 0.5) {
            this.lockState = 'unlocked';
            console.log('Lock picked successfully!');
        } else {
            console.log('Failed to pick the lock.');
        }
    }
}

class CodeBreakingGame {
    constructor() {
        this.code = Math.floor(Math.random() * 1000);
    }

    guessCode(guess) {
        // Logic for code breaking
        if (guess === this.code) {
            console.log('Code broken successfully!');
        } else {
            console.log('Incorrect guess. Try again.');
        }
    }
}

class FingerprintMatchingGame {
    constructor() {
        this.fingerprintDatabase = ['abc123', 'def456', 'ghi789'];
    }

    matchFingerprint(input) {
        // Logic for fingerprint matching
        if (this.fingerprintDatabase.includes(input)) {
            console.log('Fingerprint matched!');
        } else {
            console.log('No match found.');
        }
    }
}

class InterrogationGame {
    constructor() {
        this.questions = ['Where were you last night?', 'What do you know about the victim?'];
    }

    askQuestion(index) {
        // Logic for interrogation
        if (index < this.questions.length) {
            console.log(this.questions[index]);
        } else {
            console.log('No more questions.');
        }
    }
}

// Example of how to use the mini-games
const lockpicking = new LockpickingGame();
lockpicking.attemptPick();

const codeBreaking = new CodeBreakingGame();
codeBreaking.guessCode(123);

const fingerprintMatch = new FingerprintMatchingGame();
fingerprintMatch.matchFingerprint('abc123');

const interrogation = new InterrogationGame();
interrogation.askQuestion(0);