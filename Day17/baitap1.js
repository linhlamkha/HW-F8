// Hàm 1
function createSlug(text) {
    console.log(text.toLowerCase().replaceAll(" ", "-").replace(/[^a-z0-9-]/g, ""));
}
createSlug("MacBook Pro 2024"); // "macbook-pro-2024"
createSlug("Bàn Phím Cơ RGB"); // "bn-phm-c-rgb"  ← tiếng Việt mất dấu là bình thường
createSlug("iPhone 15 Pro Max!!!"); // "iphone-15-pro-max"

// Hàm 2
function generateOrderId(productName, quantity) {
    const productID = "ORD";
    const product = productName.slice(0, 3).toUpperCase();
    console.log(`${productID}-${product}-${quantity}-${productName.length}`);
}
generateOrderId("MacBook Pro", 2); // "ORD-MAC-2-11"
generateOrderId("iPhone 15", 5); // "ORD-IPH-5-9"
generateOrderId("Bàn phím cơ", 1); // "ORD-BÀN-1-11"

// Hàm 3
function formatPrice(price, currency = "VND") {
    if (currency === "VND") {
        console.log(price.toLocaleString("vi-VN") + " ₫");
    } else if (currency === "USD") {
        console.log(
            "$" +
                price.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                }),
        );
    }
}
formatPrice(2000000, "VND"); // "2.000.000 ₫"
formatPrice(2000, "USD"); // "$2,000.00"
formatPrice(500000); // "500.000 ₫"  (mặc định VND)

// Hàm 4
let baseUrl = "https://shop.vn";
let product = { name: "MacBook Pro 2024", id: 101, category: "laptop" };
function buildProductUrl(baseUrl, product) {
    const productName = product.name.toLowerCase().replaceAll(" ", "-");
    console.log(`${baseUrl}/${product.category}/${productName}?id=${product.id}`);
}

buildProductUrl(baseUrl, product);
// "https://shop.vn/laptop/macbook-pro-2024?id=101"

createSlug("MacBook Pro 2024"); // "macbook-pro-2024"
createSlug("iPhone 15 Pro Max!!!"); // "iphone-15-pro-max"
createSlug("Hello   World"); // "hello---world"

generateOrderId("MacBook Pro", 2); // "ORD-MAC-2-11"
generateOrderId("iPhone 15", 5); // "ORD-IPH-5-9"

formatPrice(2000000, "VND"); // "2.000.000 ₫"
formatPrice(1500, "USD"); // "$1,500.00"
formatPrice(300000); // "300.000 ₫"

buildProductUrl("https://shop.vn", {
    name: "MacBook Pro 2024",
    id: 101,
    category: "laptop",
});
// "https://shop.vn/laptop/macbook-pro-2024?id=101"

buildProductUrl("https://shop.vn", {
    name: "iPhone 15",
    id: 55,
    category: "phone",
});
// "https://shop.vn/phone/iphone-15?id=55"
