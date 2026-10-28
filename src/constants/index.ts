import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export const NAV_ITEMS = [
  { label: "HOME", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
] as const;

export const LINKS = {
  whatsapp: "https://wa.me/916207641454",
} as const;

export const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/parth_powerhouse?igsh=MXFmN20ybmo2aXNvZw==",
    icon: FaInstagram,
  },
  {
    href: "https://wa.me/916207641454",
    icon: FaWhatsapp,
  },
] as const;

export const VIDEO_LINKS = {
  feature1: "/videos/feature-1.mp4",
  feature3: "/videos/feature-3.mp4",
  feature5: "/videos/feature-5.mp4",
  hero1: "/videos/hero-123.mp4",
  hero2: "/videos/hero-123.mp4",
  hero3: "/videos/hero-123.mp4",
};
