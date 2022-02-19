module.exports = function check(str) {
  const holder = []
  let count = 0
  const BracketsSame = ['|','1','2','3','4','5','6','7','8']
  const openBrackets = ['(','{','[']
  const closedBrackets = [')','}',']']
  for (let letter of str) {
    if(BracketsSame.includes(letter)){
      count = count + 1
    }else{
      if(openBrackets.includes(letter)){ 
        holder.push(letter)
      }else if(closedBrackets.includes(letter)){ 
        const openPair = openBrackets[closedBrackets.indexOf(letter)] 
        if(holder[holder.length - 1] === openPair){ 
            holder.splice(-1,1) 
        }else{ 
            holder.push(letter)
            break 
        }
      }
    }        
  }
  return (holder.length === 0 && count%2 === 0) 
}
