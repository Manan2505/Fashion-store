import { useNavigate } from 'react-router-dom';

export default function Women(){
  const navigate = useNavigate();
    return (
        <div className="women">
            <img src={require("../assets/Rectanglebg.png")} loading="lazy" className="r1" />
            <div className="w1">
              <h2 className="w">Clothes</h2>
              <button className="Wbtn" onClick={()=>{navigate('/men');}}>Click here</button>
            </div>
            <div className="w2">
              <h2 className="w">Footwear</h2>
              <button className="Wbtn" onClick={()=>{navigate('/shop');}}>Click here</button>
            </div>
            <div className="w3">
              <h2 className="w">Hand Bags</h2>
              <button className="Wbtn" onClick={()=>{navigate('/men');}}>Click here</button>
            </div>
          </div>
    );
}