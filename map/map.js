import { defaultToString } from "../util/defaultToString"
import {ValuePair} from "../map/ValuePair"

// 判断存在/空 ; 获取元素 ;  返回长度 ; 遍历结构 -- --- >先走 ; 后续方法函数式编程

 // javascript 只允许我们使用字符串作为对象的属性名,值可以是任意类型
// 但是JS是弱类型语言, 无法限制传参类型 ------- 可以定义一个String转化函数解决,传进去的所有参数都全部转为String
export default class Dictionary {
   
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn
        this.table = {}
    }
       
    hasKey (key) {
        return this.table[this.toStrFn(key)] != null // 如果不为空返回ture ; 空的返回flase
      
    }

    get(key) {
      const ValuePair = this.table[this.toStrFn(key)]
      return ValuePair == null ? undefined : ValuePair.value  //  跟if(this.hasKey(key))一个意思

    }

    set(key ,value) { // JS对象添加和修改是同一个
        if(key !=null && value != null) {
            const tableKey = this.toStrFn(key) 
            this.table[tableKey] = new ValuePair(key,value) // 为什么要多此一举用一个对象把key再存一次呢
            // 因为我们为了在JS对象中保存value , 我们把key转化成了字符串 , 为了保存原始的key我们new 了一个结点来单独保存
            return true
        }
           return false
    }

    remove (key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)]
            return true
        }
        return false
    }
   
   // 返回字典中的所有ValuePair对象
    keyValues() {
        return Object.values(this.table)  //  用 for-in 可以实现无兼容性问题的版本-------略
    }
  
    // 返回所有原始属性名
    keys() {
        return this.keyValues().map(value => value.key)
    }

     // 返回所有属性值
     values() {
        return this.keyValues().map(value => value.value)
    }
     
    // 遍历
   forEach(callbackFn) {
    const ValuePair = this.keyValues()
    for(let i ; i < ValuePair ; i ++) {
      const result = callbackFn(ValuePair[i].key,ValuePair[i].value,ValuePair[i])
      if(result === false) {  // 如果回调函数返回false就中断
        break
      }
    }
   }

   clear () {
    this.table = {}
   }

   size () {
    return Object.keys(this.table).length
   }

   isEmpty () {
    return this.size() === 0
   }

   toString() {
    if(this.isEmpty()) {
        return ""
    }
    let objString = ``
    const ValuePairs = this.keyValues()
    ValuePairs.forEach(item => objString = `${objString} , ${item.toString()}`)

    return objString
   }
}