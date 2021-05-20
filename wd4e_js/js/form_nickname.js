function nicknameFunction(){
    if (document.getElementById('yesNick').checked){
  document.getElementById('nick').style.display="inline";
  document.getElementById('nickname').setAttribute('required',true);
    }
    else{ 
        document.getElementById('nickname').removeAttribute('required');
        document.getElementById('nick').style.display="none";
    }
}


/*function nicknameFunction(){     //both works same
    if (yesNick.checked){
  nick.style.display="inline";
  nickname.setAttribute('required',true);
    }
    else{ 
        nickname.removeAttribute('required');
        nick.style.display="none";
    }
}*/
