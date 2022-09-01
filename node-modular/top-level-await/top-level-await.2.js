// loading module dynamically
const strings = await import(`/i18n/${navigator.language}`);

// dependency fallback
let translations;
try {
  translations = await import("https://app.fr.json");
} catch {
  translations = await import("https://fallback.en.json");
}

// resource initialization
const connection = await dbConnector();
