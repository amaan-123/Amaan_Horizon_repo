import { useState } from "react";

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} //check
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>
        {product.priceValue >= 0 ? product.priceValue : product.priceText}
      </td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product, i) => {
    // if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
    //   return;
    // }
    const nameLower = String(product.name || "").toLowerCase();
    if (nameLower.indexOf(String(filterText || "").toLowerCase()) === -1)
      return;
    if (inStockOnly && !product.stocked) {
      return; //check
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={`${product.category}-${i}`}
        />
      );
    }
    rows.push(<ProductRow product={product} key={`${product.name}-${i}`} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}

const PRODUCTS = [
  // valid objects
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  // invalid objects
  // missing name, price as "$1.00", stocked as "true"
  { category: "Fruits", price: "$1.00", stocked: "true" },
  // category as null, price as number 3, stocked as undefined
  { category: null, price: 3, stocked: undefined, name: "Potato" },
  // price as null, stocked as 1
  { category: "Vegetables", price: null, stocked: 1, name: "Tomato" },
];

function sanitizeProducts(products) {
  return (products || []).map((p) => ({
    name: String(p?.name ?? "Unnamed"), //used
    priceText: String(p?.price ?? "NA"), //used
    priceValue: Number(String(p?.price ?? "").replace(/[^0-9.]/g, "")) || 0, //used
    stocked: Boolean(p?.stocked), //used
    category: String(p?.category ?? "Uncategorized"), //used
    raw: p,
  }));
}

export default function App() {
  const safeProducts = sanitizeProducts(PRODUCTS);
  return <FilterableProductTable products={safeProducts} />;
}
