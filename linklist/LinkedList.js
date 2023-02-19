import { defaultEquals } from "../util/defaultEquals"
import { Node } from "./linked-list-nodes"

export class LinkedList {

    constructor(equalsFn = defaultEquals) { // ES6的默认参数
        this.count = 0  
        this.head = null  // 链表的结构容器就是一个头指针 , 用null也可以
        this.equalsFn = equalsFn
    }
   
    //  三个判断:
    //        ①当操作需要传入索引时,首先判断索引是否越界(index >= 0 && index < index < this.count)
    //        ② 链表是否为空 head === null   count === 0  (index < count 说明count不为0) ;链表为空直接结束操作(除了addion)
    //           ③ 若有元素：是否处理head结点;处理head结点时考虑是否单元素的差异(能处理非结点隐式说明了链表非单元素)
   
      
     // 两种遍历: ①while遍历 ②索引遍历

     //  简写优化： 找逻辑重复
    push(element) {
        const node = new Node(element) // JS的class用法跟构造函数一样
        let current
        if(this.head == null) {  // 这里改成用=== 就不等了
            this.head = node 
        } else {
            current =  this.head // current指向头,准备开始用current遍历到末节点
            while (current.next != null) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }
    
    
    removeAt (index) {
        if (index >= 0 && index < this.count) { // index < this.count除了限制越界外 
            // 还限制了链表本身为空的情况 , 因为链表空了的话count ====0 , index能小于count说明count不能是0
            let current = this.head
          
            if(index===0) { // 删除首元素
                if (this.count == 1 ){
                    this.head = null
                }else {
                    this.head = this.head.next
                }
                // return head.element // 多余
                // 40-44 可合并为 this.head = current.next 
            }else{
                let previous // 链表删除的本质是'跨过',既然要跨过，找到index本身还不够,还要记录index前一个结点 

                for (let i = 0 ; i < index ; i++) {
                    previous = current
                    current = current.next
                }
                   
                previous.next = current.next
            }
            this.count--
            return current.element // 返回删除的值

        }
        return undefined // 越界返回undefind,空链表返回undefind
    }

    getElementAt (index) {

        if(index >= 0 && index <this.count) { 
            let current = this.head
                for(let i = 0 ; i<index ; i++){  // 当 index = 0 时 , 不执行for , 直接返回current初始值head
                                                 // 所以这里不用写一个if(index == 0) { } 特殊处理
                    current = current.next
            }
            return current
        }
        return undefined
    }

    // 重写removeAt
    newremoveAt (index) {
        if (index >= 0 && index < this.count) { // 已经排除count==0了
            let current = this.head
          
            if(index===0) { // 
                if (this.count == 1 ){
                    this.head = null
                }else {
                    this.head = this.head.next
                }
                // return head.element // 多余
                // 40-44 可合并为 this.head = current.next 
            }else{
                const previous = this.getElementAt(index - 1)
                current = previous.next
                previous.next = current.next
                
            }
            this.count--
            return current.element // 返回删除的值

        }
        return undefined // 越界返回undefind,空链表返回undefind
    }
  
    toString (){
        if (this.head == null) {
            return undefined
        }
        let current = this.head
        let objString = ``  // 用一个空字符串作为累积容器
        for(let i =0 ;i < this.count ; i++){
            objString = `${objString} ${current.element}` // 模版字符串可以实现字符串自增
            current = current.next
        }

        return objString
    }

    insert(element , index) {

        if(index === 0 ){  // 头部操作
          let old_head = this.head
          let node = new Node(element) 
          this.head = node
          this.head.next = old_head
           
          this.count++
          return true  
        }else if(index > 0 && index <=this.count) {  
            if(index === this.count){   // 尾部操作
                let node = new Node(element) 
                let tail = this.getElementAt(this.count-1)
                tail.next = node
            }else{   // 中间段操作
                   let node = new Node(element) 
                   let index_node = this.getElementAt(index)
                   let previous_node = this.getElementAt(index-1)
                   previous_node.next = node
                   node.next = index_node
            }
        
            this.count++
          return true  
        }else{
            return false  // 链表为空
        }
    }
  
    indexOf (element) {
        let current = this.head
        let f = 0
        let k = 0

        // if (this.head === null){     // 写完后回看 发现这层判断多余
        //     return undefined
        // }else {
            while(current !=null) {  // 不能用 while(current.next !=null) 
                if(this.equalsFn(current.element,element)) {
                    f = 1
                    return k
                }
                k++
                current = current.next
            }
        // }
     
        if (f===0) {
            return undefined
        }
    }

    remove(element) { 
        const index = this.indexOf(element)
        return this.removeAt(index)
    }

    size() {
        return this.count
    }

    isEmpty() {
        return this.size() ===0
    }

    getHead() {
        return this.head
    }
}





export class DoublyLinkedList extends LinkedList {
      
    constructor(equalsFn = defaultEquals) {
        super(equalsFn)
        this.tail = null  // 双向链表新增的尾指针
    }
   

   //方法略
}