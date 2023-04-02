function merge (left , right) {
    let i = 0  // 指向left 的第一个元素
    let j = 0  // 指向right 的第一个元素
    const result = []
    while(i < left.length && j<right.length) {  // 不满足条件时说明left or right 中有一方已经全部放入新数组了
        if(left[i]<=right[i]){
            result.push(left[i])
              i++
        } else {
            result.push(right[j])
              j++
        } 
    }
    return result.concat(i<left.length?left.slice(i) : right.slice(j))  //  因为有序性，当有一方全部放入新数组后另一方的剩余元素可以全部拼接到新数组后面
}

function  mergeSort (arr) {
    if(arr.length===1) {
        return arr
    }

    // 递归过程只需关注顶层 与最底层 ; 中间层我无需关心
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid)) // 这是左边的的有序部分 , 你不必管他中间层是如何是限定的 , 你只需要知道它最开始不是来源于合并 , 而是来源于递归出口
    let right = mergeSort(arr.slice(mid,arr.length)) // 这是右边的有序部分

    // 合并 left right
    // return 合并后的数组 ; 这个是关键，每层调用都会返回本层的结果给上层 ， 上层直接拿到结果 无需关心如何实现
    return merge(left , right)
}

let a = mergeSort([8,7,6,5,4,3,2,1])
console.log(a)