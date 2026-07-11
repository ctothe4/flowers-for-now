import { useEffect, useState } from "react";

export type CountryCode =
  | "US" | "CA" | "AU" | "GB" | "ZA" | "ZM" | "MX"
  | "KE" | "PH" | "UG" | "IN" | "RW" | "DZ";

type ConsumerRow = {
  currency: string; symbol: string;
  flower: string; mini: string; classic: string; legacy: string;
};

type InvitationRow = {
  currency: string; symbol: string;
  basic: string; standard: string; video: string; together: string;
};

type EnterpriseRow = {
  currency: string; symbol: string;
  starter: string; standard: string; signature: string;
};

export const CONSUMER_PRICING: Record<CountryCode, ConsumerRow> = {
  US: { currency: "USD", symbol: "$",    flower: "9.99",   mini: "49.00",    classic: "149.00",  legacy: "299.00" },
  CA: { currency: "CAD", symbol: "$",    flower: "9.99",   mini: "49.00",    classic: "149.00",  legacy: "299.00" },
  AU: { currency: "AUD", symbol: "A$",   flower: "14.99",  mini: "64.99",    classic: "229.00",  legacy: "449.00" },
  GB: { currency: "GBP", symbol: "£",    flower: "7.99",   mini: "39.99",    classic: "119.99",  legacy: "239.99" },
  ZA: { currency: "ZAR", symbol: "R",    flower: "129",    mini: "599",      classic: "1,899",   legacy: "3,799" },
  ZM: { currency: "ZMW", symbol: "K",    flower: "99",     mini: "499",      classic: "1,499",   legacy: "2,999" },
  MX: { currency: "MXN", symbol: "MX$",  flower: "169",    mini: "839",      classic: "2,499",   legacy: "4,999" },
  KE: { currency: "KES", symbol: "KSh ", flower: "799",    mini: "3,899",    classic: "11,899",  legacy: "23,999" },
  PH: { currency: "PHP", symbol: "₱",    flower: "439",    mini: "2,099",    classic: "6,499",   legacy: "12,999" },
  UG: { currency: "UGX", symbol: "USh ", flower: "19,999", mini: "95,999",   classic: "292,999", legacy: "586,999" },
  IN: { currency: "INR", symbol: "₹",    flower: "599",    mini: "2,899",    classic: "8,899",   legacy: "17,899" },
  RW: { currency: "RWF", symbol: "FRw ", flower: "7,299",  mini: "35,999",   classic: "108,999", legacy: "218,999" },
  DZ: { currency: "DZD", symbol: "DA ",  flower: "1,049",  mini: "5,099",    classic: "15,499",  legacy: "30,999" },
};

export const INVITATION_PRICING: Record<CountryCode, InvitationRow> = {
  US: { currency: "USD", symbol: "$",    basic: "39.99",  standard: "69.99",   video: "129.99",  together: "199.99" },
  CA: { currency: "CAD", symbol: "$",    basic: "39.99",  standard: "69.99",   video: "129.99",  together: "199.99" },
  AU: { currency: "AUD", symbol: "A$",   basic: "59.99",  standard: "104.99",  video: "194.99",  together: "299.99" },
  GB: { currency: "GBP", symbol: "£",    basic: "31.99",  standard: "55.99",   video: "103.99",  together: "159.99" },
  ZA: { currency: "ZAR", symbol: "R",    basic: "499",    standard: "899",     video: "1,699",   together: "2,599" },
  ZM: { currency: "ZMW", symbol: "K",    basic: "400",    standard: "700",     video: "1,300",   together: "2,000" },
  MX: { currency: "MXN", symbol: "MX$",  basic: "679",    standard: "1,199",   video: "2,199",   together: "3,399" },
  KE: { currency: "KES", symbol: "KSh ", basic: "3,199",  standard: "5,599",   video: "10,399",  together: "15,999" },
  PH: { currency: "PHP", symbol: "₱",    basic: "1,749",  standard: "3,049",   video: "5,649",   together: "8,699" },
  UG: { currency: "UGX", symbol: "USh ", basic: "78,999", standard: "136,999", video: "254,999", together: "392,999" },
  IN: { currency: "INR", symbol: "₹",    basic: "2,399",  standard: "4,199",   video: "7,799",   together: "11,999" },
  RW: { currency: "RWF", symbol: "FRw ", basic: "29,499", standard: "51,499",  video: "94,999",  together: "145,999" },
  DZ: { currency: "DZD", symbol: "DA ",  basic: "4,199",  standard: "7,299",   video: "13,499",  together: "20,999" },
};

export const ENTERPRISE_PRICING: Record<CountryCode, EnterpriseRow> = {
  US: { currency: "USD", symbol: "$",    starter: "990",       standard: "2,375",     signature: "4,450" },
  CA: { currency: "CAD", symbol: "$",    starter: "990",       standard: "2,375",     signature: "4,450" },
  AU: { currency: "AUD", symbol: "A$",   starter: "1,590",     standard: "3,725",     signature: "6,950" },
  GB: { currency: "GBP", symbol: "£",    starter: "790",       standard: "1,875",     signature: "3,450" },
  ZA: { currency: "ZAR", symbol: "R",    starter: "12,990",    standard: "30,900",    signature: "58,200" },
  ZM: { currency: "ZMW", symbol: "K",    starter: "9,990",     standard: "23,725",    signature: "44,950" },
  MX: { currency: "MXN", symbol: "MX$",  starter: "16,899",    standard: "40,499",    signature: "75,899" },
  KE: { currency: "KES", symbol: "KSh ", starter: "79,499",    standard: "189,999",   signature: "356,999" },
  PH: { currency: "PHP", symbol: "₱",    starter: "42,999",    standard: "102,999",   signature: "192,999" },
  UG: { currency: "UGX", symbol: "USh ", starter: "1,949,000", standard: "4,659,000", signature: "8,729,000" },
  IN: { currency: "INR", symbol: "₹",    starter: "59,099",    standard: "141,699",   signature: "265,499" },
  RW: { currency: "RWF", symbol: "FRw ", starter: "729,000",   standard: "1,739,000", signature: "3,259,000" },
  DZ: { currency: "DZD", symbol: "DA ",  starter: "102,999",   standard: "246,999",   signature: "461,999" },
};

export const DEFAULT_COUNTRY: CountryCode = "US";
export const WHATSAPP_NUMBER = "260963510729";

const SUPPORTED: CountryCode[] = [
  "US","CA","AU","GB","ZA","ZM","MX","KE","PH","UG","IN","RW","DZ",
];

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
      const code = (data.country_code || "").toUpperCase() as CountryCode;
      const resolved = SUPPORTED.includes(code) ? code : DEFAULT_COUNTRY;
      cached = resolved;
      return resolved;
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
  const c = useCountry();
  return { country: c, ...CONSUMER_PRICING[c] };
}
export function useInvitationPricing() {
  const c = useCountry();
  return { country: c, ...INVITATION_PRICING[c] };
}
export function useEnterprisePricing() {
  const c = useCountry();
  return { country: c, ...ENTERPRISE_PRICING[c] };
}

export function formatPrice(symbol: string, amount: string) {
  return `${symbol}${amount}`;
}

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
