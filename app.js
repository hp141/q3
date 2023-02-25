function verify() {
    checkpass = document.getElementById("pass").value;
    split = 2;
    if (checkpass.substring(0, split) == '#n') {
      if (checkpass.substring(split*6, split*7) == 'V@') {
        if (checkpass.substring(split, split*2) == '3r') {
         if (checkpass.substring(split*4, split*5) == 'In') {
          if (checkpass.substring(split*3, split*4) == 'To') {
            if (checkpass.substring(split*5, split*6) == 'No') {
              if (checkpass.substring(split*2, split*3) == 'Ve') {
                if (checkpass.substring(split*7, split*8) == 't3') {
                  alert(key)
                  }
                }
              }
      
            }
          }
        }
      }
    }
    else {
      alert("Incorrect password");
    }
    
  }