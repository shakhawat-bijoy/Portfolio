import crypto from "node:crypto";

function tokenFor(password: string) {
  return crypto
    .createHash("sha256")
    .update(`portfolio:${password}`)
    .digest("hex");
}

export function adminToken() {
  return process.env.ADMIN_PASSWORD ? tokenFor(process.env.ADMIN_PASSWORD) : "";
}

export function isAdminToken(token?: string) {
  const expected = adminToken();
  return Boolean(
    expected &&
    token &&
    token.length === expected.length &&
    crypto.timingSafeEqual(Buffer.from(token), Buffer.from(expected)),
  );
}
