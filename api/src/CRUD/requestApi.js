const { 
    API_KEY01, 
    API_KEY02, 
    API_KEY03, 
    API_KEY04, 
    API_KEY05 } =
  process.env;

const requestAPi= ()=>{
    let Index = 0
    switch (index) {
        case 1: API_KEY = API_KEY01; break;
        case 2: API_KEY = API_KEY02; break;
        case 3: API_KEY = API_KEY03; break;
        case 4: API_KEY = API_KEY04; break;
        case 5: API_KEY = API_KEY05; break;
        default: API_KEY = API_KEY01; break;
    }
}
