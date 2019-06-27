enum Categories {
  seasonal = 'Seasonal',
  seasonalDecoration = 'Seasonal Decoration',
  xmasDecoration = 'Xmas Decoration',
  adventCalendars = 'Advent Calendars',
  adventCalendarPreFilled = 'Advent Calendar Pre-Filled',
  adventCalendarsFabric = 'Advent Calendars Fabric',
  adventCalendarsWooden = 'Advent Calendars Wooden'
}

const myPerfectObj = {
  categoriesTree: {
    seasonal: {
      itemToClick: {name: null},
      seasonalDecoration: {
        itemToClick: {name: null},
        xmasDecoration: {
          itemToClick: {name: null},
          adventCalendars: {
            itemToClick: {name: null},
            adventCalendarPreFilled: {
              itemToClick: {details: null},
            }
          }
        }
      }
    }
  }
}

for (const [key, value] of Object.entries(myPerfectObj)) {
  if(key === 'categoriesTree') {
    asd(value)
  }
}



function asd(cat) {

  const a = Object.keys(Categories)
  console.log(Object.keys(cat))

  console.log(Object.values(cat))
  console.log(...Object.values(cat))
  
}
// to run TS use:  npm run ts-node ./playground/a.ts 