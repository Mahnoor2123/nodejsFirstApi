const express = require('express');
const bodyParser =require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/users', (req, res) => {
    let user = {
        name: "Mahnoor",
        regNo: "CS120192032",
        batch: 2019
    }
    res.send(user)
});

// app.get('/class', (req, res) => {
//     let class ;
// })

app.get('/class' , (req,res) =>{
    
    let Class = {
        section: "A",
        present:"12",
        absent:"34"
    }

    res.send(Class)
})
app.get('/patient', (req,res)=>{
    let patient={
        Name: "ALI",
        disease: "Malaria",
        treatment: "medicenss"

    }
    res.send(patient)
    
})

app.get('/doctor',(req,res)=>{
    let doctor={
        name: "hamza",
        patientname:"Ali",
        salary: "500000"
    }
    res.send(doctor)
});

// Add new patient

app.post('/add-patient', (req,res) =>{

    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let guardian = req.body.guardian;
    res.json({name, email,password, guardian})

})
app.post('/add-doctor',(req,res)=>{
    let name =req.body.name;
    let salary =req.body.salary;
    let patient = req.body.patient;
    let email = req.body.email;
    let password = req.body.password;
    res.json({name,salary,patient,email,password})
})


app.listen('3000', () => {
    console.log('App Is Running On Port 3000');
})