export interface Result {
    id: number;
    name: string;
    log: string;
    pdf_url: string;
    urls: string;
    total_score: number;
    scores: Score[];
}

export interface Factor {
    id: number;
    title: string;
    content: string;
    weight: number;
}

export interface Score {
    factor_id: number;
    factor_name: string;
    factor_weight: number;
    score: number;
    reason: string;
}
