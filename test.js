var arr = [
  {
    "ac":[1,2,4],
    "dd":1
  },
  {
    "ac":[1,2,3],
    "dd":1
  },
  {
    "ac":[1,2,5],
    "dd":1
  },
]

var arr2 = arr.map(item=>{
  item.ac = item.ac && item.ac.slice(0, 2)
  return item
})

var arr3 = arr.map(item=>{
  item.ac = item.ac && item.ac.slice(0, 2)
  return item
})
console.log(arr2)
console.log(arr3)