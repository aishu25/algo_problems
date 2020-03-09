// function two_sum(nums, target) {
//     var hashMap = {}
//     for (var i = 0; i < nums.length; i++) {
//         var out = target - nums[i]
//         if (out in hashMap) {
//             return [hashMap[out], i]
//         }
//         hashMap[nums[i]] = i;
//     }
//     return null;
// }

// console.log(two_sum([2,3,4,5], 9))

// function isPalindrome(x) {
//     x = x.toString()
//     console.log('x : ', x)

//     for (let start = 0; start < Math.floor(x.length/ 2); start++) {
//         const end = x.length - start - 1

//         if (x[start] !== x[end]) {
//             return false
//         }
//     }
//     return true    
// }

// console.log(isPalindrome(123));


// function simpleArraySum(ar) {
//     let res = 0;
//     for (var i= 0; i < ar.length; i++) {
//         console.log("i : ", i)
//         res += ar[i]
//         console.log("res : ", res)
//     }
//     return res
// }

// console.log(simpleArraySum([1,2,3,4,10,11]));

// function Maxmin(arr) {
//     var max = arr[0];
//     var min = arr[0];
//     var sum = arr[0];
//     for(var i = 1; i < arr.length; i++) {
//         sum += arr[i];
//         if (arr[i] > max) max = arr[i];
//         if (arr[i] < min) min = arr[i];
//     }
//     console.log (sum-max, sum-min);
// }

// console.log(Maxmin([6,4,3,1,7]));

// function birthdayCandle(arr) {
//     var counter = 0; var max = 0;

//     arr.forEach(item => {
//         if (item > max) {
//             max = item;
//             counter = 1;
//         } else if (item === max) {
//             counter++;
//         }
//     });
//     return counter;
// }
// console.log(birthdayCandle([5,2,5,4,5]))

// function timeConversion(str) {
//     const arr = str.slice(0,8).split[':'];
//     console.log('arr : ', arr);
//     arr[0] = (str.indexOf('PM') > -1) ? (arr[0] == 12 ? '12' : Number(arr[0]) + 12) : (arr[0] == 12 ? '00' : arr[0])
// }

// function longestPalindrome(str) {
//     max = ""
//     for (var i=0; i < str.length;i++) {
//         console.log("i : ", i)
//         for (var j = 0; j < 2; j++) {
//             console.log("j : ", j)
//             var left = i;
//             var right = i + j;
//             console.log("str[left] : ", str[left])
//             console.log("str[right] : ", str[right])
//             while (str[left] && str[left] === str[right]) {
//                 left--;
//                 console.log("left : ", left)
//                 right++;
//                 console.log("right : ", right)
//             }
//             console.log("max.length : ", max.length)
//             if ((right - left - 1) > max.length) {
//                 max = str.substring(left + 1, right )
//                 console.log("MAX : ", max)
//             }
//         }
//     }
//     return max;
// }

// console.log(longestPalindrome("babad"))

// function reverse(x) {
//     var flag = 0;
    
//     if ( x < 0) { 
//         flag = -1
//     }
//     else {
//         flag = 1
//     }
//     x *= flag
//     var result = 0;
//     while (x) {
//         result = result * 10 + x % 10
//         x = x / 10
//     }
//     if (result > 2147483647) {
//         return 0
//     }
//     else {
//         return result * flag
//     }
// };

// console.log( reverse(123));

// function productExceptSelf(nums) {
//     var output = [];
//     var leftMult = 1;
//     var rightMult = 1;

//     for (var i = nums.length - 1; i >= 0; i--) {
//         output[i] = rightMult;
//         console.log("i : ", i)
//         console.log("output [i] : ",output [i]);
//         console.log("nums[i] : ", nums[i])
//         rightMult *= nums[i]
//         console.log("rightMult : ", rightMult)
//     }

//     for (var k = 0; k < nums.length; k++) {
//         output[k] *= leftMult
//         console.log("k : ", k)
//         console.log("output [k] : ",output [k]);
//         leftMult *=nums[k]
//         console.log("leftMult : ", leftMult)
//     }
//     return output
// }

// console.log(productExceptSelf([1,2,3,4]));

// // Find the date on which the 2nd Tuesday in October comes for any year in the Gregorian Calendar.

// function getTuesday(year) {
//     var month = 9
//     var d = new Date(year, month)
    
//     // Get the first tuesday in the month
//     while (d.getDay() !== 2) {
//         d.setDate(d.getDate() + 1);
//     }
//     console.log(d)
//     d.setDate(d.getDate() + 7)
//     res = d.getDate()
//     return res;
// }

// console.log(getTuesday(1962));

// function getMondays() {
//     var d = new Date(),
//         month = d.getMonth(),
//         mondays = [];

//     d.setDate(1);

//     // Get the first Monday in the month
//     while (d.getDay() !== 1) {
//         d.setDate(d.getDate() + 1);
//     }

//     // Get all the other Mondays in the month
//     while (d.getMonth() === month) {
//         mondays.push(new Date(d.getTime()));
//         d.setDate(d.getDate() + 7);
//     }

//     return mondays;
// }

// function minWindow(s, t) {
//     var ans ='';
//     var map = {};

//     t.split('').forEach(element => {
//         map[element] = (map[element] || 0) + 1;
//     });
//     var count = Object.keys(map).length;

//     var l = 0;
//     var r = -1;

//     while(r < s.length){
//         if(count === 0) {
//             if(!ans || r-l+1 < 0){
//                 ans = s.slice(l , r+1)
//             }
//             console.log("ans : ", ans)
//             if(map[s[l]] !== undefined) {
//                 map[s[l]]++;
//             }
//             console.log(" l : ", l)
//             if(map[s[l]] > 0){
//                 count++;
//             }
//             console.log("count in IF statement: ", count)
//             l++;
//         }
//         else {
//             console.log("r before : ", r);
//             r++;
//             console.log("r after : ", r);
//             console.log("s[r] : ", s[r]);
//             if(map[s[r]] !== undefined) {
//                 map[s[r]]--;
//             }
//             console.log("MAP : ", map)
//             if(map[s[r]] === 0){
//                 count--;
//             }
//             console.log("MAP 1 : ", map);
//             console.log("COUNT : ", count);
//         }
//     }
//     return ans;
// }

// console.log(minWindow("ANDREWPEDIATRICIANDOCTOR", "ARE"))

// function removeDup(nums) {
//     var i = 0;
//     nums.forEach(element => {
//         console.log('element : ', element)
//         console.log('nums[i] : ', nums[i])
//         console.log("i before : ", i)
//         if (element !== nums[i]) {
//             console.log("[++i] : ", ++i)
//             nums[++i] = element
//         }
//         console.log("i : ", i)
//     });
//     return nums.length && i + 1;
// }
// console.log(removeDup([0,0,1,1,2,3,4]));


// function rotate (nums, k) {
//     var arr = [];
//     for (var i = 0; i < nums.length; i++) {
//         arr[(i+k) % nums.length] = nums[i];
//     }
//     return arr;;
// }

// console.log(rotate([1,2,3,4,5,6,7], 3))

//  function setZeroes(matrix) {
//     let firstColHasZero = false;
//     let firstRowHasZero = false;
    
//   // Check if first col has zero
  
//   for (let i = 0; i < matrix.length; i++) {
//     if (matrix[i][0] === 0) {
//       firstColHasZero = true;
//       break;
//     }
//   }

//   // Check if first row has zero
//   for (let j = 0; j < matrix[0].length; j++) {
//     if (matrix[0][j] === 0) {
//       firstRowHasZero = true;
//       break;
//     }
//   }

//   // Use first row and col as flags, set matrix[i][0] and matrix[0][j] to 0 if matrix[i][j] is 0
//   for (let i = 1; i < matrix.length; i++) {
//     for (let j = 1; j < matrix[0].length; j++) {
//       if (matrix[i][j] === 0) {
//         matrix[i][0] = 0;
//         matrix[0][j] = 0;
//       }
//     }
//   }

//   // Zero out cells based on flags in first row and col
//   for (let i = 1; i < matrix.length; i++) {
//     for (let j = 1; j < matrix[0].length; j++) {
//       if (matrix[i][0] === 0 || matrix[0][j] === 0) {
//         matrix[i][j] = 0;
//       }
//     }
//   }

//   // Zero out first col
//   if (firstColHasZero) {
//     for (let i = 0; i < matrix.length; i++) {
//       matrix[i][0] = 0;
//     }
//   }

//   // Zero out first row
//   if (firstRowHasZero) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       matrix[0][j] = 0;
//     }
//   }

//   return matrix
// };

// console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));
// console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))
// console.log(setZeroes([[1,1,1,1],[1,0,1,1],[1,1,0,0],[0,0,0,1]]))


// function arrayLength(arr) {
//   var map = {};
//   arr.forEach( el => {
//     map[el] = ( map[el] || 0) + 1
//   })
//   var sum = 0;

//   for(var el in map) {
//     if(map.hasOwnProperty(el)) {
//       sum += parseFloat(map[el])
//     }
//   }
//   return sum
// }
// console.log(arrayLength([3,5,1,4,2,6,2,1]))

// function plusOne(digits) {
//   for (let i = digits.length - 1; i > 0; i--) {
//     if(digits[i] === 9) {
//       digits[i] = 0;
//     }
//     else{
//       digits[i]++;
//       return digits
//     }
//   }
//   return [1, ...digits]
// }

// console.log(plusOne([9,8,9]));
// console.log(plusOne([1,2,1,9]));

// function containsDuplicate(arr) {
//   var map = {};
//   for(let i = 0; i < arr.length; i++) {
//     map[arr[i]] = (map[arr[i]] || 0) + 1
//     console.log(map[arr[i]])
//     if (map[arr[i]] > 1) {
//       return true
//     }
//   }
//   return false;
// }

// console.log(containsDuplicate([1,2,2,3,4,3]));

// function containsDup(nums, k){
//   var map = {};
//   for(var i = 0; i < nums.length; i++){
//     console.log("I : ", i)
//     if(map[nums[i]] >= 0 && i - map[nums[i]] <= k) {
//       console.log("MAP :", map)
//       return true;
//     }
//     map[nums[i]] = i
//     console.log("MAP** :", map)
//   }
//   return false;
// }

// console.log(containsDup([1,2,3,1],3));

// // given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.


// function firstMissingPositive(A) {
//   const map = {}
//   A.forEach(e=>map[e]=e)
//   console.log(map)
//   for(let i=1; true; i++){
//       if (!map[i]) {
//           return i
//       }
//   }
// }

// console.log(firstMissingPositive([1, 3, 4, 6, -4, -1, 2]))
// console.log(firstMissingPositive([-3,-1,-2,-1]))

// function findDuplicate(nums) {
//   let seen = new Set();
//   for (var i = 0; i < nums.length; i++) {
//     console.log(seen[i])
//     if (seen[i]) {
//       return nums[i]
//     }
//     seen.add(nums[i])
//   }
// }

// console.log(findDuplicate[1,3,4,2,2])


// function printPairs(arr) {
//   var res = [];
//   for(var i = 0; i < arr.length; i++) {
//     for (var j = i+1; j < arr.length; j++) {
//       if ( Math.abs(arr[i]) === Math.abs(arr[j]) && (arr[i] + arr[j] === 0)) {
//         res.push(Math.abs(arr[i]))
//       }
//     }
//   }

//   return res[res.length - 1]
// }

// console.log(printPairs([-1,2,-2,1,3,4]))

// function generateParantheses(n) {
//   var solution = [];
//   generateCombo = (leftCombo, rightCombo, partial) => {
//     if(leftCombo > rightCombo) return;
//     if(!leftCombo && !rightCombo) solution.push(partial)
//     if(leftCombo > 0) generateCombo( leftCombo - 1, rightCombo, partial + '(')
//     if(rightCombo > 0) generateCombo( leftCombo, rightCombo - 1, partial + ')')
//   }
//   generateCombo(n,n,'')
//   return solution;
// }

// console.log(generateParantheses(4));

// function letterCombinations(digits) {
//   var map = {
//     2: 'abc',
//     3: 'def',
//     4: 'ghi',
//     5: 'jkl',
//     6: 'mno',
//     7: 'pqrs',
//     8: 'tuv',
//     9: 'wxyz',
//   };
  
//   var result = [];
//   if (digits.length === 0) return [];
//   const generateCombo = (next_digits, combination) => {
//     if (digits.length === next_digits) {
//       result.push(combination)
//       return;
//     }
//     for (let c of map[digits[next_digits]]) {
//       generateCombo(next_digits + 1, combination + c)
//     }
//   }
//   generateCombo(0, '')
//   return result;
// }
// var letterCombinations = function(digits) {
//   if (digits.length === 0) return [];
//   const map = {
//       2: 'abc',
//       3: 'def',
//       4: 'ghi',
//       5: 'jkl',
//       6: 'mno',
//       7: 'pqrs',
//       8: 'tuv',
//       9: 'wxyz',
//   };
  
//   let result = []
//   const generateCombo = (next_digits, combination) => {
//       if(next_digits === digits.length) {
//           result.push(combination)
//           return;
//       }
//       for (let c of map[digits[next_digits]]) {
//           generateCombo(next_digits + 1, combination + c)
//       }
//   }
//   generateCombo(0 , '')
//   return result
  
// };

// console.log(letterCombinations(23));


// var defangIPaddr = function(address) {
//   var result = [];
//   for(var i = 0; i < address.length; i++) {
//       if (address[i] === ".") {
//         result += "[.]"
//       }
//       else {
//         result += address[i]
//       }
//   }
//   return result
// };

// console.log(defangIPaddr("1.1.1.1"))


// function numIslands(grid) {
//   const H = grid.length;
//   console.log(H)
//   console.log(grid[0].length)
//   const W = H && grid[0].length;
//   console.log(W)
//   let count = 0;
  
//   for (let r = 0; r < H; r++) {
//     for (let c = 0; c < W; c++) {
//       if (grid[r][c] === '0') continue;
      
//       count++;
//       dfs(r, c);
//     }
//   }
//   return count;
  
//   function dfs(r, c) {
//     if (r < 0 || c < 0 || r === H || c === W) return;
//     if (grid[r][c] === '0') return;
    
//     grid[r][c] = '0';
//     dfs(r-1, c);
//     dfs(r+1, c);
//     dfs(r, c-1);
//     dfs(r, c+1);
//   }
// }

// console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]))


// function trap (height) {
//   let left = 0;
//   let right = height.length - 1;
//   let leftMax = 0 
//   let rightMax = 0
//   let ans = 0

//   while (left < right){
//     leftMax = Math.max(height[left] ,leftMax)
//     if (leftMax > height[left]) {
//       ans += (leftMax - height[left])
//     }

//     rightMax = Math.max(height[right], rightMax)
//     if (rightMax > height[right]){
//       ans += (rightMax - height[right])
//     }

//     height[left] < height[right] ? left++ : right--;

//   }
//   return ans
// }

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));

// function happyNumber (n) {
//   let seen = [];
//   return helper(n , seen)
// }
//   const helper = (n, seen) => {
//     if ( n === 1) return true;
//     let result = 0;
//     if(seen[n]) return false
//     seen[n] = true
//     n = n.toString();
//     for (var i = 0; i < n.length; i++) {
//       result += Math.pow(n[i],2)
//     }
//     return helper(result, seen)
//   }

// console.log(happyNumber(4));

// function medianOfSortedArrays(nums1, nums2) {
//   if(nums1.length > nums2.length) return medianOfSortedArrays(nums2, nums1)

//   const x = nums1.length
//   const y = nums2.length

//   let lo = 0,
//       hi = x
//   while (lo <= hi) {
//     let partitionX = (x + y) / 2 | 0,
//         partitionY = (x + y + 1)/2 - partitionX | 0;
    
//     let maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
//     let minRightX = partitionX === x ? Infinity : nums1[partitionX];
    
//     let maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
//     let minRightY = partitionY === y ? Infinity : nums2[partitionY]

//     if(maxLeftX <= minRightY && maxLeftY <= minRightX) {
//       if ((x + y) & 1) return Math.max(maxLeftX, maxLeftY)
//       return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
//     }
//     else if (maxLeftX > minRightY) {
//       hi = partitionX - 1
//     }
//     else {
//       lo = partitionX + 1
//     }
//   }
// }

// console.log(medianOfSortedArrays([1,2],[3,4,5]))

// function slidingPuzzle(board) {
//   let min = Number.MAX_VALUE
//   const target = '1,2,3,4,5,0';
//   const cost = {};

//   for (let r = 0; r < 2; r++) {
//       console.log('r : ', r)
//       for(let c = 0; c < 3; c++){
//           console.log('c : ', c)
//           console.log('board[r][c] : ', board[r][c])
//           if(board[r][c] === 0) {
//               console.log("calling dfs")
//               dfs(r,c,0);
//               return min === Number.MAX_VALUE ? -1 : min;
//           }
//       }
//   }

//   function dfs(r,c,len) {
//       let hash = board[0].join(',') + ',' + board[1].join(',');
//       if(cost[hash] !== undefined && len >= cost[hash]) return;
//       cost[hash] = len;

//       if(hash === target) {
//           min = Math.min(min, len);
//           return
//       }

//       for (let i of[[-1,0],[1,0],[0,-1],[0,1]]) {
//           const [rr,cc] = [r+i[0], c+i[1]];
//           if (rr < 0 || cc < 0 || rr === 2 || cc === 3) continue;
          
//           [board[r][c], board[rr][cc]] = [board[rr][cc], board[r][c]];
//           dfs(rr, cc, len+1);
//           [board[r][c], board[rr][cc]] = [board[rr][cc], board[r][c]];
//       }
//   }
// }

// console.log(slidingPuzzle([[4,1,2],[5,0,3]]));
// console.log(slidingPuzzle([[4,1,2],[5,0,3]]));
// console.log(slidingPuzzle([[1,2,3],[4,0,5]]));


// function surroundedRegions(board) {
//   if(!board.length) return;

//   for (let i = 0; i < board.length; i++){
//     mark(board, i, 0)
//     mark(board, i, board[0].length - 1)
//   }

//   for(let i = 1; i < board[0].length - 1; i++){
//     mark(board, 0, i)
//     mark(board, board.length - 1, i)
//   }

//   for(let i = 0; i < board.length; i++) {
//     for(let j = 0; j < board[0].length; j++) {
//       if(board[i][j] === "O") board[i][j] === "X";
//       if(board[i][j] === "#") board[i][j] === "O";
//     }
//   }
// }

// const mark = (board, i, j) => {
//   if (i < 0 || i > board.length - 1 || j < 0 || j > board[0].length - 1) return;
//   if (board[i][j] !== "O") return;

//   board[i][j] = "#";

//   mark(board, i-1, j);
//   mark(board, i+1, j);
//   mark(board, i, j-1);
//   mark(board, i, j+1);
// }

// console.log(surroundedRegions([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]))

// function longestCommonPrefix(strs) {
//   if (!strs.length) return ""

//   for (let i = 0; i < strs[0].length; i++){
//     console.log("i : ", i)
//     for (let str of strs) {
//       console.log("str : ", str)
//       if(str[i] !== strs[0][i]){
//         console.log("if cond")
//         return str.slice(0,i)
//       }
//     }
//   }
//   return strs[0]
// }

// console.log(longestCommonPrefix(["flow","flower","flight"]));
// console.log(longestCommonPrefix(["abb","abc"]));

// ["abb","abc"] ==> "ab"

// function findDiagonalOrder(matrix) {
//     function reverse(){
//         x = -x;
//         y = -y;
//     }
//     if (matrix.length < 1) {
//         return []
//     }

//     let res = [], row = 0, col = 0, x = 1, y = -1;

//     while(res.length < matrix.length * matrix[0].length) {
//         res.push(matrix[col][row]);
//         row += x;
//         col += y;

//         if(col < 0 && row < matrix[0].length) {
//             reverse()
//             col = 0;
//         }
//         if(row < 0 && col < matrix.length) {
//             reverse()
//             row = 0;
//         }
//         if (row >= matrix[0].length) {
//             reverse()
//             col += 2 * y
//             --row;
//         }
//         if(col >= matrix.length) {
//             reverse()
//             row += 2 * x
//             --col
//         }
//     }
//     return res
// }
// console.log(findDiagonalOrder([[ 1, 2, 3 ],[ 4, 5, 6 ],[ 7, 8, 9 ]]))

// function isAlienSorted (words, order) {
//     for (let i = 0; i < words.length - 1; i++){
//         let lengthVal = Math.max(words[i].length, words[i+1].length)

//         for(let j = 0; j < lengthVal; j++){
//             let a = order.indexOf(words[i][j])
//             let b = order.indexOf(words[i+1][j])

//             if (b < a) {
//                 return false
//             }
//             else if (b > a) {
//                 break
//             }
//         }
//         return true
//     }
// }

// console.log(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz"))
// console.log(isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz"))

// function merge(nums1, m, nums2, n) {
//     var len = m + n;
//     m--;
//     n--;
//     while(len--) {
//         if(n < 0 || nums1[m] > nums2[n]){
//             nums1[len] = nums1[m--]
//         }
//         else {
//             nums1[len] = nums2[n--]
//         }
//     }
//     return nums1
// }

// console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))

// function reverseInteger(x){ 
//     if (x === 0) return 0

//     let sign = x < 0 ? -1 : 1
//     let temp = Math.abs(x)
//     let reverse = 0

//     while(true) {
//         reverse += temp % 10
//         temp = Math.floor(temp / 10)
//         if (temp === 0) break
//         reverse *= 10
//     }
//     reverse *= sign

//     if ( reverse < Math.pow(-2, 31) || reverse > Math.pow(2,31) - 1) {
//         return 0
//     }

//     return reverse
    
// }

// console.log(reverseInteger(-123))

// function mostCommonWord(paragraph, banned) {
//     const words = paragraph.toLowerCase().split(/[ !?',;.]/);
//     const map = new Map();
//     const set = new Set(banned);
//     words.forEach(word => map.set(word, map.has(word) ? map.get(word) + 1 : 1));
//     set.forEach(banned => {
//         if(map.has(banned)) map.delete(banned);
//     });
    
//     let res = '', max = Number.MIN_SAFE_INTEGER;
//     for(let [word, count] of map.entries()) {
//         if(word) {
//             res = count > max ? word : res;
//             max = count > max ? count : max;
//         }
//     }
//     return res;
// }

// console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]))

