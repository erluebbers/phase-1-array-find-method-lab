// function superbowlWin (array) { 
//     return array.find(function (array) {
//         if (array.result === "W") {
//             return array.year
//         }
//         })
//   }

  function superbowlWin (array) { 
    let foundItem = array.find( function (obj) {
        return obj.result === "W"
    })
    if (foundItem) {
        return foundItem.year
    } else {
        return foundItem
    }
  }