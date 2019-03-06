// Code your solution in this file!
const block =264
const hq=42
function distanceFromHqInBlocks(currentBlock){
  if(currentBlock>hq){
    return currentBlock-hq
  }else{
    return hq-currentBlock
  }
}
function distanceFromHqInFeet (currentBlock){
  let numberOfBlocks
  if(currentBlock>hq){
   numberOfBlocks=currentBlock-hq
  }else{
     numberOfBlocks= hq-currentBlock
  }
  return numberOfBlocks*block
}
function distanceTravelledInFeet(block1,block2){
  // 43
  // 1360
  // 1.Want to get distance between blocks
  const numberOfBlocks=Math.abs(block1-block2)
  return numberOfBlocks*block
}
  function calculatesFarePrice(startingBlock,destinationBlock){
    const numberOfBlocks=Math.abs(startingBlock-destinationBlock)
    const numberOfFeet=numberOfBlocks*block
    if(numberOfFeet<=400){
      return 0;
    }else if(numberOfFeet>400 &&numberOfFeet<=2000){
      return (numberOfFeet- 400)*.02
    }else if(numberOfFeet>2000 &&numberOfFeet<=2500  ){
      return 25
    }else{
     return "cannot travel that far"
    }
  }
