import Image from "next/image";

interface Type {
  img: string;
  title: string;
  rame: string;
  color: string;
  brand: string;
  price: number;
  id: number;
}

export const Card = ({ item }: { item: Type }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 w-64 shadow-sm hover:shadow-lg transition-shadow bg-white">
      <div className="w-full h-[200px] relative">
        <Image
          src={item.img || "/default-image.jpg"} // Tasvir yo'q bo'lsa, default rasm
          alt={item.title || "No Title"} // Tasvir uchun matn
          layout="fill"
          className="object-cover rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mt-4">
        {item.title || "No Title"}
      </h3>
      <p className="text-sm text-gray-600 mt-1">
        <strong>RAM/Storage:</strong> {item.rame || "Not specified"}
      </p>
      <p className="text-sm text-gray-600 mt-1">
        <strong>Color:</strong> {item.color || "Not specified"}
      </p>
      <p className="text-sm text-gray-600 mt-1">
        <strong>Brand:</strong> {item.brand || "Unknown"}
      </p>
      <p className="text-sm text-gray-800 font-semibold mt-2">
        <strong>Price:</strong>{" "}
        {item.price ? `${item.price.toLocaleString()} so'm` : "Not available"}
      </p>
    </div>
  );
};
