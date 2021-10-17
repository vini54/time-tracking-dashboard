const jsonWork = [
   {
     "title": "Work",
     "timeframes": {
       "daily": {
         "current": 5,
         "previous": 7
       },
       "weekly": {
         "current": 32,
         "previous": 36
       },
       "monthly": {
         "current": 103,
         "previous": 128
       }
     }
   },
   {
     "title": "Play",
     "timeframes": {
       "daily": {
         "current": 1,
         "previous": 2
       },
       "weekly": {
         "current": 10,
         "previous": 8
       },
       "monthly": {
         "current": 23,
         "previous": 29
       }
     }
   },
   {
     "title": "Study",
     "timeframes": {
       "daily": {
         "current": 0,
         "previous": 1
       },
       "weekly": {
         "current": 4,
         "previous": 7
       },
       "monthly": {
         "current": 13,
         "previous": 19
       }
     }
   },
   {
     "title": "Exercise",
     "timeframes": {
       "daily": {
         "current": 1,
         "previous": 1
       },
       "weekly": {
         "current": 4,
         "previous": 5
       },
       "monthly": {
         "current": 11,
         "previous": 18
       }
     }
   },
   {
     "title": "Social",
     "timeframes": {
       "daily": {
         "current": 1,
         "previous": 3
       },
       "weekly": {
         "current": 5,
         "previous": 10
       },
       "monthly": {
         "current": 21,
         "previous": 23
       }
     }
   },
   {
     "title": "Self Care",
     "timeframes": {
       "daily": {
         "current": 0,
         "previous": 1
       },
       "weekly": {
         "current": 2,
         "previous": 2
       },
       "monthly": {
         "current": 7,
         "previous": 11
       }
     }
   }
 ]

// Butons
let dataWork = JSON.parse(JSON.stringify(jsonWork))
let daily = document.getElementById('daily-btn')
let week = document.getElementById('week-btn')
let mont = document.getElementById('mont-btn')

// Corrent values
let corWork = document.getElementById('corrent-work')
let corplay = document.getElementById('corrent-play')
let corstudy = document.getElementById('corrent-study')
let corexer = document.getElementById('corrent-exer')
let corsocial = document.getElementById('corrent-social')
let corself = document.getElementById('corrent-self')

// previous values
let prevhtml = document.querySelectorAll('.previous')

daily.addEventListener('click', getdaily)
week.addEventListener('click', getweek)
mont.addEventListener('click', getmont)

let previous = ''
getdaily()

function getdaily(){
   previous = 'Yesterday'
   let currentArr = []
   let prevArr = []
   for(let i = 0; i < dataWork.length; i++){
      currentArr[i] = dataWork[i].timeframes.daily.current
      prevArr[i] = dataWork[i].timeframes.daily.previous
   }
   printValues(currentArr, prevArr, previous)
   daily.classList.add('active')
   week.classList.remove('active')
   mont.classList.remove('active')
}
function getweek(){
   previous = 'Last Week'
   let currentArr = []
   let prevArr = []
   for(let i = 0; i < dataWork.length; i++){
      currentArr[i] = dataWork[i].timeframes.weekly.current
      prevArr[i] = dataWork[i].timeframes.weekly.previous
   }
   printValues(currentArr, prevArr, previous)
   daily.classList.remove('active')
   week.classList.add('active')
   mont.classList.remove('active')
}
function getmont(){
   previous = 'Last Month'
   let currentArr = []
   let prevArr = []
   for(let i = 0; i < dataWork.length; i++){
      currentArr[i] = dataWork[i].timeframes.monthly.current
      prevArr[i] = dataWork[i].timeframes.monthly.previous
   }
   printValues(currentArr, prevArr, previous)
   daily.classList.remove('active')
   week.classList.remove('active')
   mont.classList.add('active')
}
function printValues(current, prevArr, previous){
   corWork.innerText = `${current[0]}hrs`
   corplay.innerText = `${current[1]}hrs`
   corstudy.innerText = `${current[2]}hrs`
   corexer.innerText = `${current[3]}hrs`
   corsocial.innerText = `${current[4]}hrs`
   corself.innerText = `${current[5]}hrs`

   for(let i = 0; i < prevhtml.length; i++){
      prevhtml[i].innerText = `${previous} - ${prevArr[i]}hrs`
   }
}
// function whatprev(option){
//    if (option == 'Yesterday') {
      
//    }
// }