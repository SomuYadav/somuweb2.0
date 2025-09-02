const mplProduct = {
  title: "MPL App",
  description: "Mobile Premier League app experiences: games, cricket, and poker views.",
  image: "/public/images/MPLProduct.png".replace("/public", ""), // normalize to /images/MPLProduct.png
  href: "https://www.mpl.live", // optional, adjust/remove if your schema differs
  tags: ["iOS", "Gaming", "Real-time", "Performance"],
}

// If products is an array in this file:
const products = [mplProduct]
// If products is imported from data, push there instead.

// In the JSX card renderer, ensure it uses product.image with next/image:
// <Image src={product.image || "/placeholder.svg"} alt={`${product.title} cover`} width={800} height={450} className="rounded-md object-cover" />
