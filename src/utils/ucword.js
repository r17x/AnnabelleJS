export const ucword = (text) =>
  String(text)
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, '  ')
    .replace(/\b[a-z]/g, (text) => text.toUpperCase())
