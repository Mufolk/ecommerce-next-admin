import React from "react";
import Layout from "../components/Layout/Layout";
import Link from "next/link";

export default function Products() {
  return <Layout>
    <Link className="btn-primary" href={'/products/new'}> Add New Product</Link>
  </Layout>;
}
