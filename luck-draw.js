//初始化 数组

const arr = Array(60).fill().map((_,i) => i + 1);
function draw(n = 1) {
  var ret = [];
  for(var i = 0; i < n; i ++) {
    let idx = Math.floor(arr.length * Math.random());
    ret.push(...arr.splice(idx, 1))
  }
  return ret;
}

console.log(draw(5));
