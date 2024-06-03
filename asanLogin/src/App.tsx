import { useEffect } from "react";

const App:React.FC=()=>{
  const generateKey = () => {
    const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let key: string = '';
    for (let i: number = 0; i < 8; i++) {
      key += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    return key;
  };

  const handleClick=()=>{
    const newKey:string=generateKey()
    sessionStorage.setItem('generatedKey', newKey);
    window.location.href = `https://portal.login.gov.az/grant-permission?client_id=fb541713acd54641b4e24b3724ca811e&redirect_uri=http://localhost:5901&response_type=code&state=${newKey}&scope=openid certificate session`
  }
  // console.log(window.location.href);
  const urlParams = new URLSearchParams(window.location.search);
  const returnedState = urlParams.get('state');
  useEffect(() => {
    if(returnedState){
      sessionStorage.setItem('returnedKey', returnedState);
      const generatedKey = sessionStorage.getItem('generatedKey');
      const returnedKey = sessionStorage.getItem('returnedKey');
      if(generatedKey !== returnedKey){
        alert("State deyerleri eyni deyil");
        window.location.href = 'http://localhost:5901';
      }else{
        alert('State deyerleri uyğunlaşdı')
      }
    }
  }, [])
  return (
    <>
      <button onClick={handleClick} className='flex items-center'>Redirect</button> 
    </>
  )
}

export default App