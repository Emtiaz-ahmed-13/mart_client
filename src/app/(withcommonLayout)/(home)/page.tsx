"use client";
import Category from "@/components/modules/home/Category";
import FeaturedProducts from "@/components/modules/home/FeaturedProducts";
import HeroSection from "@/components/modules/home/HeroSection";
import { useUser } from "@/context/UserContext";

export default function Home() {
  const user = useUser();

  console.log(user);
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <Category />
    </div>
  );
}
