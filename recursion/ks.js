function quick (array ,left ,right) {
    if(left>=right){
        return  // 小数组只剩一个元素时退出递归
    } 
    let key =  array[left]
    let i = left
    let j = right

    while(i<j) {
       while(i<j && array[j] >= key) {
        j--  // 从右到做找到第一个小于key的数 ,找小于key的数就是在遇到小于key的数时停止j--
       }
       while(i<j && array[i] <= key ) {
        i++  // 从左往右找到第一个大于key的数 , 与上面同理
       }      
       if (i < j) {
        swap(array,i,j)   // 一大一小两个数交换 ,然后开始下一轮检查交换 直到 i 与 j 相遇
       }      
    }
     
    //  i 和 j 相遇说明该相遇位置(记为temp)左边的数都小于temp 右边的数都大于或的等于temp 
     swap(array,i,left)


    quick(array,left , i-1)
    quick(array, j + 1 , right)
}

function swap(array,i ,j) {
     let  t = array[i]
     array[i] = array[j]
     array[j] = t
}

let a = [5,4,3,2,1]
quick(a,0,a.length-1)
console.log(a)