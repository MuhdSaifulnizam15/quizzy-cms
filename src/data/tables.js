
import { faGoogle, faTwitter, faYahoo, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobeEurope, } from '@fortawesome/free-solid-svg-icons';

const pageVisits = [
    { id: 1, views: 4.525, returnValue: 255, bounceRate: 42.55, pageName: "/demo/admin/index.html" },
    { id: 2, views: 2.987, returnValue: 139, bounceRate: -43.52, pageName: "/demo/admin/forms.html" },
    { id: 3, views: 2.844, returnValue: 124, bounceRate: -32.35, pageName: "/demo/admin/util.html" },
    { id: 4, views: 1.220, returnValue: 55, bounceRate: 15.78, pageName: "/demo/admin/validation.html" },
    { id: 5, views: 505, returnValue: 3, bounceRate: -75.12, pageName: "/demo/admin/modals.html" }
];

const pageTraffic = [
    { id: 1, source: "Direct", sourceType: "Direct", trafficShare: 51, change: 2.45, sourceIcon: faGlobeEurope, sourceIconColor: "gray" },
    { id: 2, source: "Google Search", sourceType: "Search / Organic", trafficShare: 18, change: 17.67, sourceIcon: faGoogle, sourceIconColor: "info" },
    { id: 3, source: "youtube.com", sourceType: "Social", category: "Arts and Entertainment", rank: 2, trafficShare: 27, sourceIcon: faYoutube, sourceIconColor: "danger" },
    { id: 4, source: "yahoo.com", sourceType: "Referral", category: "News and Media", rank: 11, trafficShare: 8, change: -9.30, sourceIcon: faYahoo, sourceIconColor: "purple" },
    { id: 5, source: "twitter.com", sourceType: "Social", category: "Social Networks", rank: 4, trafficShare: 4, sourceIcon: faTwitter, sourceIconColor: "info" }
];

const pageRanking = [
    { id: 1, country: "United States", overallRank: 76, overallRankChange: -5, travelRank: 3, widgetsRank: 32, widgetsRankChange: 3 },
    { id: 2, country: "Canada", overallRank: 106, overallRankChange: 17, travelRank: 4, widgetsRank: 30, widgetsRankChange: 3 },
    { id: 4, country: "France", overallRank: 112, overallRankChange: 10, travelRank: 5, widgetsRank: 34, widgetsRankChange: 7 },
    { id: 5, country: "Japan", overallRank: 115, overallRankChange: 3, travelRank: 7, travelRankChange: 1, widgetsRank: 39, widgetsRankChange: -2 },
    { id: 3, country: "Germany", overallRank: 147, overallRankChange: -12, travelRank: 10, travelRankChange: -1, widgetsRank: 12, widgetsRankChange: -5 },
    { id: 6, country: "Italy", overallRank: 220, overallRankChange: -56, travelRank: 11, travelRankChange: -3, widgetsRank: 89, widgetsRankChange: 2 }
];

const invoiceItems = [
    { id: 1, item: "Origin License", description: "Extended License", price: "999,00", quantity: 1 },
    { id: 2, item: "Custom Services", description: "Instalation and Customization (cost per hour)", price: "150,00", quantity: 20 },
    { id: 3, item: "Hosting", description: "1 year subcription", price: "499,00", quantity: 1 },
    { id: 4, item: "Platinum Support", description: "1 year subcription 24/7", price: "3999,00", quantity: 1 },
];

export {
    pageVisits,
    pageTraffic,
    pageRanking,
    invoiceItems,
};