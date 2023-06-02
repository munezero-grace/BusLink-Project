import React from "react";
import './home.css'
 import {GoSearch} from 'react-icons'
import Image from '../image/ElecMobility.jpg'

const Home =()=>{
    return(
        <div className="whole1">
        <div className="container1">
<img src={Image}/>
<div className="overlay"></div>
<div className="whole2"> 
<h1>Your next stop awaits</h1> 
<button>Book here</button>
</div>
        </div>
        <div className="container2">
       <h2>Find schedule</h2> 
       <p>Quickly look up scheduled times for a specific bus stop, bus route or station</p>
       <form>
        <div className="input">
        <div className="input1">
        <label>Search by transit mode or route name</label>
        <input placeholder="e.g.chez lando" type="text"/>
        </div>
        <div className="input2">
        <label>Filter</label>
        <input placeholder="Show all" type="text"/>
        </div>
<button><span><GoSearch/></span>Find Schedule</button>
        </div>
        </form>    
        </div>
<div className="whole3">
    <div className="one">
<p>Schedule and maps</p>
    </div>
    <div className="two">
    <p> bus schedules</p>
    </div>
</div>

<div className="schedule">
    <h1>Bus Schedule</h1>
    <p className="p">Our three automated rapid transit Bus lines take you all around Kigali:</p>
    <div className="p1">
        <p className="p2"> . Gasabo district   34 bus routes </p>
        <p className="p2"> . Kicukiro district   2 bus routes</p>
        <p className="p2"> . Nyarugenge district   15 bus routes</p>
    </div>
<div className="map">
    <div className="line1"></div>
    <div className="map1"></div>
    <div className="line2"></div>
</div>
</div>
<div className="paragraph">
    <div className="parg1">
        <h2>Get Cheap Bus Tickets Easily with Us</h2>
        <p>If you're looking to travel by bus , We got you covered with our extensive bus routes! With over 100 routes all over Kigali, you can easily find the perfect option . Plus, our cheap bus tickets make it easy and affordable to get whenever you want to manage your time properly, whether it's for work or play from station to staion.</p>
    </div>
    <div  className="parg2">
<h2>Bus Routes to Suit Your Schedule</h2>
<p>Boarding with us is simple and hassle-free, thanks to our frequent bus connections, reliable schedules, and modern vehicles. With over 400 buses from different stations, including those from kicukiro and nyarugenge, you can easily find the perfect option for your location. Additionally, We offer bus travel in different province, providing even more travel options to suit your needs. Our extensive network spans to 4 provinces  ,making it easy to plan and book your trip online or through our user-friendly website. Plus, stay connected on the go with free WiFi on most of our buses , and track your journey in real-time with our advanced tracking system.</p>
    </div>
    <div  className="parg3">
        <h2>Book your seat with us</h2>
        <p>Our website makes it easy to plan your journey, find the cheapest bus fares, and purchase your bus tickets securely. Whether you are planning or booking last-minute trip, We make buying bus tickets a breeze. Plus, with our convenient e-ticket system, you can board your bus without the hassle of paper tickets as your phone will serve as your ticket.</p>
    </div>
</div>

<div className="">

</div>
        </div>
    )
}
export default Home