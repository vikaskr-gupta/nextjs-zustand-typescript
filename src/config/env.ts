export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_ENV === 'production'
    ? process.env.NEXT_PUBLIC_API_BASE_URL
    : process.env.NEXT_PUBLIC_API_BASE_URL;
