const data = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const click = document.querySelector('.click')
const copy = document.querySelector('.copy')
const name = document.querySelector('.name')
const holder = document.querySelector('#holdText')




click.addEventListener('click', function(){
 let color = "#"
 for(let i = 0; i < 6; i++){
  color += data[getRandomNumber()]
  
 }
document.body.style.backgroundColor = color
name.textContent = color

console.log(color);
})


copy.addEventListener('click', copyToClipboard)

function copyToClipboard() { 
 const el = document.createElement('textarea');
  el.value = name.innerText; 
  document.body.appendChild(el) 
  el.select()
  document.execCommand('copy')
  alert('copied!')
  document.body.removeChild(el)}


function getRandomNumber(){
 return Math.floor(Math.random() * data.length)
}






