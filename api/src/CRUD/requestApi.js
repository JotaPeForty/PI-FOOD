const { 
    API_KEY_1, 
    API_KEY_2, 
    API_KEY_3, 
    API_KEY_4, 
    API_KEY_5 } =
  process.env;

  let index = 1;
  let apikey

const requestAPi= ()=>{
    try{
    switch (index) {
        case 1: apikey = API_KEY_1; break;
        case 2: apikey = API_KEY_2; break;
        case 3: apikey = API_KEY_3; break;
        case 4: apikey = API_KEY_4; break;
        case 5: apikey = API_KEY_5; break;
        default: apikey = API_KEY_1; break;
    }

}catch (err) {
        if (index >= 5) {
          index = 1;
      } else {
          index++
      }
      return [index];
      }
}
