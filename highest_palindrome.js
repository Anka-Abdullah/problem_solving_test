const highestPalindrome = (s, k) =>  {
    let n = s.length;
    let arr = s.split('');
    let changes = new Array(n).fill(false); 
    
    function makePalindrome(left, right) {
        if (left >= right) return;
        if (arr[left] !== arr[right]) {
            const maxDigit = Math.max(arr[left], arr[right]);
            arr[left] = arr[right] = maxDigit;
            changes[left] = changes[right] = true;
            k--;
        }
        makePalindrome(left + 1, right - 1);
    }

    makePalindrome(0, n - 1);

    if (k < 0) return "-1";
    
    function maximizePalindrome(left, right) {
        if (left >= right || k <= 0) return;
        
        if (arr[left] !== '9') {
            if (changes[left] || changes[right]) {
                if (k >= 1) { 
                    arr[left] = arr[right] = '9';
                    k--;
                }
            } else if (k >= 2) { 
                arr[left] = arr[right] = '9';
                k -= 2;
            }
        }
        maximizePalindrome(left + 1, right - 1);
    }

    maximizePalindrome(0, n - 1);

    if (n % 2 === 1 && k > 0) {
        arr[Math.floor(n / 2)] = '9';
    }
    return arr.join('');
}

module.exports = { highestPalindrome }