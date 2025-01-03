import { Chakra_Petch, Poppins, Source_Code_Pro } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  weight: ["500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const chakraPetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-chakra-petch",
  display: "swap",
});

export const sourceCode = Source_Code_Pro({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sourceCode",
  display: "swap",
});

export const vudotronic = localFont({
  src: "../fonts/Vudotronic.otf",
  weight: "400",
  style: "normal",
  variable: "--font-vudotronic",
  display: "swap",
});
