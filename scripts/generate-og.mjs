/**
 * OG image generator — runs at build time (via the `prebuild` npm script).
 *
 * Composes a 1200×630 PNG from a satori-friendly element tree and writes
 * it to `public/og.png`. The output is then served as a static asset and
 * referenced from the <meta property="og:image"> tag in Layout.astro.
 *
 * Why pre-built (not runtime): the site is fully static — generating once
 * at build means zero per-request cost, no Edge runtime, and the same
 * image cached aggressively by every CDN.
 */
import { writeFileSync, readFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const interBold = readFileSync(
  resolve(ROOT, "node_modules/@fontsource/inter/files/inter-latin-700-normal.woff")
);
const interRegular = readFileSync(
  resolve(ROOT, "node_modules/@fontsource/inter/files/inter-latin-400-normal.woff")
);

// All children must use display: flex (satori's only supported display
// for non-leaf elements). Strings are leaf text nodes.
const tree = {
  type: "div",
  props: {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "80px",
      position: "relative",
      // Reproduce the site's bubble palette as a soft gradient
      backgroundImage:
        "linear-gradient(135deg, #f5f3ee 0%, #fcecf0 35%, #ebeaff 70%, #e8f3ff 100%)",
      fontFamily: "Inter",
      color: "#161618",
    },
    children: [
      // Top eyebrow
      {
        type: "div",
        props: {
          style: {
            display: "flex",
            fontSize: 22,
            fontWeight: 400,
            color: "#5e5e66",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            marginBottom: 28,
          },
          children: "PORTFOLIO  ·  2026",
        },
      },
      // Big name
      {
        type: "div",
        props: {
          style: {
            display: "flex",
            fontSize: 110,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            color: "#161618",
          },
          children: "Johan Taveras",
        },
      },
      // Role with accent
      {
        type: "div",
        props: {
          style: {
            display: "flex",
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#6b5cff",
            marginTop: 16,
          },
          children: "Full-Stack Engineer",
        },
      },
      // Tagline
      {
        type: "div",
        props: {
          style: {
            display: "flex",
            fontSize: 28,
            fontWeight: 400,
            color: "#2c2c30",
            maxWidth: 920,
            lineHeight: 1.4,
            marginTop: 32,
          },
          children:
            "Internal systems, applied AI, and software that powers real operations.",
        },
      },
      // Bottom-left: accent dot row + URL
      {
        type: "div",
        props: {
          style: {
            display: "flex",
            position: "absolute",
            bottom: 50,
            left: 80,
            alignItems: "center",
            gap: 16,
          },
          children: [
            {
              type: "div",
              props: {
                style: { display: "flex", gap: 8 },
                children: [
                  {
                    type: "div",
                    props: {
                      style: {
                        display: "flex",
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: "#6b5cff",
                      },
                      children: "",
                    },
                  },
                  {
                    type: "div",
                    props: {
                      style: {
                        display: "flex",
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: "#ff8aa6",
                      },
                      children: "",
                    },
                  },
                  {
                    type: "div",
                    props: {
                      style: {
                        display: "flex",
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: "#7cc4ff",
                      },
                      children: "",
                    },
                  },
                ],
              },
            },
            {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  fontSize: 22,
                  fontWeight: 400,
                  color: "#5e5e66",
                  letterSpacing: "0.04em",
                },
                children: "johantaveras.vercel.app",
              },
            },
          ],
        },
      },
      // Bottom-right: CTA pill
      {
        type: "div",
        props: {
          style: {
            display: "flex",
            position: "absolute",
            bottom: 42,
            right: 80,
            alignItems: "center",
            gap: 10,
            padding: "16px 28px",
            borderRadius: 999,
            backgroundColor: "#161618",
            color: "#ffffff",
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: "-0.01em",
          },
          children: "Get in touch ›",
        },
      },
    ],
  },
};

const svg = await satori(tree, {
  width: 1200,
  height: 630,
  fonts: [
    { name: "Inter", data: interRegular, weight: 400, style: "normal" },
    { name: "Inter", data: interBold, weight: 700, style: "normal" },
  ],
});

const png = new Resvg(svg, {
  fitTo: { mode: "width", value: 1200 },
}).render().asPng();

const outPath = resolve(ROOT, "public/og.png");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, png);

console.log(`✓ OG image generated: public/og.png (${(png.length / 1024).toFixed(1)} KB)`);
