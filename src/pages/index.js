import React from "react"
import Image from './../images/pic01.jpg';
import Image2 from './../images/pic02.jpg';
import Image3 from './../images/pic03.jpg';
import Image4 from './../images/pic04.jpg';

import Layout from "../components/layout";




const One = () => (
    <section id="one" className="main style1">
      <div className="container">
          <div className="row gtr-150">
              <div className="col-6 col-12-medium">
                  <header className="major">
                      <h2>Lorem ipsum dolor adipiscing<br />
                      amet dolor consequat</h2>
                  </header>
                  <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
              </div>
              <div className="col-6 col-12-medium imp-medium">
                  <span className="image fit"><img src={Image} alt="" /></span>
              </div>
          </div>
      </div>
    </section>
)

const Two = () =>
<section id="two" className="main style2">
<div className="container">
    <div className="row gtr-150">
        <div className="col-6 col-12-medium">
            <ul className="major-icons">
                <li><span className="icon solid style1 major fas fa-code"></span></li>
                <li><span className="icon solid style2 major fas fa-bolt"></span></li>
                <li><span className="icon solid style3 major fas fa-camera-retro"></span></li>
                <li><span className="icon solid style4 major fas fa-cog"></span></li>
                <li><span className="icon solid style5 major fas fa-desktop"></span></li>
                <li><span className="icon solid style6 major fas fa-calendar"></span></li>
            </ul>
        </div>
        <div className="col-6 col-12-medium">
            <header className="major">
                <h2>Lorem ipsum dolor adipiscing<br />
                amet dolor consequat</h2>
            </header>
            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
            <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
        </div>
    </div>
</div>
</section>


const Three = () =>
<section id="three" className="main style1 special">
<div className="container">
    <header className="major">
        <h2>Adipiscing amet consequat</h2>
    </header>
    <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
    <div className="row gtr-150">
        <div className="col-4 col-12-medium">
            <span className="image fit"><img src={Image2} alt="" /></span>
            <h3>Magna feugiat lorem</h3>
            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
            <ul className="actions special">
                <li><a href="#" class="button">More</a></li>
            </ul>
        </div>
        <div className="col-4 col-12-medium">
            <span className="image fit"><img src={Image3} alt="" /></span>
            <h3>Magna feugiat lorem</h3>
            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
            <ul className="actions special">
                <li><a href="#" className="button">More</a></li>
            </ul>
        </div>
        <div className="col-4 col-12-medium">
            <span className="image fit"><img src={Image4} alt="" /></span>
            <h3>Magna feugiat lorem</h3>
            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
            <ul className="actions special">
                <li><a href="#" className="button">More</a></li>
            </ul>
        </div>
    </div>
</div>
</section>

const Four = () =>
<section id="four" className="main style2 special">
    <div className="container">
        <header className="major">
            <h2>Ipsum feugiat consequat?</h2>
        </header>
        <p>Sed lacus nascetur ac ante amet sapien.</p>
        <ul className="actions special">
            <li><a href="#" className="button wide primary">Sign Up</a></li>
            <li><a href="#" className="button wide">Learn More</a></li>
        </ul>
    </div>
</section>

const Content = () => (
  <div>
    <Layout>
      <One/>
      <Two/>
      <Three/>
      <Four/>
    </Layout>

  </div>

)
export default Content
