arr = [1,2,3,4,5,6,7]

Array.prototype.middle = function (x) {
    left = 0,
    right =  this.length-1
    mid = 0
    while(left<=right) { // left>right说明交替了,所有mid值已经取过 ; left==right 说明还剩最后一个mid值
         mid = (left+right)>>>1

         if(x<this[mid]){
           right = mid  -1
         }
          if(this[mid]<x){
           left = mid +1
         }
         if(this[mid]===x){
            return x
         }  
    }

    return "没找到"
}

Array.prototype.middle2 = function (x) {
    left = 0
    right = this.length   // 这里有改动,此时right仅仅作为边界,right指向的元素永远向右超出一格,不作为待查找元素
    mid = 0
    while(left<right) { //  right指向的元素永远向右超出一格,不作为待查找元素,所以left = right时就该退出循环,否则可能出出现死循环
         mid = (left+right)>>>1

         if(x<this[mid]){
           right = mid 
         }
          if(this[mid]<x){
           left = mid +1
         }
         if(this[mid]===x){
            return x
         }  
    }

    return "没找到"
}

console.log(arr.middle(3))
console.log(5/2)
console.log(5>>>1)
console.log(Math.floor(5/2))