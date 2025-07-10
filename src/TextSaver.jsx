import React, { useState } from 'react';

function TextSaver() {
  // const [text, setText] = useState('');

  // const handleChange = (e) => {
  //   setText(e.target.value);
  // };
  const [isDark, setIsDark] = useState(false);


  // const isAdmin = true
  // const isSubscribed = false
  // const isOnline = true
  // const temperature = 15import React, { useState } from 'react';

 
 


  const [show, setShow] = useState(false);

  
  



  return (


    <div>




<button onClick={() => setShow(!show)}>
        {show ? "🔽 Жасыру" : "🔼 Көбірек көрсету"}
      </button>
      {show && <p>✨ Бұл қосымша ақпарат!</p>}
      {/* <div style={{
      backgroundColor: isDark ?"black":"white",
      color:isDark?"white":"black",
      height:"100vh",
      display: "flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column",
        }}>
        

        <p>{isDark ? "🌙қараңғы режим":"☀Жарық режим"}</p>
        <button onClick={()=>setIsDark(!isDark)}>
          {isDark ? "Жарық режимге ауысу":"Қараңғы режимге ауысу"}
        </button>
      </div>
      {!isSubscribed && <p>Сіз премием қолданушысыз</p> || <p>Қарапайым қолданушысыз🤞</p>}
      {isAdmin && <p>Сіз әкімшісіз🤵</p>}

      <p>{isOnline ? "Қолданушы онлайн" : "Қолданушы офлайн"}</p>
      <p>{temperature > 40 ? "Ыстық" : temperature > 20 ? "Жылы" : "Суық"}</p> */}


    </div>
    //  <div>

    //   <input
    //     type="text"
    //     onChange={handleChange}
    //     placeholder="Мәтін енгізіңіз"
    //   />
    //   <p>Терілген текст:{text}</p>
    //  </div>
  );
}

export default TextSaver;
