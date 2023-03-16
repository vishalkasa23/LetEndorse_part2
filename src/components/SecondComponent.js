import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import myImage from '../assets/Offer_expectation.png';
const SecondComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const offerData  = location.state?.offerData ;
  const dateString = offerData.expirationDate
  const date = new Date(dateString);
  const year = date.getFullYear(); // Returns 2023
 const monthNames = [
   "January", "February", "March", "April",
   "May", "June", "July", "August", "September",
   "October", "November", "December"
 ];
 const month = monthNames[date.getMonth()]; // Returns "March"
 const day = date.getDate(); // Returns 23
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div>
      {/* <h2>Second Component</h2> */}
      {/* <p>Data from First Component: {offerData}</p> */}
      {/* <button onClick={handleClick}>Switch to First Component</button> */}
      <img src={myImage} alt="im" style={{width:'100%',position:'absolute'}}/>
        <div>
        <button style={{
        
        position: 'absolute',
        marginLeft: '52%',
        width: '40%',
        height: '10%',
        backgroundColor: '#e1705d',
        borderRadius: 30,
        marginTop: 50,
        fontSize: 38,
        color: 'white',
        fontWeight: 'bold',
        boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.4)', // Add box shadow
        outline: 'none', // Remove outline
        border: 'none', // Remove border
    
    }}
            >{offerData.offerCode}</button>
        </div>
        <div
        style={{
        position: 'absolute',
        marginLeft: '58%',
        marginTop: 160,
        }}
        >

<p style={{fontWeight: 'bold'}}>
  <span style={{display: 'inline-block',fontSize: 40}}>GET</span>
  <span style={{color: '#e1705d',fontSize:75, display: 'inline-block',marginLeft:15}}>{offerData.discount}</span>
  <span style={{display: 'inline-block',fontSize: 40}}>% OFF</span>
</p>

        </div>
        <div
        style={{
        position: 'absolute',
        marginLeft: '58%',
        marginTop: 280,
        }}
        >
            <text style={{
            fontSize: 40,
            maxWidth: 50, 
            wordWrap: 'break-word',
            whiteSpace: 'pre-wrap', 
            }}>{offerData.offerTitle}
        </text>
        </div>
        <div
        style={{
        position: 'absolute',
        marginLeft: '58%',
        marginTop: 380,
        }}
        >
            <text style={{
            fontSize: 35,
            maxWidth: 50, 
            wordWrap: 'break-word',
            whiteSpace: 'pre-wrap', 
            color: '#e1705d'
            }}>Valid till {day} {month} {year} </text>
        </div>
        <div
        style={{
        position: 'absolute',
        marginLeft: '58%',
        marginTop: 480,
        }}
        >
            <text style={{
            fontSize: 25,
            marginRight:50,
            maxWidth: 40, 
            wordWrap: 'break-word',
            whiteSpace: 'pre-wrap', 
            color: '#e1705d'}}>{offerData.offerDescription}</text>
        </div>      
        <div
        style={{
        position: 'absolute',
        marginLeft: '75%',
        marginTop: 550,
        }}>
        <button onClick={handleClick}>Back</button> 
        </div>
      
    </div>
  );
};

export default SecondComponent;
