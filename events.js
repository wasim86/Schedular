const schedule=require('node-schedule')
const array = require('./DateTime')


const someDate='2023-02-12 16:15:00.000'

for(let i of array)
{
    const job=schedule.scheduleJob(i.dateTime,()=>{
        setTimeout(()=>{
            console.log(i.text.split('').join(''),new Date().toString())
             job.cancel()
        
        },i.text.length*1000)
    })
}