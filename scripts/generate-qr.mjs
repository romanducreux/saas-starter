import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = resolve(projectRoot, "public", "qr-code-kirevo-demo.svg");
const targetUrl = process.env.KIREVO_QR_URL ?? "https://www.kirevo.fr/demo";

const svg = await QRCode.toString(targetUrl, {
  type: "svg",
  errorCorrectionLevel: "H",
  margin: 2,
  width: 512,
  color: {
    dark: "#111827",
    light: "#FFFFFF",
  },
});

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, svg, "utf8");

console.log(`QR code généré pour ${targetUrl}`);
