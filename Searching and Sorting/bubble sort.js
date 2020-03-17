let unsortedArr = [10,53,82,1,93,5,8];

let swapped;

function bubbleSort(arr) {
    swapped = false;
    let end = arr.length - 1;
    for (let i = 0, j = 1; i < end; i++, j++) {
        if (arr[i] > arr[j]) {
            swapped = true;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    end--;
}

do {
    bubbleSort(unsortedArr);
} while (swapped);

console.log(unsortedArr);