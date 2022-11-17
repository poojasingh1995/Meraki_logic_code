const fs = require('fs');
const { CLIENT_RENEG_LIMIT } = require('tls');
const tempData = fs.readFileSync('data.json');
const apiData = JSON.parse(tempData);
const _= require('lodash')
const moment = require('moment')

// const obj = apiData.filter((el)=>el.classes[el.classes.length-1]["lang"]==='en'["title"]==='if else');
// const obj = apiData.filter((el)=>el.classes[el.classes.length-1].title==='Python');
// const obj = apiData.filter((el)=>el.classes[el.classes.length-1])
// const classData = obj[0].classes
// console.log(obj[0].classes);
//  _.sortBy(obj,"obj[0].clsses.start_time")
// // console.log(finalData)
// var i=0;
// while (i<apiData.length){
//   // apiData[i].classes = apiData[i].classes[apiData[i].classes.length -1]
//   // console.log(apiData[i])
//   const allClasses = _.groupBy(apiData[i].classes,item=>item.end_time.slice(0,10))
//   // _.forEach(allClasses,item=> item.length==1?console.log(item[0]) :console.log(item[1]))
//   const compareDate ="2021-10-06T15:00:00.005+05:30"
//   const checkingDate = moment(compareDate.toString()).format()
//   const requiredDate = checkingDate.slice(0,10)
//   if (allClasses[requiredDate]){
//     console.log(allClasses[requiredDate])
//   }

  const people = await apiData.query()
  .withGraphFetched('[apiData.[i], classes]')
  .modifyGraph('apiData.start_time', classes => {
    classes.where('start_time', '>', date.now).select('id');
  });

  

// console.log(allClasses)
  // console.log(apiData[i].classes)
  // i++
// }

// const last_data=[]
//       for (var i=0;i<res.length;i++){
//         res[i].classes = res[i].classes[res[i].classes.length -1]
//         last_data.push(res[i])
//       }
//       return[null,last_data]



// o=obj.sort()
// console.log(o)

// let newarray = obj.map((item) => {
//   console.log(item);
// })
// console.log(newarray[obj.length - 1]);

// d=obj.sort()
// console.log(d)


// const c=[]
// for(j of obj){
//   d=j.sort()
//   c.push(j)
// }
// console.log(c,"dyuuiwoio")

  // let filtered_res;
  // let filt;
  // filtered_res = volunteers.filter((v) => v.classes.length > 0);
  // if (lang !== undefined || title!==undefined) {
  //   filt = filtered_res.filter((el) => el.classes[el.classes.length - 1].lang === lang);
  //   filt = filtered_res.filter((el) => el.classes[el.classes.length - 1].title==='Python');
  //   filtered_res = filt;
  // }

//   let filtered_res;
//   let filt;
//   filtered_res = volunteers.filter((v) => v.classes.length > 0);
//   console.log(lang)
//   if (lang !==undifened){
//     console.log("done")
//     filt =filtered_res.filter((el)=>el.classes[el.classes.length-1]["lang"]==lang);
//     console.log(filt,"ujjwal pagal")
//     filtered_res=filt
//   }
//   console.log(filtered_res,"sussesfull..........")