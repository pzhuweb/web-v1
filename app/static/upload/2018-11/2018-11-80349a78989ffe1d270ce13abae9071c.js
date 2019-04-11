Array.prototype.firstUnique = function(){
    var temp = []
    for(let i = 0; i < this.length; i++){
        //indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置
        //indexOf() 方法对大小写敏感
        if (temp.indexOf(this[i]) === -1) {
                temp.push(this[i])

            // console.log(temp)
        }
    }
    return temp;
}

Array.prototype.secondUnique = function(){
    var obj = {},temp =[]
    for (let i = 0; i < this.length; i++) {
        // console.log(obj[this[i]])
        //
        
        if( !obj[this[i]] ){
            obj[this[i]] = true
            
            temp.push(this[i])
            // console.log(this[i])
            // console.log(obj[this[i]])
        }
    }
    return temp
}

//基于键与值的配对
Array.prototype.thiredUnique = function(){
    var temp = [this[0]]
    // console.log(temp)
    for(let i = 1; i < this.length; i++){
        // console.log(temp)
        if(this.indexOf(this[i]) === i){
            temp.push(this[i])
        }
    }
    return temp
}

效率得到了很大的提高,但是会改变原有数组的顺序
Array.prototype.fourthUnique = function(){
    this.sort()
    var temp = [this[0]]
    for (let i = 1; i < this.length; i++){
        if( this[i] !== temp[temp.length - 1] ){
            temp.push(this[i])
        }
    }
    return temp
}

利用es6的set方法（它类似于数组，但是成员的值都是唯一的，没有重复的值。），代码最少，但是无法去掉{}
Array.prototype.fifthUnique = function(){
    return Array.from(new Set(this))
}
var arr = [1,2,3,2,5,"xiao","xiao",1,3,4]
var arr =new Array(10000)
arr.fill(1)

// var arr = [1,2,3,2,5,"xiao","xiao",1,3,4,{"q":1},{"q":1}]
arr.push(1,2,3,2,5,"xiao","xiao",1,3,4,{"q":1,ada:[123,1,3]},{"q":1,ada:[123,2,3]})
// console.log(arr.firstUnique())
//  var temp = [{},{}]
//  console.log(temp.indexOf({}))
console.log(arr.secondUnique())
// console.log(undefined==null)
// console.log(!null)

// console.log(arr.thiredUnique())

// console.log(arr.fourthUnique())

// console.log(arr.fifthUnique())