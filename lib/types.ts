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

type IpoFinancial = {
    ipo_name: string;
    reservation_breakdown: {
        period: string;
        assets: string;
        total_income: string;
        profit_after_tax: string;
        ebitda: string;
        net_worth: string;
        reserves_and_surplus: string;
        total_borrowing: string;
    }[];
};