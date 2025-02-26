export interface User {
    id: number;
    name: string;
    score: number;
}
export interface Factor {
    id: number;
    name: string;
    weight: number;
}

export interface Score {
    user_id: number;
    factor_id: number;
    score: number;
}

export interface Data {
    users: User[];
    factors: Factor[];
    scores: Score[];
}
