export function defaultToString(item) {
    if(item===null) {
        return 'NULL'  // null 跟 undefined这两种类型做类型判断时,直接===判断字符串就行了;这两种类型都只有一个值
    }else if(item==='undefined') {
        return 'undefined'
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}` // 直接return item好像也行但是return `${item}` 方便后续拼接操作
    }
    return item.toString()  // 如果传入的是自定义对象,别忘了重写toString()
}