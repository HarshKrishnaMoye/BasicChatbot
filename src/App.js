import './App.css';
import image from './Image/logo.jpg'
import React,{useState , useRef} from 'react';


function App() {

  const [text , setText]=  useState("");

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleOnChange = (event)=>{
    // console.log("On Change"); 
    setText(event.target.value);
  }

  

  const humanMessage = useRef();
  const botmessage = useRef();
  const input = useRef();


  const date = new Date();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


  //using the useState hook to get the data from the local time and set it to the time variable
  const [time, setTime] = useState(`${hours}:${seconds}`);

  //using the useState hook to get the data from the local date and set it to the dateTime variable
  const [dateTime, setDateTime] = useState(`${days[day]}, ${months[month]} ${year}`);


  const checkStatus = (e) => {
    let isActive = true;
    if (dateTime === "Saturday, March 2024") {
      //if the dateTime is Saturday, Mar 25 2024, the bot will be inactive
      isActive = false;
    }

    // selecting the status class
    const status = document.querySelector(".status");
    
    //if the bot is active
    if (isActive === true) {
      status.innerHTML = "Active";
      status.style.color = "#16FF00";
    } else {
      status.innerHTML = "Not Active";
      status.style.color = "red";
    }
  };


  const handleInput = () => {
    const botMessage = document.querySelector("#message1");
    const userMessage = document.querySelector("#message2");
    const inputRef = input.current;
    const getHumanMessage = humanMessage.current;
    const getBotMessage = botmessage.current;

    let badwords = ["fuck|bad|stupid|useless|bitch|crazy|nonsense"];
    let words = new RegExp(badwords);
    if (words.test(document.querySelector("#input").value)) {
      // if the input contains bad words
      getBotMessage.innerText= "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Please do not use bad words"; // display the message
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let welcome = [
      "hi|hello|Hello|hey|sup|yo|wassup|whats up|howdy|greetings|good morning|good afternoon|good evening",
    ];
    let words2 = new RegExp(welcome);
    if (words2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      // if the input contains welcome words
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Hello There how are you doing today?"; // display the message
        status.innerText = "Active";
        status.style.color = "#16FF00";
        inputRef.value = ""; // clear the input
      }, 2000);
    }


    let bye = ["bye|Bye|goodbye|see you later|cya|goodnight|goodbye"];
    let words3 = new RegExp(bye);
    if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Bye, have a nice day";
        inputRef.value = ""; // clear the input
      }, 2000);
      setTimeout(() => {
        status.innerText = "Not active";
        status.style.color = "red";
      }, 5000);
    }


    let thanks = [
      "Thanks|thanks|thank you|thank you very much|Thank you very much",
    ];
    let words4 = new RegExp(thanks);
    if (words4.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "You are welcome";
        inputRef.value = ""; // clear the input
      }, 2000);
    }





    let how = [
      "How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you",
    ];
    let words5 = new RegExp(how);
    if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "I am fine, thank you";
        status.innerText = "Active";
        status.style.color = "#16FF00";
        inputRef.value = ""; // clear the input
      }, 2000);
    }


    let good = [
      "That's good|Sound nice|that sounds awesome|that sounds great|Great|great|sounds great|that's sounds good|Nice|nice",
    ];
    let words6 = new RegExp(good);
    if (words6.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Good to know 😁";
        inputRef.value = ""; // clear the input
      }, 1000);
    }


 

    let response = [
      "I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm great|I'm fine|I'm great|I'm good|i'm good|great|Great",
    ];
    let words7 = new RegExp(response);
    if (words7.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "That is good";
        inputRef.value = ""; // clear the input
      }, 2000);
    }



    let nameAsk = [
      "What's your name|what's your name|What is your name|what is your name",
    ];
    let words8 = new RegExp(nameAsk);
    if (words8.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "My name is XcellaAssist";
        inputRef.value = ""; // clear the input
      }, 2000);
    }




    let owner = [
      "Who is the owner|who is the owner|Who is the owner of this bot|who is the owner of this bot|Who made you|who made you|Who is your maker|Who made you|who is your maker|who is your owner|Who is your owner",
    ];
    let words9 = new RegExp(owner);
    if (words9.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "The maker of this bot is Harsh Moye";
        inputRef.value = ""; // clear the input
      }, 2000);
    }


    let owner2 = [
      "Who's XcellaAssist|who's XcellaAssist|Who is XcellaAssist|who is XcellaAss`ist|What is XcellaAssist|what is XcellaAssist|what's is XcellaAssist|What's XcellaAssist|who are you|Who are you",
    ];
    let words10 = new RegExp(owner2);
    if (words10.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "XcellaAssist is an intelligent and user-friendly chatbot designed to enhance the overall experience of students, faculty, and staff at Padre Conceicao College of Engineering";
        inputRef.value = ""; // clear the input
      }, 2000);
    }



    let ageAsk = [
      "What's your age|what's your age|What is your age|what is your age|How old are you|how old are you",
    ]; //adding the age-question
    let words11 = new RegExp(ageAsk);
    if (words11.test(document.querySelector("#input").value)) {
      // if the input contains some question
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "I am 1 year old";
        inputRef.value = ""; // clear the input
      }, 2000);
    }


    getHumanMessage.innerText = inputRef.value; // display the message

  };




  return (
    <div className="App" onLoad={checkStatus}>
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <div className="img">
              <img src={image} alt="Logo" />
            </div>
              <div className="right">
                <div className="name"><strong>XcellaAssist</strong></div>
                <div className="status">Online</div>
                <button type="submit" onClick={speak} className="btn btn-warning mx-2">Speak</button>
              </div>
          </div>
          <div className="main">
            <div className="mainContent">
              <div className="messages">
                <div className="botMessages" id="Message1"  ref={botmessage}></div>
                <div className="humanMessages" id="Message2" ref={humanMessage}></div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="bottom">
              <div className="input">
                <input type="text" value={text} placeholder="Enter Your Message" onChange={handleOnChange} id="input" ref={input} />
              </div>
              <div className="btn">
                  <button onClick={handleInput}>Send <i className="fa-regular fa-arrow-right"></i></button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
