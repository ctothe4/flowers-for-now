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
  starter: string; // one-time, pre-formatted with symbol
  growth: string;  // subscription per quarter, pre-formatted with symbol
};


// Consumer: Flower / Mini / Classic / Legacy
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
  IE: c("EUR", "€", "8.99", "42.99", "129.99", "259.99"),
  DE: c("EUR", "€", "8.99", "42.99", "129.99", "259.99"),
  FR: c("EUR", "€", "8.99", "42.99", "129.99", "259.99"),
  NL: c("EUR", "€", "8.99", "42.99", "129.99", "259.99"),
  BE: c("EUR", "€", "8.99", "42.99", "129.99", "259.99"),
  FI: c("EUR", "€", "8.99", "42.99", "129.99", "259.99"),
  EE: c("EUR", "€", "8.99", "42.99", "129.99", "259.99"),
  CH: c("CHF", "CHF", "9.49", "45.99", "139.99", "279.99"),
  SE: c("SEK", "", "99 kr", "469 kr", "1,429 kr", "2,879 kr"),
  NO: c("NOK", "", "99 kr", "479 kr", "1,459 kr", "2,929 kr"),
  DK: c("DKK", "", "65 kr", "319 kr", "979 kr", "1,959 kr"),
  SA: c("SAR", "SAR", "37.99", "184", "559", "1,119"),
  KW: c("KWD", "KD", "3.49", "15.99", "45.99", "91.99"),
  BH: c("BHD", "BD", "3.99", "18.99", "55.99", "111.99"),
  OM: c("OMR", "OMR", "3.99", "18.99", "57.99", "114.99"),
  SG: c("SGD", "S$", "12.99", "63.99", "192.99", "386.99"),
  HK: c("HKD", "HK$", "78.99", "384.99", "1,169", "2,349"),
  NZ: c("NZD", "NZ$", "17.99", "85.99", "259.99", "524.99"),
  MX: c("MXN", "$", "129", "639", "1,949", "3,899"),
  IN: c("INR", "₹", "389", "1,899", "5,769", "11,569"),
  MY: c("MYR", "RM", "30.99", "149", "459", "919"),
  PH: c("PHP", "₱", "339", "1,659", "5,039", "10,119"),
  ID: c("IDR", "Rp", "98,999", "484,999", "1,474,999", "2,959,999"),
  TH: c("THB", "฿", "209", "1,009", "3,069", "6,169"),
  VN: c("VND", "₫", "132,999", "649,999", "1,975,999", "3,964,999"),
  GH: c("GHS", "GH₵", "59.99", "289", "869", "1,749"),
  TZ: c("TZS", "TSh", "9,099", "44,599", "135,999", "271,999"),
  MA: c("MAD", "DH", "53.99", "259", "799", "1,599"),
  EG: c("EGP", "E£", "249", "1,199", "3,649", "7,329"),
  BW: c("BWP", "P", "89.99", "429", "1,319", "2,639"),
  NA: c("NAD", "N$", "129", "599", "1,899", "3,799"),
  JO: c("JOD", "JD", "3.99", "19.99", "58.99", "116.99"),
};

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
  IE: i("EUR", "€", "34.99", "61.99", "113.99", "174.99"),
  DE: i("EUR", "€", "34.99", "61.99", "113.99", "174.99"),
  FR: i("EUR", "€", "34.99", "61.99", "113.99", "174.99"),
  NL: i("EUR", "€", "34.99", "61.99", "113.99", "174.99"),
  BE: i("EUR", "€", "34.99", "61.99", "113.99", "174.99"),
  FI: i("EUR", "€", "34.99", "61.99", "113.99", "174.99"),
  EE: i("EUR", "€", "34.99", "61.99", "113.99", "174.99"),
  CH: i("CHF", "CHF", "37.99", "65.99", "121.99", "186.99"),
  SE: i("SEK", "", "385 kr", "675 kr", "1,249 kr", "1,919 kr"),
  NO: i("NOK", "", "389 kr", "685 kr", "1,269 kr", "1,959 kr"),
  DK: i("DKK", "", "259 kr", "459 kr", "849 kr", "1,309 kr"),
  SA: i("SAR", "SAR", "149", "259", "489", "749"),
  KW: i("KWD", "KD", "12.99", "21.99", "39.99", "61.99"),
  BH: i("BHD", "BD", "14.99", "26.99", "48.99", "74.99"),
  OM: i("OMR", "OMR", "15.99", "26.99", "49.99", "76.99"),
  SG: i("SGD", "S$", "51.99", "89.99", "167.99", "258.99"),
  HK: i("HKD", "HK$", "313.99", "548.99", "1,019", "1,569"),
  NZ: i("NZD", "NZ$", "69.99", "122.99", "227.99", "350.99"),
  MX: i("MXN", "$", "519", "909", "1,699", "2,599"),
  IN: i("INR", "₹", "1,549", "2,709", "5,029", "7,739"),
  MY: i("MYR", "RM", "123", "215", "399", "619"),
  PH: i("PHP", "₱", "1,349", "2,369", "4,399", "6,769"),
  ID: i("IDR", "Rp", "395,999", "692,999", "1,286,999", "1,979,999"),
  TH: i("THB", "฿", "829", "1,439", "2,679", "4,119"),
  VN: i("VND", "₫", "529,999", "927,999", "1,723,999", "2,651,999"),
  GH: i("GHS", "GH₵", "234", "409", "759", "1,169"),
  TZ: i("TZS", "TSh", "36,399", "63,699", "118,299", "181,999"),
  MA: i("MAD", "DH", "213", "373", "693", "1,069"),
  EG: i("EGP", "E£", "979", "1,719", "3,189", "4,899"),
  BW: i("BWP", "P", "349", "619", "1,149", "1,769"),
  NA: i("NAD", "N$", "499", "899", "1,699", "2,599"),
  JO: i("JOD", "JD", "15.99", "27.99", "50.99", "77.99"),
};

// Enterprise pricing (existing 13 countries; unlisted → USD fallback).
const e = (currency: string, starter: string, growth: string): EnterpriseRow =>
  ({ currency, starter, growth });

const USD_ENTERPRISE = e("USD", "$990", "$2,000");

export const ENTERPRISE_PRICING: Record<string, EnterpriseRow> = {
  US: USD_ENTERPRISE,
  GB: e("GBP", "£790", "£1,595"),
  AU: e("AUD", "A$1,590", "A$3,210"),
  ZA: e("ZAR", "R12,990", "R26,240"),
  ZM: e("ZMW", "K9,990", "K20,180"),
  NG: e("NGN", "₦525,000", "₦1,060,600"),
  AE: e("AED", "AED 3,840", "AED 7,760"),
  QA: e("QAR", "QAR 3,840", "QAR 7,760"),
  KE: e("KES", "KSh79,499", "KSh160,600"),
  UG: e("UGX", "USh1,949,000", "USh3,937,400"),
  RW: e("RWF", "FRw729,000", "FRw1,472,700"),
  DZ: e("DZD", "DA102,999", "DA208,100"),
  CA: e("CAD", "C$990", "C$2,000"),
  MX: e("MXN", "MX$16,780", "MX$33,890"),
  IN: e("INR", "₹53,640", "₹108,360"),
  PH: e("PHP", "₱40,190", "₱81,200"),
  IE: e("EUR", "€910", "€1,840"),
  DE: e("EUR", "€910", "€1,840"),
  FR: e("EUR", "€910", "€1,840"),
  NL: e("EUR", "€910", "€1,840"),
  BE: e("EUR", "€910", "€1,840"),
  FI: e("EUR", "€910", "€1,840"),
  EE: e("EUR", "€910", "€1,840"),
  CH: e("CHF", "CHF790", "CHF1,600"),
  SE: e("SEK", "kr9,555", "kr19,300"),
  NO: e("NOK", "kr10,300", "kr20,800"),
  DK: e("DKK", "kr6,365", "kr12,860"),
  SA: e("SAR", "SAR3,710", "SAR7,500"),
  KW: e("KWD", "KWD304", "KWD614"),
  BH: e("BHD", "BHD372", "BHD752"),
  OM: e("OMR", "OMR381", "OMR770"),
  SG: e("SGD", "S$1,275", "S$2,580"),
  HK: e("HKD", "HK$7,770", "HK$15,700"),
  NZ: e("NZD", "NZ$1,605", "NZ$3,240"),
  MY: e("MYR", "RM3,490", "RM7,050"),
  ID: e("IDR", "Rp8,875,400", "Rp17,930,000"),
  TH: e("THB", "฿21,380", "฿43,200"),
  VN: e("VND", "₫11,315,700", "₫22,860,000"),
  GH: e("GHS", "GH₵7,670", "GH₵15,500"),
  TZ: e("TZS", "TSh1,081,100", "TSh2,184,000"),
  MA: e("MAD", "DH5,880", "DH11,880"),
  EG: e("EGP", "E£24,260", "E£49,000"),
  BW: e("BWP", "P8,750", "P17,680"),
  NA: e("NAD", "N$12,990", "N$26,240"),
  JO: e("JOD", "JD407", "JD822"),
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
