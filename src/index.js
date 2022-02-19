module.exports = function check(str, bracketsConfig) {
  const bracketsWithPair = []
  const bracketsWithOutPair = []
  const brackets = {}
  const holder = []

  for (let config of bracketsConfig ){
    if (config[0] === config[1]){
      bracketsWithOutPair.push(config[0])
    } else {
      bracketsWithPair.push(config[0])
    }

    brackets[config[1]] = config[0]
  }

  for (const element of str){
    if (bracketsWithPair.includes(element)){
      holder.push(element)
    }else if(bracketsWithOutPair.includes(element)){
      if(element === holder[holder.length-1]) {
        holder.pop()
      }else{
        holder.push(element)
      }
    }else {
      if (brackets[element] !== holder[holder.length-1]){
        return false
      }
      holder.pop()
    }
  }
  return (holder.length === 0)
}
