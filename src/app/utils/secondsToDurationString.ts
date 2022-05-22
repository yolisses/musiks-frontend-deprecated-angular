export function secondsToDurationStrings(time?:number) {
  if (time === undefined) return '--:--';
  let hours :number|string = Math.floor(time / (60 * 60));
  let minutes :number|string = Math.floor((time % (60 * 60)) / 60);
  let seconds :number|string = Math.floor(time % 60);

  let result = '';
  if (hours) {
    if (hours < 10) hours = `0${hours}`;
    result += `${hours}:`;
  }
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;
  result += `${minutes}:${seconds}`;
  return result;
}
