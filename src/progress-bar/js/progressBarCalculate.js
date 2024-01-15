function progressBarCalculate() {
  var value = document.getElementById('progress-calculate-value').value
  var percentValue = document.getElementById('progress-calculate-percent').value
  var percentResult = document.getElementById('progress-percent')

  var result = (value / percentValue) * 100

  percentResult.innerHTML = `${result}%`
 
  if(result >= 50){
    document.getElementById('bar').style.cssText = `background-color: var(--blue-200); width: ${result}%`;
  } 
  if(result < 50) {
    document.getElementById('bar').style.cssText = `background-color: var(--red-400); width: ${result}%`;
  }
}