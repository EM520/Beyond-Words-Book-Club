import React, { useState, useEffect } from "react";
import NavBar from "../headerfooter/NavBar";
import Footer from "../headerfooter/Footer";
import styles from "./Search.module.css";
// import { Select } from 'antd';

export default function Search(){
    return(
        <>
        <NavBar />
        <div className={styles.container}>
            <div className={styles.searchbar}>
            <label>Sort by:</label>
            <select >    
                <option>---Most Popular---</option>
                <option>BookName</option>
                <option>Author</option>
                <option>Rank</option>
            </select> 
            
            <label>Item per page:</label> 
             <select >    
                
                <option>30</option>
                <option>20</option>
                <option>10</option>
            </select> 
            
            </div>
        </div>
        <Footer/>
        </>
    )
}

// import { Select } from 'antd';

// const { Option } = Select;
// const provinceData = ['Zhejiang', 'Jiangsu'];
// const cityData = {
//     "Most Popular": ['BookName', 'Author', 'Rank'],
//     "Item per page":['30', '20', '10'],
// };

// const App = () => {
//   const [cities, setCities] = React.useState(cityData[provinceData[0]]);
//   const [secondCity, setSecondCity] = React.useState(cityData[provinceData[0]][0]);

//   const handleProvinceChange = value => {
//     setCities(cityData[value]);
//     setSecondCity(cityData[value][0]);
//   };

//   const onSecondCityChange = value => {
//     setSecondCity(value);
//   };

//   return (
//     <>
//       <Select defaultValue={provinceData[0]} style={{ width: 120 }} onChange={handleProvinceChange}>
//         {provinceData.map(province => (
//           <Option key={province}>{province}</Option>
//         ))}
//       </Select>
//       <Select style={{ width: 120 }} value={secondCity} onChange={onSecondCityChange}>
//         {cities.map(city => (
//           <Option key={city}>{city}</Option>
//         ))}
//       </Select>
//     </>
//   );
// };

// ReactDOM.render(<App />, mountNode);