import { useEffect, useState } from "react";

export type CountryCode = string;

type ConsumerRow = {
  currency: string; symbol: string;
  flower: string; mini: string; classic: string; legacy: string;
};

type InvitationRow = {
  currency: string; symbol: string;
  basic: string; standard: string; video: string; together: string;
};

type EnterpriseRow = {
  currency: string;
  starter: string;   // pre-formatted with symbol
  standard: string;  // pre-formatted with symbol
  signature: string; // pre-formatted with symbol
};

// -------------------- Consumer --------------------
const c = (currency: string, symbol: string, flower: string, mini: string, classic: string, legacy: string): ConsumerRow =>
  ({ currency, symbol, flower, mini, classic, legacy });

const USD_CONSUMER = c("USD", "$", "9.99", "49", "149", "299");

export const CONSUMER_PRICING: Record<string, ConsumerRow> = {
  US: USD_CONSUMER,
  CA: c("CAD", "$", "9.99", "49", "149", "299"),
  GB: c("GBP", "£", "7.99", "39.99", "119.99", "239.99"),
  AU: c("AUD", "A$", "14.99", "64.99", "229", "449"),
  ZA: c("ZAR", "R", "129", "599", "1,899", "3,799"),
  ZM: c("ZMW", "K", "99", "499", "1,499", "2,999"),
  KE: c("KES", "KSh", "799", "3,899", "11,899", "23,999"),
  UG: c("UGX", "USh", "19,999", "95,999", "292,999", "586,999"),
  RW: c("RWF", "FRw", "7,299", "35,999", "108,999", "218,999"),
  DZ: c("DZD", "DA", "1,049", "5,099", "15,499", "30,999"),
  NG: c("NGN", "₦", "4,999", "24,999", "74,999", "149,999"),
  AE: c("AED", "AED", "36.99", "179", "549", "1,099"),
  QA: c("QAR", "QAR", "36.99", "179", "549", "1,099"),
  IE: c("EUR", "€", "8.99", "42", "129", "259"),
  DE: c("EUR", "€", "8.99", "42", "129", "259"),
  FR: c("EUR", "€", "8.99", "42", "129", "259"),
  NL: c("EUR", "€", "8.99", "42", "129", "259"),
  BE: c("EUR", "€", "8.99", "42", "129", "259"),
  FI: c("EUR", "€", "8.99", "42", "129", "259"),
  CH: c("CHF", "CHF", "7.99", "39", "119", "239"),
  SE: c("SEK", "SEK", "95", "469", "1,429", "2,869"),
  NO: c("NOK", "NOK", "99", "499", "1,529", "3,079"),
  DK: c("DKK", "DKK", "64", "314", "949", "1,899"),
  SA: c("SAR", "SAR", "37", "184", "559", "1,119"),
  KW: c("KWD", "KWD", "3.09", "14.99", "45.99", "91.99"),
  BH: c("BHD", "BHD", "3.79", "18.49", "55.99", "112"),
  OM: c("OMR", "OMR", "3.89", "18.99", "57.99", "115"),
  SG: c("SGD", "SGD", "13.99", "65.99", "199", "399"),
  HK: c("HKD", "HKD", "78", "382", "1,169", "2,329"),
  NZ: c("NZD", "NZD", "16.99", "80.99", "249", "499"),
  MX: c("MXN", "MX$", "179", "879", "2,699", "5,399"),
  IN: c("INR", "₹", "549", "2,649", "8,099", "16,199"),
  PH: c("PHP", "₱", "409", "1,989", "5,999", "12,199"),
  MY: c("MYR", "RM", "35", "172", "529", "1,059"),
  ID: c("IDR", "Rp", "89,999", "439,999", "1,349,000", "2,699,000"),
  TH: c("THB", "฿", "234", "1,149", "3,499", "6,999"),
  VN: c("VND", "₫", "126,999", "622,999", "1,899,000", "3,799,000"),
  GH: c("GHS", "GH₵", "69", "342", "1,049", "2,099"),
  TZ: c("TZS", "TSh", "10,799", "52,999", "159,999", "322,999"),
  MA: c("MAD", "DH", "55", "269", "819", "1,649"),
  EG: c("EGP", "E£", "224", "1,099", "3,349", "6,729"),
  BW: c("BWP", "P", "99", "499", "1,529", "3,049"),
  NA: c("NAD", "N$", "109", "535", "1,629", "3,269"),
  JO: c("JOD", "JD", "3.89", "19", "57.99", "116"),
};

// -------------------- Invitation --------------------
const i = (currency: string, symbol: string, basic: string, standard: string, video: string, together: string): InvitationRow =>
  ({ currency, symbol, basic, standard, video, together });

const USD_INVITATION = i("USD", "$", "39.99", "69.99", "129.99", "199.99");

export const INVITATION_PRICING: Record<string, InvitationRow> = {
  US: USD_INVITATION,
  CA: i("CAD", "$", "39.99", "69.99", "129.99", "199.99"),
  GB: i("GBP", "£", "31.99", "55.99", "103.99", "159.99"),
  AU: i("AUD", "A$", "59.99", "104.99", "194.99", "299.99"),
  ZA: i("ZAR", "R", "499", "899", "1,699", "2,599"),
  ZM: i("ZMW", "K", "400", "700", "1,300", "2,000"),
  KE: i("KES", "KSh", "3,199", "5,599", "10,399", "15,999"),
  UG: i("UGX", "USh", "78,999", "136,999", "254,999", "392,999"),
  RW: i("RWF", "FRw", "29,499", "51,499", "94,999", "145,999"),
  DZ: i("DZD", "DA", "4,199", "7,299", "13,499", "20,999"),
  NG: i("NGN", "₦", "19,999", "34,999", "64,999", "99,999"),
  AE: i("AED", "AED", "149", "249", "469", "729"),
  QA: i("QAR", "QAR", "149", "249", "469", "729"),
  IE: i("EUR", "€", "34.99", "59.99", "111.99", "171.99"),
  DE: i("EUR", "€", "34.99", "59.99", "111.99", "171.99"),
  FR: i("EUR", "€", "34.99", "59.99", "111.99", "171.99"),
  NL: i("EUR", "€", "34.99", "59.99", "111.99", "171.99"),
  BE: i("EUR", "€", "34.99", "59.99", "111.99", "171.99"),
  FI: i("EUR", "€", "34.99", "59.99", "111.99", "171.99"),
  CH: i("CHF", "CHF", "31.99", "55.99", "103.99", "159.99"),
  SE: i("SEK", "SEK", "384", "672", "1,249", "1,919"),
  NO: i("NOK", "NOK", "412", "721", "1,339", "2,059"),
  DK: i("DKK", "DKK", "256", "449", "832", "1,279"),
  SA: i("SAR", "SAR", "150", "262", "489", "749"),
  KW: i("KWD", "KWD", "12.29", "21.49", "39.99", "61.99"),
  BH: i("BHD", "BHD", "15.04", "26.99", "48.99", "75.99"),
  OM: i("OMR", "OMR", "15.49", "26.99", "49.99", "76.99"),
  SG: i("SGD", "SGD", "53.99", "93.99", "174.99", "267.99"),
  HK: i("HKD", "HKD", "312", "546", "1,014", "1,559"),
  NZ: i("NZD", "NZD", "65.99", "115.99", "214.99", "329.99"),
  MX: i("MXN", "MX$", "719", "1,259", "2,339", "3,589"),
  IN: i("INR", "₹", "2,169", "3,799", "7,049", "10,839"),
  PH: i("PHP", "₱", "1,629", "2,849", "5,279", "8,119"),
  MY: i("MYR", "RM", "141", "249", "459", "699"),
  ID: i("IDR", "Rp", "358,999", "627,999", "1,165,999", "1,792,999"),
  TH: i("THB", "฿", "939", "1,639", "3,049", "4,679"),
  VN: i("VND", "₫", "507,999", "888,999", "1,649,999", "2,539,999"),
  GH: i("GHS", "GH₵", "279", "489", "909", "1,399"),
  TZ: i("TZS", "TSh", "43,199", "75,599", "140,399", "215,999"),
  MA: i("MAD", "DH", "219", "384", "719", "1,099"),
  EG: i("EGP", "E£", "899", "1,579", "2,929", "4,499"),
  BW: i("BWP", "P", "409", "719", "1,329", "2,039"),
  NA: i("NAD", "N$", "439", "769", "1,419", "2,189"),
  JO: i("JOD", "JD", "15.99", "27.99", "50.99", "77.99"),
};

// -------------------- Enterprise --------------------
const e = (currency: string, starter: string, standard: string, signature: string): EnterpriseRow =>
  ({ currency, starter, standard, signature });

const USD_ENTERPRISE = e("USD", "$990", "$2,375", "$4,450");

export const ENTERPRISE_PRICING: Record<string, EnterpriseRow> = {
  US: USD_ENTERPRISE,
  CA: e("CAD", "C$990", "C$2,150", "C$3,800"),
  GB: e("GBP", "£790", "£1,875", "£3,450"),
  AU: e("AUD", "A$1,590", "A$3,725", "A$6,950"),
  ZA: e("ZAR", "R12,990", "R30,900", "R58,200"),
  ZM: e("ZMW", "K9,990", "K23,725", "K44,950"),
  KE: e("KES", "KSh79,499", "KSh189,999", "KSh356,999"),
  UG: e("UGX", "USh1,949,000", "USh4,659,000", "USh8,729,000"),
  RW: e("RWF", "FRw729,000", "FRw1,739,000", "FRw3,259,000"),
  DZ: e("DZD", "DA102,999", "DA246,999", "DA461,999"),
  NG: e("NGN", "₦524,999", "₦1,237,499", "₦2,324,999"),
  AE: e("AED", "AED3,839", "AED9,049", "AED16,999"),
  QA: e("QAR", "QAR3,839", "QAR9,049", "QAR16,999"),
  IE: e("EUR", "€910", "€1,980", "€3,495"),
  DE: e("EUR", "€910", "€1,980", "€3,495"),
  FR: e("EUR", "€910", "€1,980", "€3,495"),
  NL: e("EUR", "€910", "€1,980", "€3,495"),
  BE: e("EUR", "€910", "€1,980", "€3,495"),
  FI: e("EUR", "€910", "€1,980", "€3,495"),
  CH: e("CHF", "CHF790", "CHF1,720", "CHF3,040"),
  SE: e("SEK", "SEK9,555", "SEK20,750", "SEK36,670"),
  NO: e("NOK", "NOK10,300", "NOK22,360", "NOK39,520"),
  DK: e("DKK", "DKK6,365", "DKK13,825", "DKK24,435"),
  SA: e("SAR", "SAR3,710", "SAR8,060", "SAR14,250"),
  KW: e("KWD", "KWD304", "KWD660", "KWD1,167"),
  BH: e("BHD", "BHD372", "BHD808", "BHD1,429"),
  OM: e("OMR", "OMR381", "OMR828", "OMR1,463"),
  SG: e("SGD", "SGD1,275", "SGD2,775", "SGD4,900"),
  HK: e("HKD", "HKD7,770", "HKD16,880", "HKD29,830"),
  NZ: e("NZD", "NZD1,605", "NZD3,485", "NZD6,155"),
  MX: e("MXN", "MX$16,780", "MX$36,430", "MX$64,390"),
  IN: e("INR", "₹53,640", "₹116,490", "₹205,880"),
  PH: e("PHP", "₱40,190", "₱87,290", "₱154,280"),
  MY: e("MYR", "RM3,490", "RM7,580", "RM13,395"),
  ID: e("IDR", "Rp8,875,400", "Rp19,274,800", "Rp34,067,000"),
  TH: e("THB", "฿21,380", "฿46,440", "฿82,080"),
  VN: e("VND", "₫11,315,700", "₫24,574,500", "₫43,434,000"),
  GH: e("GHS", "GH₵7,670", "GH₵16,660", "GH₵29,450"),
  TZ: e("TZS", "TSh1,081,100", "TSh2,347,800", "TSh4,149,600"),
  MA: e("MAD", "DH5,880", "DH12,770", "DH22,570"),
  EG: e("EGP", "E£24,260", "E£52,680", "E£93,100"),
  BW: e("BWP", "P8,750", "P19,010", "P33,590"),
  NA: e("NAD", "N$12,990", "N$28,210", "N$49,860"),
  JO: e("JOD", "JD407", "JD884", "JD1,562"),
};

export const DEFAULT_COUNTRY: CountryCode = "US";
export const WHATSAPP_NUMBER = "260963510729";

let cached: CountryCode | null = null;
let inflight: Promise<CountryCode> | null = null;

async function detectCountry(): Promise<CountryCode> {
  if (cached) return cached;
  if (inflight) return inflight;
  inflight = (async () => {
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 2000);
      const res = await fetch("https://ipapi.co/json/", { signal: ctrl.signal });
      clearTimeout(t);
      if (!res.ok) throw new Error("geo fail");
      const data = (await res.json()) as { country_code?: string };
      const code = (data.country_code || "").toUpperCase();
      cached = code || DEFAULT_COUNTRY;
      return cached;
    } catch {
      cached = DEFAULT_COUNTRY;
      return DEFAULT_COUNTRY;
    }
  })();
  return inflight;
}

export function useCountry(): CountryCode {
  const [country, setCountry] = useState<CountryCode>(cached ?? DEFAULT_COUNTRY);
  useEffect(() => {
    if (cached) { setCountry(cached); return; }
    let active = true;
    detectCountry().then((c) => { if (active) setCountry(c); });
    return () => { active = false; };
  }, []);
  return country;
}

export function useConsumerPricing() {
  const country = useCountry();
  const row = CONSUMER_PRICING[country] ?? CONSUMER_PRICING[DEFAULT_COUNTRY];
  return { country, ...row };
}
export function useInvitationPricing() {
  const country = useCountry();
  const row = INVITATION_PRICING[country] ?? INVITATION_PRICING[DEFAULT_COUNTRY];
  return { country, ...row };
}
export function useEnterprisePricing() {
  const country = useCountry();
  const row = ENTERPRISE_PRICING[country] ?? ENTERPRISE_PRICING[DEFAULT_COUNTRY];
  return { country, ...row };
}

export function formatPrice(symbol: string, amount: string) {
  return `${symbol}${amount}`;
}

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
