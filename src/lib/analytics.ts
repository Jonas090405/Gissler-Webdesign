declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function grantConsent() {
  if (typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
    analytics_storage: "granted",
  });
}

export function denyConsent() {
  if (typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
}

export function hasConsent(): boolean {
  return localStorage.getItem("cookie-consent") === "granted";
}
