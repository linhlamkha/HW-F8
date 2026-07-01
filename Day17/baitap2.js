const comments = [
    {
        id: 1,
        user: "An",
        content: "Sản phẩm rất tốt!",
        rating: 5,
        verified: true,
        likes: 12,
    },
    { id: 2, user: "", content: "ok", rating: 3, verified: false, likes: 0 },
    {
        id: 3,
        user: "Bình",
        content: "Mua lần 2 rồi, vẫn chất lượng",
        rating: 4,
        verified: true,
        likes: 8,
    },
    {
        id: 4,
        user: "Chi",
        content: "   ",
        rating: null,
        verified: false,
        likes: 2,
    },
    {
        id: 5,
        user: "Duy",
        content: "Giao hàng nhanh, đóng gói cẩn thận, sẽ ủng hộ tiếp!",
        rating: 5,
        verified: true,
        likes: 20,
    },
    {
        id: 6,
        user: null,
        content: "Tệ quá",
        rating: 1,
        verified: false,
        likes: 0,
    },
    {
        id: 7,
        user: "Em",
        content: "Bình thường",
        rating: 3,
        verified: true,
        likes: 1,
    },
];

// Hàm 1
function isValidComment(comment) {
    const user = comment.user;
    const content = comment.content;
    const rating = comment.rating;
    return (
        typeof user === "string" &&
        user.trim().length > 0 &&
        typeof content === "string" &&
        content.trim().length >= 5 &&
        typeof rating === "number" &&
        rating <= 5
    );
}

console.log(isValidComment(comments[0])); // true
console.log(isValidComment(comments[1])); // false  (user rỗng, content quá ngắn)
console.log(isValidComment(comments[3])); // false  (content chỉ có khoảng trắng, rating null)
console.log(isValidComment(comments[5])); // false  (user null)

// Hàm 2
function filterValidComments(comments) {
    return comments.filter((comment) => isValidComment(comment));
}
console.log(filterValidComments(comments));
// [comments[0], comments[2], comments[4], comments[6]]
// id: 1, 3, 5, 7

// Hàm 3
function getCommentStats(validComments) {
    const total = validComments.length;
    let sumRating = 0;
    let totalLikes = 0;
    let verifiedCount = 0;
    let topComment = validComments[0];

    for (const comment of validComments) {
        sumRating += comment.rating;
        totalLikes += comment.likes;
        if (comment.verified) {
            verifiedCount++;
        }
        if (comment.likes > topComment.likes) {
            topComment = comment;
        }
    }
    const avgRating = Number((sumRating / total).toFixed(1));
    return {
        total,
        avgRating,
        totalLikes,
        verifiedCount,
        topComment,
    };
}
console.log(getCommentStats(filterValidComments(comments)));
// {
//   total: 4,
//   avgRating: 4.3,
//   totalLikes: 41,
//   verifiedCount: 3,
//   topComment: { id: 5, user: "Duy", content: "Giao hàng nhanh...", likes: 20, ... }
// }

// Hàm 4
function formatComment(comment) {
    const stars = "⭐".repeat(comment.rating);
    const user = comment.user ?? "Ẩn danh";
    let verified = "";
    if (comment.verified === true) {
        verified = " ✓";
    }
    return `${stars} | ${user}${verified} | ${comment.content} | 👍 ${comment.likes}`;
}
console.log(formatComment(comments[0]));
// "⭐⭐⭐⭐⭐ | An ✓ | Sản phẩm rất tốt! | 👍 12"

console.log(formatComment(comments[2]));
// "⭐⭐⭐⭐ | Bình ✓ | Mua lần 2 rồi, vẫn chất lượng | 👍 8"

console.log(formatComment(comments[6]));
// "⭐⭐⭐ | Em ✓ | Bình thường | 👍 1"
