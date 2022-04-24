export const apiUrl = import.meta.env.VITE_APP_API;

if (!apiUrl) console.error("Please provide the API URL");
