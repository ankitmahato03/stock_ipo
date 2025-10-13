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
                percentage: "50%",
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

export const IPO_CONTATCT_REGISTRAR_DETAILS = [
    {
        ipo_name: "Hero MotoCorp Ltd",
        contact_details: {
            phone: "+91-22-2826 0320 / 2826 0321",
            email: "example@ipoidea.com",
            address: "Link Intime India Private Limited, C 101, 247 Park, L B S Marg, Vikhroli West, Mumbai - 400083",
            website: "https://heromoto.co.in/",
        },
        registrar_details: {
            phone: "+91-22-4918 6200 / 4918 6270",
            email: "example@ipoidea.com",
            address: "Link Intime India Private Limited, C 101, 247 Park, L B S Marg, Vikhroli West, Mumbai - 400083",
            website: "https://linkintime.co.in/",
        },
    },
]

export const INDI_IPO_FINANCIAL_DETAILS = [
    {
        ipo_name: "Hero MotoCorp Ltd",
        reservation_breakdown: [
            {
                period: "30 Jun 2025",
                assets: "₹1,647.60 Cr",
                total_income: "₹356.95 Cr",
                profit_after_tax: "₹43.30 Cr",
                ebitda: "₹79.74 Cr",
                net_worth: "₹593.67 Cr",
                reserves_and_surplus: "₹397.50 Cr",
                total_borrowing: "₹495.78 Cr",
            },
            {
                period: "31 Mar 2025",
                assets: "₹1,451.43 Cr",
                total_income: "₹1,296.22 Cr",
                profit_after_tax: "₹134.36 Cr",
                ebitda: "₹267.89 Cr",
                net_worth: "₹540.98 Cr",
                reserves_and_surplus: "₹525.57 Cr",
                total_borrowing: "₹393.17 Cr",
            },
            {
                period: "31 Mar 2024",
                assets: "₹1,109.49 Cr",
                total_income: "₹872.39 Cr",
                profit_after_tax: "₹91.01 Cr",
                ebitda: "₹173.09 Cr",
                net_worth: "₹385.00 Cr",
                reserves_and_surplus: "₹369.79 Cr",
                total_borrowing: "₹396.41 Cr",
            },
            {
                period: "31 Mar 2023",
                assets: "₹749.70 Cr",
                total_income: "₹419.00 Cr",
                profit_after_tax: "-₹16.89 Cr",
                ebitda: "₹43.97 Cr",
                net_worth: "₹286.38 Cr",
                reserves_and_surplus: "₹281.31 Cr",
                total_borrowing: "₹317.91 Cr",
            },
        ],
    },
];


