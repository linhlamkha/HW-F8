const players = [
    {
        id: 1,
        name: "DragonSlayer",
        scores: [120, 85, 200, 95],
        level: 8,
        badge: "gold",
    },
    { id: 2, name: "NightWolf", scores: [60, 75, 50], level: 5, badge: null },
    {
        id: 3,
        name: "StarQueen",
        scores: [300, 250, 180, 90, 120],
        level: 12,
        badge: "diamond",
    },
    { id: 4, name: "IronFist", scores: [40, 30], level: 2, badge: null },
    {
        id: 5,
        name: "ShadowBlade",
        scores: [150, 200, 175],
        level: 9,
        badge: "silver",
    },
];

// Hàm 1
function getTotalScore(player) {
    const scores = player.scores;
    let total = 0;
    for (const score of scores) {
        total += score;
    }
    return total;
}
console.log(getTotalScore(players[0])); // 500
console.log(getTotalScore(players[1])); // 185
console.log(getTotalScore(players[2])); // 940

// Hàm 2
function getRanking(players) {
    const result = players.map((player) => {
        return {
            name: player.name,
            totalScore: getTotalScore(player),
            badge: player.badge ?? "none",
        };
    });
    result.sort((a, b) => b.totalScore - a.totalScore);
    const ranking = result.map((player, index) => {
        return {
            rank: index + 1,
            name: player.name,
            totalScore: player.totalScore,
            badge: player.badge,
        };
    });
    return ranking;
}
console.log(getRanking(players));
// [
//   { rank: 1, name: "StarQueen",   totalScore: 940, badge: "diamond" },
//   { rank: 2, name: "ShadowBlade", totalScore: 525, badge: "silver"  },
//   { rank: 3, name: "DragonSlayer",totalScore: 500, badge: "gold"    },
//   { rank: 4, name: "NightWolf",   totalScore: 185, badge: "none"    },
//   { rank: 5, name: "IronFist",    totalScore: 100, badge: "none"    },
// ]

// Hàm 3
function getTopPlayers(players, n) {
    const result = players.map((player) => {
        return {
            name: player.name,
            totalScore: getTotalScore(player),
        };
    });
    result.sort((a, b) => b.totalScore - a.totalScore);
    return result.slice(0, n).map((player) => player.name);
}
console.log(getTopPlayers(players, 3));
// ["StarQueen", "ShadowBlade", "DragonSlayer"]

console.log(getTopPlayers(players, 1));
// ["StarQueen"]

// Hàm 4
function formatPlayerCard(player) {
    let badgeText = "";
    if (player.badge === "diamond") {
        badgeText = "💎 DIAMOND";
    } else if (player.badge === "gold") {
        badgeText = "🏅 GOLD";
    } else if (player.badge === "silver") {
        badgeText = "🥈 SILVER";
    }
    let result = `${player.name} | Lv.${player.level} | ${getTotalScore(player)} điểm`;
    if (badgeText) {
        result += ` | ${badgeText}`;
    }
    return result;
}
console.log(formatPlayerCard(players[0]));
// "DragonSlayer | Lv.8 | 500 điểm | 🏅 GOLD"

console.log(formatPlayerCard(players[1]));
// "NightWolf | Lv.5 | 185 điểm"

console.log(formatPlayerCard(players[2]));
// "StarQueen | Lv.12 | 940 điểm | 💎 DIAMOND"


getTotalScore(players[0])  // 500
getTotalScore(players[3])  // 70

getRanking(players)[0]
// { rank: 1, name: "StarQueen", totalScore: 940, badge: "diamond" }

getRanking(players)[4]
// { rank: 5, name: "IronFist", totalScore: 70, badge: "none" }

getTopPlayers(players, 3)
// ["StarQueen", "ShadowBlade", "DragonSlayer"]

formatPlayerCard(players[0])  // "DragonSlayer | Lv.8 | 500 điểm | 🏅 GOLD"
formatPlayerCard(players[1])  // "NightWolf | Lv.5 | 185 điểm"
formatPlayerCard(players[2])  // "StarQueen | Lv.12 | 940 điểm | 💎 DIAMOND"
