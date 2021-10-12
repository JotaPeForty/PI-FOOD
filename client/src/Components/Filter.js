// import React, {useState} from 'react'
// import { filterDiets } from "../Redux/Actions/index";
// import { useDispatch } from "react-redux";

// function Filter() {
//     //const [filter, setFilter] = useState("")
//     const dispatch = useDispatch();

//     function handleFliterDiets(e){
//         dispatch(filterDiets(e.target.value))
//       }
//     return (
//         <div>
//             <select onChange={e=>handleFliterDiets(e)}>
//                 <option value="all">All</option>
//                 <option value="gluten free">Gluten Free</option>
//                 <option value="ketogenic">Ketogenic</option>
//                 <option value="vegetarian">Vegetarian</option>
//                 <option value="dairy free">Dairy Free</option>
//                 <option value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
//                 <option value="fodmap friendly">Fodmap Friendly</option>
//                 <option value="vegan">Vegan</option>
//                 <option value="pescatarian">Pescatarian</option>
//                 <option value="paleolithic">Paleolithic</option>
//                 <option value="primal">Primal</option>
//                 <option value="whole 30">Whole 30</option>
//             </select>
//         </div>
//     )
// }

// export default Filter
