// 判断存在/空 ; 获取元素 ;  返回长度 ;遍历结构 -- --- >先走 ; 后续方法函数式编程

// set 与 List的最大区别就是不重复。(因为set可以设计成有序的 也可以设计成无序的;但set一定是不能重复的)
export class my_set {
    constructor() {
        this.items ={}
    }

    // has(element) {
    //     return element in this.items
    // }  
    // in 运算符检查的是对象原型链上是否有特定属性


    // Object.prototype.hasOwnProperty()检查的是对象身生本身的属性
    // 但是为什么不直接 this.hasOwnProperty(elemwent) 而是绕了一圈用Object.prototype.hasOwnProperty.call()呢？
    // 因为直接this.hasOwnProperty(elemwent)不安全。hasOwnProperty()有可能被覆盖
    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items ,element)
    }

    add(element) {
        if(!this.has(element)){  // 判断有无重复
            this.items[element] = element
            return true
        }
        return false
    }

    delete(element) {
        if(this.has(element)) {
            delete this.items[element]
            return true
        }
        return false
    }

    clear () {
        this.items = {}
    }

    size () {
        return Object.keys(this.items).length
        // Object.keys() 返回一个包含给定对象所有属性的数组,但是有兼容性问题
    }

    sizeLegacy() {
        let count = 0 
        for(let key in this.items) {
            if(this.items.hasOwnProperty(key)) { // 避免重复计数,因为对象的原型包含了额外的原型对象上的属性
                count++
            }
        }
        return count
    }
    
    values() {
        return Object.values(this.items) 
        // Object.values() 返回一个包含给定对象所有属性值的数组,但是有兼容性问题
    }
    
    valuesLegacy() {
        let values = []
        for(let key in this.items) {
            if(this.items.hasOwnProperty(key)) { // 避免重复计数,因为对象的原型包含了额外的原型对象上的属性
               values.push(key)  // 在这里values.push(key) 与 values.push(this.items[key])一样
            }
    }    
    return values
}

 // 求并集
     union(otherSet) {
         const unionSet = new my_set() //返回的并集

         this.values().forEach(element => unionSet.add(element));
         otherSet.values().forEach(element => unionSet.add(element));
         
         return unionSet
     }


     unionLegacy(otherSet) {
        const unionSet = new my_set()

        let values = this.values()
        for(let i = 0 ;i < values.length ;i++){
            unionSet.add(values[i])
        }
        
        values = otherSet.values()
        for(let i = 0 ;i < values.length ;i++){
            unionSet.add(values[i])
        }

        return unionSet
    }

    // 求交集 
    intersection(otherSet)  {
        const intersection = new my_set()

        const values = this.values()
        values.forEach(element => {
            if(otherSet.has(element)) {
                intersection.add(element)
            }
        })

        return intersection
    }

    intersection_faster(otherSet)  {
        const intersection = new my_set()

        const values = this.values()
        const othervalues = otherSet.values()
        const biggerSet = values   // 假设性原则...
        const smallerSet = othervalues
        if(othervalues.length - values.length >0) {
            biggerSet = othervalues
            smallerSet = values
        }

        smallerSet.forEach(element => {
            if(this.has(element)) {
                intersection.add(element)
            }
        })

        return intersection
    }

     // 差集
    difference(otherSet) {
        const differenceSet = new my_set()

        this.values().forEach(element=>{
            if(!otherSet.has(element)) {
                differenceSet.add(element)
            }
        })

        return differenceSet
    }


    // 子集
    inSubsetof(otherSet) { // 求A的对于另一个集合B的子集
        if(this.size() > otherSet.size()) {
            return false
        }
        let isSubset = true 
        this.values().every(element => {
            if(!otherSet.has(element)){
                isSubset = undefined  // 只要有一项不满足就说明A 不是 B的子集
                return false
            }
            return true
        })
        return isSubset
    }

}