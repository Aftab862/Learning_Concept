// Problem: Two Sum
// Logic: Har number ke liye check karo ke "target - current number" pehle se map me hai ya nahi.
// Agar hai → return indices, warna current number map me store karo.

function twoSum(nums, target) {
    let map = new Map(); // value → index

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let required = target - current;

        if (map.has(required)) {
            return [map.get(required), i]; // Found the pair
        }

        map.set(current, i); // store current number for future lookup
    }
}

const nums = [1, 2, 4, 6, 8];
const result = twoSum(nums, 9);
console.log("result :", result); // Output: [0, 3]


<!-- ---------------------------------------------------------------------------------------------- -->
// Problem: Find first repeating element in an array using Map
// Logic: Har number ke liye check karo ke woh pehle map me exist karta hai ya nahi. Agar karta hai → wahi first repeating element hai.

function firstRepeating(nums) {
    let map = new Map(); // number → presence

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];

        if (map.has(current)) return current; // Pehla repeat mil gaya
        map.set(current, true); // store number
    }

    return null; // agar repeat nahi hai
}

const nums = [3, 5, 2, 3, 7, 5];
console.log("First repeating element:", firstRepeating(nums)); // Output: 3
<!-- ---------------------------------------------------------------------------------------------------- -->
// Problem: Count frequency of each element using Map
// Logic: Har number ke liye map me count update karo. Agar pehle se exist karta hai → increment, else → initialize 1.

function countFrequency(nums) {
    let map = new Map(); // number → count

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        map.set(current, (map.get(current) || 0) + 1); // update count
    }

    return map;
}

const nums = [3, 5, 3, 2, 5, 3];
console.log("Frequency map:", countFrequency(nums));
// Output: Map(3) { 3 => 3, 5 => 2, 2 => 1 }
<!-- ------------------------------------------------------------------------------- -->
// Problem: Best Time to Buy and Sell Stock reutrn only the maxProfit
// Logic: Track minimum price; calculate profit for current price; update maximum profit.

function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {

        if (price < minPrice) {
            minPrice = price; // update min price
        }
        maxProfit = Math.max(maxProfit, price - minPrice);
    }

    return { "MaxProfit ": maxProfit, "MinPrice ": minPrice };
}

const prices = [1, 2, 3, 4, 5];
console.log("Maximum Profit:", maxProfit(prices)); // Output: 5
