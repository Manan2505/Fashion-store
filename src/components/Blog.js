import React from 'react';

export default function Blog(){

  const handleDivClick = () => {
    window.open(process.env.PUBLIC_URL + './BlogData.html', '_blank');
  };
  const handleDivClick2 = () => {
    window.open(process.env.PUBLIC_URL + './BlogData2.html', '_blank');
  };
  const handleDivClick3 = () => {
    window.open(process.env.PUBLIC_URL + './BlogData3.html', '_blank');
  };


    return (
        <div className="blog" id="blog">
            <img src={require("../assets/line.png")} className="lineUp" />
            <img src={require("../assets/Rectanglebg.png")} className="ReactangleBlog" loading="eager" />
            <div className="bloghead">
              <div className="M_L">
                <h1 className="m1">from the blog</h1>
                <div className="bR" />
              </div>
            </div>
            <div className="mainblog">
              <div className="blog1"  onClick={handleDivClick} title="Click to Read More..">
                <div className="b">
                  <img src={require("../assets/b1.png")} loading="eager" />
                  <div>25 <span>OCT</span></div>
                </div>
                <h3>Fashion and Self-Expression</h3>
                <p>Encourage readers to embrace their individuality through fashion. Discuss self-expression, personal style, and how clothing can reflect personality.</p>
              </div>
              <div className="blog2" onClick={handleDivClick2} title="Click to Read More..">
                <div className="b">
                  <img src={require("../assets/b2.png")} loading="eager" />
                  <div>12 <span>SEP</span></div>
                </div>
                <h3>Eco-Friendly Fashion</h3>
                <p>Educate readers about sustainable fabrics like organic cotton, bamboo, and recycled materials. Showcase eco-conscious fashion brands making a impact.</p>
              </div>
              <div className="blog3" onClick={handleDivClick3} title="Click to Read More..">
                <div className="b">
                  <img src={require("../assets/b3.png")} loading="eager" />
                  <div>02 <span>JUN</span></div>
                </div>
                <h3>Trendy Accessories to Elevate Look</h3>
                <p>Showcase trendy accessories such as statement earrings, scarves, or belts. Offer ideas on how to accessorize outfits,where to find unique accessories.</p>
              </div>
            </div>            
            <img src={require("../assets/line.png")} className="lineDown" />
          </div>
    );
}