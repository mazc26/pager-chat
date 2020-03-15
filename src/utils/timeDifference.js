export const getTimeDifference = (secondTime, firstTime, diffParam) => {
  return secondTime.getTime() - firstTime.getTime() < diffParam; 

}