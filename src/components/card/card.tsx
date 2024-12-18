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
        <div style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            width: "250px"
          }}>
            <img src={item.img} alt={item.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <h3>{item.title}</h3>
            <p><strong>RAM/Storage:</strong> {item.rame}</p>
            <p><strong>Color:</strong> {item.color}</p>
            <p><strong>Brand:</strong> {item.brand}</p>
            <p><strong>Price:</strong> {item.price.toLocaleString()} so'm</p>
          </div>
    );
  };