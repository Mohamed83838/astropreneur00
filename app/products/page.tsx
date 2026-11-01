import { products, partnerName } from "@/lib/data";
export default function Products() {
  return (<><h1>Products</h1><p className="sub">Catalogue with stock levels and supplying partner.</p>
    <div className="card"><table><thead><tr><th>SKU</th><th>Product</th><th>Category</th><th>Price (TND)</th><th>Stock</th><th>Partner</th></tr></thead><tbody>
      {products.map((p) => <tr key={p.sku}><td>{p.sku}</td><td><b>{p.name}</b></td><td>{p.category}</td><td>{p.price}</td>
        <td><span className={"badge" + (p.stock < 40 ? " warn" : "")}>{p.stock}</span></td><td>{partnerName(p.partnerId)}</td></tr>)}
    </tbody></table></div></>);
}
