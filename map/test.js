
var mergeSimilarItems = function(items1, items2) {

    let ret = []
    let box = [null,null]

    items1.forEach((item,index) => {
        box[0]=item[0]
        if(items2.some(item2 => item2[0]===item[0])){
            box[1] = items2[index][1] + item[1]
            ret.push(box)
        }else {
            box[1]=item[1]
            ret.push(box)
        }
    })

    items2.forEach( item =>{

        if(!ret.some(item2 => item2[0]===item[0])){
             box[0]=item[0]
             box[1]=item[1]
            ret.pushbox
        }
    })
 
   ret.sort()

    return ret

};

console.log(mergeSimilarItems( [[1,1],[4,5],[3,8]], [[3,1],[1,5]]))