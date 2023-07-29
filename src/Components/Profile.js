import React,{useEffect, useState} from "react"

const Profile=()=>{

    let [user,setUser]= useState({
        username:"",
        email:"",
        firstname:"",
        lastname:"",
        gender:"",
        age:"",
        height:"",
        weight:"",
        phone:"",
        birthDate:"",
        bloodGroup:"",
        university:"",
        address:"",
        city:"",
        state:"",
        pincode:"",
        image:""
    })
    let {username,email,firstname,lastname,gender,token,age,height,weight,phone,birthDate,bloodGroup,university,address,city,state,pincode,image}= user

    let id= localStorage.getItem("id");

    useEffect(()=>{

        // console.log(localStorage.getItem("id"))

        const response= fetch(`https://dummyjson.com/users/${id}`)
        response.then((data)=>{
            let result=data.json();
            result.then((finalData)=>{
                console.log(finalData);
                setUser({...user,username:finalData.username,email:finalData.email,firstname:finalData.firstName,lastname:finalData.lastName,gender:finalData.gender,image:finalData.image,age:finalData.age,height:finalData.height,weight:finalData.weight,phone:finalData.phone,birthDate:finalData.birthDate,bloodGroup:finalData.bloodGroup,university:finalData.university,address:finalData.address.address,city:finalData.address.city,state:finalData.address.state,pincode:finalData.address.postalCode})
                console.log(user)
            })
            result.catch((e)=>{
                alert("Something went wrong")
            })
        })
        response.catch((e)=>{
            alert("Something went wrong")
        })
    },[])
 
    return(
        <div>
             <h1>User Profile</h1>
        <div className="profile">
           
                <div className="left">
                    <div className="first">
                        <p><b>Id:</b> {id}</p>
                        <p><b>First Name:</b> {firstname}</p>
                        <p><b>Email Id:</b> {email}</p>
                        <p><b>Gender:</b> {gender}</p>
                        <p><b>Birth Date:</b> {birthDate}</p>
                        <p><b>Height:</b> {height}</p>
                        <p><b>University:</b> {university}</p>
                    </div>
                    <div className="second">
                         <p><b>User Name</b>: {username}</p>
                        <p><b>Last Name:</b> {lastname}</p>
                        <p><b>Phone  No.:</b> {phone}</p>
                        <p><b>Age:</b> {age}</p>
                        <p><b>Blood Group:</b> {bloodGroup}</p>
                        <p><b>Weight:</b> {weight}</p>
                        <p><b>Address:</b> {address} {city} {state} {pincode}</p>
                    </div>
                    
                </div>
                
                <div className="right">
                    <img src={image} alt="userImage"/>
                </div>
            
        </div>
        </div>
    )
}

export default Profile

// "id": 2,
// "username": "hbingley1",
// "email": "hbingley1@plala.or.jp",
// "firstName": "Sheldon",
// "lastName": "Quigley",
// "gender": "male",
// "image": "https://robohash.org/doloremquesintcorrupti.png",
// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJoYmluZ2xleTEiLCJlbWFpbCI6ImhiaW5nbGV5MUBwbGFsYS5vci5qcCIsImZpcnN0TmFtZSI6IlNoZWxkb24iLCJsYXN0TmFtZSI6IlF1aWdsZXkiLCJnZW5kZXIiOiJtYWxlIiwiaW1hZ2UiOiJodHRwczovL3JvYm9oYXNoLm9yZy9kb2xvcmVtcXVlc2ludGNvcnJ1cHRpLnBuZyIsImlhdCI6MTY5MDYyMTkzMCwiZXhwIjoxNjkwNjI1NTMwfQ.bpG9REpaskVMiyrl7eK9918e1vQo1Xu6P_579H9-m3Q"