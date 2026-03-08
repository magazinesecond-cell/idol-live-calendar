let events = JSON.parse(localStorage.getItem("events") || "[]")

render()

function addEvent(){

const date=document.getElementById("date").value
const idol=document.getElementById("idol").value
const area=document.getElementById("area").value
const venue=document.getElementById("venue").value

const event={
date:date,
idol:idol,
area:area,
venue:venue
}

events.push(event)

localStorage.setItem("events",JSON.stringify(events))

render()

}

function render(){

const list=document.getElementById("list")
list.innerHTML=""

events.forEach(e=>{

list.innerHTML+=`
<div>
${e.date} ${e.idol} (${e.area}) ${e.venue}
</div>
`

})

}