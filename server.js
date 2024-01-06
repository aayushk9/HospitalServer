const express = require('express');
const app = express();
const port = 3000;

var patients = [
    {
    name: 'Joylie',
    kidneys: [{
       healthy: false
    }
  ]
}]

app.use(express.json())

app.get('/', (req, res)=> {
    const josliekidney = patients[0].kidneys;
    const numberOfKidneys = josliekidney.length;
    let numberOfUnhealthyKidneys = 0;
    for(let i = 0 ; i < numberOfKidneys; i++){
            if(josliekidney[i].healthy){
                numberOfUnhealthyKidneys++;
            } 
    }
   const numberOfHealthyKidneys = numberOfKidneys - numberOfUnhealthyKidneys;
   res.json[{
     numberOfKidneys,
     numberOfHealthyKidneys,
     numberOfUnhealthyKidneys
   }]
})


app.post('/', (req, res)=>{
    const isHealthy = req.body.isHealthy;
    patients.kidney.push({
        healthy: isHealthy
    })
    res.json[{
        msg: 'Done'
    }]
})

app.put('/', (req, res)=>{
    for(let i = 0; i < patients[0].kidneys.length; i++){
         patients[0].kidneys.healthy = true;
    }
    res.json[{}];
})

app.delete('/', (req, res)=>{
   // remove all unhealthy kidneys
   const newKidneys = [];
   for(let i = 0; i < patients[0].length; i++){
    if(patients[0].kidneys[i].healthy){
      newKidneys.push({
        healthy: true
      })
    }
   }
   patients[0].kidneys = newKidneys;
   res.json[{
    msg: 'done'
   }]
})
app.listen(port, (req, res)=> {
    console.log(`Server is listening on port ${port}`)
})