import Home from "./Home";
import Dashboard from "./Dashboard";
import Heroes from "./Heroes";
import ErrorPage from "./ErrorPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroDetails from "./HeroDetails";
import { useState } from 'react';

function App() {

  const nameArrayDefault = ["Iron Man", "Captain America", "Spiderman", "Ben 10", "Black Panther", "Thor", "The Hulk", "Super-Man", "Bat-Man"];

  const imageArray = [
    "https://i.pinimg.com/736x/ae/7e/91/ae7e91c4194380662ecdbe409bb00571.jpg",
    "https://i.pinimg.com/originals/a6/66/f9/a666f9ba9f4965d3076e645cb8905b35.jpg",
    "https://i.pinimg.com/736x/65/58/b2/6558b2276613aa495f70f2f99c8a8751.jpg",
    "https://i.pinimg.com/564x/f9/db/63/f9db630a83fc63e1ce83ab094ba17360.jpg",
    "https://i.pinimg.com/736x/d6/31/a6/d631a6bdb73965ec7c5387aba3c1da73.jpg",
    "https://i.pinimg.com/originals/c4/8e/c8/c48ec805ab6adb7738c5551bea137939.jpg",
    "https://i.pinimg.com/564x/98/9f/7e/989f7e855f2755c2c7a88fbfb0cb219a.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFtTNoxnsMoa774gp--PbExsFSfG61RkwM1w&s",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f5c7f39e-6019-4372-9030-d351ed796b5f/dddve9s-b73f4e90-9201-43a6-94fe-016df547e25a.jpg/v1/fill/w_1024,h_576,q_75,strp/batman_logo__metal__by_danielbeadle_dddve9s-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZjVjN2YzOWUtNjAxOS00MzcyLTkwMzAtZDM1MWVkNzk2YjVmXC9kZGR2ZTlzLWI3M2Y0ZTkwLTkyMDEtNDNhNi05NGZlLTAxNmRmNTQ3ZTI1YS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.cXDWncrw3Z3VwWKW0ShpNU8F98SoYtHZHOwt5wwG5eQ"
];

const [nameArray, setNameArray] = useState(nameArrayDefault.map(name => name));

  return (
    <Router basename="/tour-of-heroes">
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard nameArray={nameArray} imageArray={imageArray} />} />
        <Route path="/heroes" element={<Heroes nameArray={nameArray} imageArray={imageArray} />} />
       
        <Route path="/heroes/hero/:id" element={<HeroDetails nameArray={nameArray} setNameArray={setNameArray} imageArray={imageArray} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
