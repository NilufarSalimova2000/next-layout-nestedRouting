import { Card } from "@/components/card";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Phones - Home", // Sahifa sarlavhasi
  description: "Explore the latest phones available in our store", // Tavsif
};

export interface Type {
  img: string;
  title: string;
  rame: string;
  color: string;
  brand: string;
  price: number;
  id: number;
}

const Home = async () => {
  const data = await fetch("http://localhost:5000/phones", { cache: "no-store" });
  const res = await data.json();

  return (
    <>
      <div className="py-[50px]">
        <div className="container">
          <div className="flex flex-wrap gap-[25px] justify-between">
            {res?.map((item: Type) => (
              <div key={item.id}>
                <Link href={`/details/${item.id}`}>
                  <Card item={item} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
