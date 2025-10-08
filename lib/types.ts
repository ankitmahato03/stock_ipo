export enum ipo_status {
    open = "open",
    closed = "closed",
    upcoming = "upcoming",
}

export interface Ipo {
    id: number;
    title: string;
    lotSize: number;
    priceBand: string;
    openDate: string;
    closeDate: string;
    issueSize: string;
    issueType: string;
    listingDate: string;
    imageUrl: string;
    status: ipo_status;
}