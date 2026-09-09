const orders = [
    {
        id: 1,
        customer: "An",
        product: "Áo thun",
        category: "fashion",
        amount: 300000,
        status: "completed",
    },
    {
        id: 2,
        customer: "Bình",
        product: "iPhone 15",
        category: "electronics",
        amount: 25000000,
        status: "completed",
    },
    {
        id: 3,
        customer: "An",
        product: "Quần jean",
        category: "fashion",
        amount: 450000,
        status: "canceled",
    },
    {
        id: 4,
        customer: "Chi",
        product: "Tai nghe",
        category: "electronics",
        amount: 1200000,
        status: "completed",
    },
    {
        id: 5,
        customer: "Bình",
        product: "Giày",
        category: "fashion",
        amount: 900000,
        status: "pending",
    },
    {
        id: 6,
        customer: "An",
        product: "Sạc dự phòng",
        category: "electronics",
        amount: 350000,
        status: "completed",
    },
    {
        id: 7,
        customer: "Duy",
        product: "Áo khoác",
        category: "fashion",
        amount: 600000,
        status: "completed",
    },
];

// Hàm 1: getRevenueByCategory(orders)
function getRevenueByCategory(orders) {
    return orders.reduce((acc, order) => {
        if (order.status !== "completed") {
            return acc;
        }
        acc[order.category] = (acc[order.category] || 0) + order.amount;

        return acc;
    }, {});
}

console.log(getRevenueByCategory(orders));
// {
//   fashion: 900000,       // 300000 + 600000 (đơn canceled bị loại)
//   electronics: 26550000, // 25000000 + 1200000 + 350000
// }

// Hàm 2: getSpendingByCustomer(orders)
function getSpendingByCustomer(orders) {
    return orders.reduce((acc, order) => {
        if (order.status !== "completed") {
            return acc;
        }
        acc[order.customer] = (acc[order.customer] || 0) + order.amount;
        return acc;
    }, {});
}
console.log(getSpendingByCustomer(orders));
// {
//   An: 650000,      // 300000 + 350000
//   Bình: 25000000,
//   Chi: 1200000,
//   Duy: 600000,
// }

// Hàm 3: getOrderCountByStatus(orders)
function getOrderCountByStatus(orders) {
    return orders.reduce((acc, order) => {
        acc[order.status] = (acc[order.status] || 0) + 1;

        return acc;
    }, {});
}
console.log(getOrderCountByStatus(orders));
// { completed: 5, canceled: 1, pending: 1 }

// Hàm 4: getTopCustomer(orders)
function getTopCustomer(orders) {
    const result = orders.reduce(
        (acc, order) => {
            if (order.status !== "completed") {
                return acc;
            }

            acc[order.customer] = (acc[order.customer] || 0) + order.amount;

            if (acc[order.customer] > acc.maxAmount) {
                acc.maxAmount = acc[order.customer];
                acc.customer = order.customer;
            }

            return acc;
        },
        {
            customer: null,
            maxAmount: -Infinity,
        },
    );

    return {
        customer: result.customer,
        total: result.maxAmount,
    };
}

console.log(getTopCustomer(orders));
// { customer: "Bình", total: 25000000 }

// Hàm 5: getFullReport(orders)
function getFullReport(orders) {
    const initialValue = {
        revenueByCategory: {},
        spendingByCustomer: {},
        statusCount: {},
        totalRevenue: 0,
    };
    return orders.reduce((acc, order) => {
        acc.statusCount[order.status] =
            (acc.statusCount[order.status] || 0) + 1;
        if (order.status !== "completed") {
            return acc;
        }
        acc.spendingByCustomer[order.customer] =
            (acc.spendingByCustomer[order.customer] || 0) + order.amount;
        acc.revenueByCategory[order.category] =
            (acc.revenueByCategory[order.category] || 0) + order.amount;
        acc.totalRevenue += order.amount;

        return acc;
    }, initialValue);
}

console.log(getFullReport(orders));
// {
//   revenueByCategory: { fashion: 900000, electronics: 26550000 },
//   spendingByCustomer: { An: 650000, Bình: 25000000, Chi: 1200000, Duy: 600000 },
//   statusCount: { completed: 5, canceled: 1, pending: 1 },
//   totalRevenue: 27450000
// }
