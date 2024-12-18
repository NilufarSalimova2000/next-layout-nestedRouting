import React from "react";

const ProductDetail = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;
    return <div className="container py-[50px]">Product detail {id}</div>;
};

export default ProductDetail;