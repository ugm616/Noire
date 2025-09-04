class CaseGenerator {
    constructor() {
        this.caseTypes = ['murder', 'theft', 'kidnapping'];
        this.suspects = [];
        this.evidence = [];
        this.solutions = [];
    }

    addSuspect(name, alibi) {
        this.suspects.push({ name, alibi });
    }

    addEvidence(type, description) {
        this.evidence.push({ type, description });
    }

    addSolution(solution) {
        this.solutions.push(solution);
    }

    generateCase() {
        const caseType = this.caseTypes[Math.floor(Math.random() * this.caseTypes.length)];
        const suspect = this.suspects[Math.floor(Math.random() * this.suspects.length)];
        const evidenceItem = this.evidence[Math.floor(Math.random() * this.evidence.length)];
        const solution = this.solutions[Math.floor(Math.random() * this.solutions.length)];

        return {
            caseType,
            suspect,
            evidence: evidenceItem,
            solution
        };
    }
}

// Example usage
const generator = new CaseGenerator();
generator.addSuspect('John Doe', 'Was at the library.');
generator.addEvidence('Fingerprint', 'Found on the weapon.');
generator.addSolution('The suspect was seen at the crime scene.');

const newCase = generator.generateCase();
console.log(newCase);