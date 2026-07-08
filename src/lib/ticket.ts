import crypto from 'crypto';

/** 16-byte random hex token — unguessable, short enough for clean QR codes. */
export function generateSecureToken(): string {
  return crypto.randomBytes(16).toString('hex');
}

/** Format a pence amount as a currency string, e.g. 1000 → "£10.00" */
export function formatAmount(amountInPence: number, currency: string): string {
  const symbol = currency.toUpperCase() === 'GBP' ? '£' : currency.toUpperCase() + ' ';
  return `${symbol}${(amountInPence / 100).toFixed(2)}`;
}
