export interface Options {
  autoConfig: boolean;
  debug: boolean;
}

export interface AdvancedMatching {
  ct: string;
  country: string;
  db: string;
  em: string;
  fn: string;
  ge: string;
  ln: string;
  ph: string;
  st: string;
  zp: string;
}

export interface Data {}

export interface AddPaymentInfo extends Data {
  content_category?: string;
  content_ids?: object[] | object;
  contents?: object[];
  currency?: string;
  value?: number;
}

/**
 * content_type required and at least one of content_ids or contents required
 * this version is compatible with dynamic ads
 */
export interface DynamicAdAddToCart extends Data {
  content_ids?: object[] | object;
  content_name?: string;
  content_type: string;
  contents?: object[];
  currency?: string;
  value?: number;
}

/**
 * this version is not compatible with dynamic ads
 */
export interface AddToCart extends Data {
  content_ids?: object[] | object;
  content_name?: string;
  content_type?: string;
  contents?: object[];
  currency?: string;
  value?: number;
}

export interface AddToWishlist extends Data {
  content_name?: string;
  content_category?: string;
  content_ids?: object[] | object;
  contents?: object[];
  currency?: string;
  value?: number;
}

export interface AddToWishlist extends Data {
  content_name?: string;
  content_category?: string;
  content_ids?: object[] | object;
  contents?: object[];
  currency?: string;
  value?: number;
}

export interface CompleteRegistration extends Data {
  content_name?: String;
  currency?: string;
  status?: string;
  value?: number;
}

export interface InitiateCheckout extends Data {
  content_category?: string;
  content_ids?: object[] | object;
  contents?: object[];
  currency?: string;
  num_items?: number;
  value?: number;
}

export interface Lead extends Data {
  content_category?: string;
  content_name?: string;
  currency?: string;
  value?: number;
}

/**
 * content_type required and at least one of content_ids or contents required
 * this version is compatible with dynamic ads
 */
export interface DynamicAdPurchase extends Data {
  content_ids?: object[] | object;
  content_name?: string;
  content_type: string;
  contents?: object[];
  currency: string;
  num_items?: number;
  value: number;
}

/**
 * this version is not compatible with dynamic ads
 */
export interface Purchase extends Data {
  content_ids?: object[] | object;
  content_name?: string;
  content_type?: string;
  contents?: object[];
  currency: string;
  num_items?: number;
  value: number;
}

export interface Search extends Data {
  content_category?: string;
  content_ids?: object[] | object;
  contents?: object[];
  currency?: string;
  search_string?: string;
  value?: number;
}

export interface StartTrial extends Data {
  currency?: string;
  predicted_ltv?: number;
  value: number;
}

export interface Subscribe extends Data {
  currency?: string;
  predicted_ltv?: number;
  value: number;
}

/**
 * content_type required and at least one of content_ids or contents required
 * this version is compatible with dynamic ads
 */
export interface DynamicAdViewContent extends Data {
  content_ids?: string[] | string;
  content_name?: string;
  content_type: string;
  contents?: object[];
  currency?: string;
  value?: number;
}

/**
 * this version is not compatible with dynamic ads
 */
export interface ViewContent extends Data {
  content_ids?: string[] | string;
  content_name?: string;
  content_type?: string;
  contents?: object[];
  currency?: string;
  value?: number;
}

export function init(
  pixelId: string,
  advancedMatching?: AdvancedMatching,
  options?: Options,
): void;
export function pageView(): void;
export function track(title: string, data?: Data | any): void;
export function trackCustom(title: string, data?: Data | any): void;
export function trackSingle(
  pixel: string,
  title: string,
  data?: Data | any,
): void;
export function trackSingleCustom(
  pixel: string,
  title: string,
  data?: Data | any,
): void;
export function fbq(...args: Array<unknown>): void;
export function revokeConsent(): void;
export function grantConsent(): void;
