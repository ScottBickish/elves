let workShop = [
  {
      name: 'Jingle',
      timeIn: 600,
      timeOut: 1000,
      candyConsumed: 18 
  },{
      name: 'Dash',
      timeIn: 700,
      timeOut: 1000,
      candyConsumed: 1 
  },{
      name: 'Bubbles',
      timeIn: 800,
      timeOut: 1200,
      candyConsumed: 10 
  },{
      name: 'Sparkle',
      timeIn: 1000,
      timeOut: 1100,
      candyConsumed: 17 
  },{
      name: 'Cookie',
      timeIn: 1100,
      timeOut: 1600,
      candyConsumed: 4 
  },{
      name: 'Frosty',
      timeIn: 1100,
      timeOut: 1400,
      candyConsumed: 8 
  },{
      name: 'Twinkle',
      timeIn: 1300,
      timeOut: 1400,
      candyConsumed: 22 
  },{
      name: 'Jingle',
      timeIn: 1300,
      timeOut: 1800,
      candyConsumed: 15 
  },{
      name: 'Spunky',
      timeIn: 1500,
      timeOut: 2200,
      candyConsumed: 1 
  },{
      name: 'Sunny',
      timeIn: 1400,
      timeOut: 2000,
      candyConsumed: 12 
  },{
      name: 'Happy',
      timeIn: 1600,
      timeOut: 1900,
      candyConsumed: 13 
  }
]

function candyBowl(workShop){
  let candyBowl = 0
  for(let i = 0; i < workShop.length; i++){
    candyBowl += workShop [i].candyConsumed
  }
  console.log(candyBowl)
  return candyBowl
}
candyBowl(workShop)