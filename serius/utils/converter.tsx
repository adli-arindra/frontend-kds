const aminoAcidToCodon: Record<string, string> = {
    A: "GCT", C: "TGT", D: "GAT", E: "GAA",
    F: "TTT", G: "GGT", H: "CAT", I: "ATT",
    K: "AAA", L: "TTA", M: "ATG", N: "AAT",
    P: "CCT", Q: "CAA", R: "CGT", S: "TCT",
    T: "ACT", V: "GTT", W: "TGG", Y: "TAT",
    "*": "TAA"
};

const codonToAminoAcid: Record<string, string> = {
    TTT: "F", TTC: "F", TTA: "L", TTG: "L",
    CTT: "L", CTC: "L", CTA: "L", CTG: "L",
    ATT: "I", ATC: "I", ATA: "I", ATG: "M",
    GTT: "V", GTC: "V", GTA: "V", GTG: "V",
    TCT: "S", TCC: "S", TCA: "S", TCG: "S",
    CCT: "P", CCC: "P", CCA: "P", CCG: "P",
    ACT: "T", ACC: "T", ACA: "T", ACG: "T",
    GCT: "A", GCC: "A", GCA: "A", GCG: "A",
    TAT: "Y", TAC: "Y", TAA: "*", TAG: "*",
    CAT: "H", CAC: "H", CAA: "Q", CAG: "Q",
    AAT: "N", AAC: "N", AAA: "K", AAG: "K",
    GAT: "D", GAC: "D", GAA: "E", GAG: "E",
    TGT: "C", TGC: "C", TGA: "*", TGG: "W",
    CGT: "R", CGC: "R", CGA: "R", CGG: "R",
    AGT: "S", AGC: "S", AGA: "R", AGG: "R",
    GGT: "G", GGC: "G", GGA: "G", GGG: "G"
};

function proteinToDNA(proteinSequence: string): string {
    if (!/^[A-Z*]+$/.test(proteinSequence.toUpperCase())) {
        throw new Error("Protein sequence must contain only uppercase letters A-Z or '*'.");
    }

    let dnaSequence = "";
    for (const aminoAcid of proteinSequence.toUpperCase()) {
        const codon = aminoAcidToCodon[aminoAcid];
        if (!codon) {
        throw new Error(`Invalid amino acid: ${aminoAcid}`);
        }
        dnaSequence += codon;
    }
    return dnaSequence;
}

function dnaToProtein(dnaSequence: string): string {
    if (!/^[ATGCatgc]+$/.test(dnaSequence)) {
        throw new Error("DNA sequence must contain only A, T, G, or C characters.");
    }

    const dna = dnaSequence.toUpperCase();
    if (dna.length % 3 !== 0) {
        throw new Error("DNA sequence length must be a multiple of 3.");
    }

    let protein = "";
    for (let i = 0; i <= dna.length - 3; i += 3) {
        const codon = dna.substring(i, i + 3);
        const aminoAcid = codonToAminoAcid[codon];
        if (!aminoAcid) {
        throw new Error(`Invalid codon: ${codon}`);
        }
        if (aminoAcid === "*") {
        break;
        }
        protein += aminoAcid;
    }
    return protein;
}

export { dnaToProtein, proteinToDNA };