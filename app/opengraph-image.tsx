import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} - ${siteConfig.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated at build time: this is the preview card shown when the site
// is shared on LinkedIn, WhatsApp, Facebook, etc.
export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    background: "#121821",
                    borderLeft: "24px solid #5cc48a",
                }}
            >
                <div style={{ fontSize: 88, fontWeight: 700, color: "#e2e8f0" }}>
                    {siteConfig.name}
                </div>
                <div style={{ fontSize: 48, color: "#5cc48a", marginTop: 16 }}>
                    {siteConfig.jobTitle}
                </div>
                <div style={{ fontSize: 30, color: "#94a3b8", marginTop: 40 }}>
                    React · Next.js · Node.js · MongoDB
                </div>
            </div>
        ),
        { ...size },
    );
}