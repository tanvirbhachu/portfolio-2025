import { ImageResponse } from "@vercel/og";

export const runtime = "edge"; // Use Edge runtime for better performance

export async function GET(request: Request) {
  const orbitron = await fetch(
    new URL("@/styles/orbitron-semibold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Default Title";

  const image =
    "https://images.unsplash.com/photo-1659698376016-ae05fd9079d0?q=80&w=1632&auto=format&fit=crop";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          fontWeight: 600,
          color: "white",
        }}
      >
        <img
          src={image}
          alt=""
          width={1050}
          height={549}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "66%",
            width: "100%",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)",
          }}
        />
        <h1
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            margin: 0,
            fontSize: 60,
            fontFamily: "Orbitron",
            maxWidth: 900,
            whiteSpace: "pre-wrap",
          }}
        >
          {title}
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Orbitron",
          data: orbitron,
          style: "normal",
        },
      ],
    }
  );
}
