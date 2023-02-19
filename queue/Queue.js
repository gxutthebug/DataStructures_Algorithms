export class Queue {
    constructor() {
        this.tail = 0  //  ①tail为下一个插入位置,tail-1是当前队尾位置  ②tail为队列理想队长(即总入队人数) ;实际队长要减去出队人数
        this.lowestCount = 0  //  ①表示总出队人数  ②表示当前队头位置
        this.items = {} 
 
        // 队列中队尾只增不减 ; 队头每删除一个就lowestCount++ ;当队头为tail-1时说明只剩最后一个了 此时删掉最后一个lowestCount==tail
    }
  
    isEmpty () {
        return this.tail - this.lowestCount === 0 
    }


    enqueue (element) {
        this.items[this.count] = element
        this.count++
    }
    
    dequeue () {
        if (this.isEmpty()){
            return undefined
        }

        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++

        return result
    }
  
    peek() {  // 查看队头
      
        if(this.isEmpty()) {
            return undefined
        }

        return this.items[this.lowestCount]
    }

    size() {
        return this.tail - this.lowestCount  // 总入队人数 - 总出队人数
    }

    clear () {
        this.items={}
        this.count=0
        this.lowestCount =0
    }

    toString () {
       if (this.isEmpty()){
        return ''
       }

       let objString = `${this.items[this.lowestCount]}`

       for(let i=this.lowestCount+1 ; i<this.tail ; i++) {
            objString = `${objString} , ${this.items[i]}`
       }
     
      return objString

    }

    // 双端队列的头插(懒得新建一个类了,直接把方法写到这里了,两种队列除了这个方法其他一样)
    addFront(element) {
        if(this.isEmpty()){
            this.items[this.lowestCount] = element
        }else if(this.lowestCount>0){
            this.lowestCount = this.lowestCount-1
            this.items[this.lowestCount] = element
        }else{  // this.lowestCount为0前面无空位的情况,后面的队列全部后移腾出一个空位
            for(let i = this.lowestCount ; i < this.tail ;i++){
                this.items[i] = this.items[i-1]  
            }

            this.count++
            this.lowestCount=0
            this.items[0] = element
        }

    }
}