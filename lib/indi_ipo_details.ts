export const indi_ipo_details = [
    {
        ipo_name: "Hero MotoCorp Ltd",
        ipo_image: "/ipo/herom.png",
        ipo_description: "Canara HSBC Life Insurance IPO is a book-built issue worth Rs 2,517.50 crores, consisting entirely of an Offer for Sale of 23.75 crore shares. The IPO opens on October 10, 2025, and closes on October 14, 2025. Allotment is expected on October 15, 2025, with listing on BSE and NSE set for October 17, 2025. The price band is Rs 100 – 106 per share, with a lot size of 140 shares, requiring a retail investment of Rs 14,840. sNII investment totals Rs 2,07,760, while bNII requires Rs 10,09,120. SBI Capital Markets is the lead manager.",
        issue_details: {
            issue_size: "Rs 2,517.50 crores",
            offer_for_sale: "23.75 crore shares",
            ipo_open_date: "October 10, 2025",
            ipo_close_date: "October 14, 2025",
            allotment_date: "October 15, 2025",
            listing_date: "October 17, 2025",
            price_band: "Rs 100 – 106 per share",
            lot_size: "140 shares",
            retail_investment: "Rs 14,840",
            sNII_investment: "Rs 2,07,760",
            bNII_investment: "Rs 10,09,120",
            lead_manager: "SBI Capital Markets",
        },
        market_lot_size: {
            retail_min: { lots: 1, shares: 140, amount: "Rs 14,840" },
            retail_max: { lots: 13, shares: 1820, amount: "Rs 1,93,960" },
            sNII_min: { lots: 14, shares: 1960, amount: "Rs 2,07,760" },
            sNII_max: { lots: 67, shares: 9380, amount: "Rs 9,93,160" },
            bNII_min: { lots: 68, shares: 9520, amount: "Rs 10,09,120" },
        }

    },
]


export const indi_ipo_reservation_details = [
    {
        ipo_name: "Hero MotoCorp Ltd",
        total_shares_offered: "10,18,15,860",
        reservation_breakdown: [
            {
                category: "Anchor Investor",
                shares: "3,04,81,539",
                percentage: "29.93%",
                max_allottees: null,
            },
            {
                category: "QIB",
                shares: "2,03,21,026",
                percentage: "19.94%",
                max_allottees: null,
            },
            {
                category: "NII (HNI)",
                shares: "1,52,40,770",
                percentage: "14.97%",
                max_allottees: null,
            },
            {
                category: "bNII < ₹10L",
                shares: "1,01,60,513",
                percentage: "10%",
                max_allottees: 55827,
            },
            {
                category: "sNII < ₹10L",
                shares: "50,80,257",
                percentage: "5%",
                max_allottees: 27914,
            },
            {
                category: "Retail",
                shares: "3,55,61,796",
                percentage: "34.93%",
                max_allottees: 2735523,
            },
            {
                category: "Employee",
                shares: "2,10,728",
                percentage: "0.21%",
                max_allottees: null,
            },
        ],
    },
];


export const IPO_DOCUMENTS = [
    {
        ipo_name: "Hero MotoCorp Ltd",
        documents: [
            {
                name: "RHP",
                url: "/documents/herom_rhp.pdf",
            },
            {
                name: "DRHP",
                url: "/documents/herom_abridged_prospectus.pdf",
            },
            {
                name: "ANCHOR",
                url: "/documents/herom_application_form.pdf",
            },
        ],
    },
]



