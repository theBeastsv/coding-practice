var reverseString = function(s,k) {
        const n = s.length;
     s = s.split(''); 
    
    for (let i = 0; i < n; i += 2 * k) {
        let left = i;
        let right = Math.min(i + k - 1, n - 1); 
        while (left < right) {
            [s[left], s[right]] = [s[right], s[left]]; 
            left++;
            right--;
        }
    }
    
    return s.join(''); 
    
};
let s = "abcd";
console.log(reverseString(s,2))