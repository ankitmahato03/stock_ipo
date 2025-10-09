export enum ipo_status {
    open = "OPEN",
    closed = "CLOSED",
    upcoming = "UPCOMMING",
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