export interface Collegue {

    pseudo: string;
    score: number;
    photoUrl: string;
}

export enum Avis {
    AIMER = "AIMER",
    DETESTER = "DETESTER"
}

export interface Vote {
    collegue: Collegue,
    avis: Avis
}


export interface Personne {
    matricule: string,
    pseudo: string,
    URLImage: string
}