* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  color: #ededed;
  background: #081b29;

}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 10%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}

.logo {
  font-size: 25px;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  cursor: default;
  opacity: 0;
  animation: slideRight 1s ease forwards;
}

.navbar a {
  font-size: 25px;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  margin-left: 35px;
  transition: 0.3s;
  opacity: 0;
  animation: slideTop .5s ease forwards;
  animation-delay: calc(.2s * var(--i));
}

.navbar a:hover {
  color: #0ef;
}

.home {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #081b29;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 70px 12% 0;
  color: #fff;
}

.home-content {
  max-width: 600px;
}

.home-content h3 {
  font-size: 32px;
  font-weight: 700;
  opacity: 0;
  animation: slideBottom 1s ease forwards;
  animation-delay: .7s;
}

.home-content h3:nth-of-type(2) {
  margin-bottom: 30px;
  animation: slideTop 1s ease forwards;
  animation-delay: .7s;
}

.home-content h3 span {
  color: #0ef;
}

.home-content h1 {
  font-size: 56px;
  font-weight: 700;
  margin: -3px 0;
  opacity: 0;
  animation: slideRight 1s ease forwards;
  animation-delay: 1s;
}

.home-content p {
  font-size: 20px;
  margin-top: 10px;
  opacity: 0;
  animation: slideLeft 1s ease forwards;
  animation-delay: 1s;
}

.home-sci a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 2px solid #0ef;
  border-radius: 50%;
  font-size: 20px;
  color: #0ef;
  text-decoration: none;
  margin: 30px 15px 30px 0;
  transition: .5s ease;
  opacity: 0;
  animation: slideLeft 1s ease forwards;
  animation-delay: calc(.2s * var(--i));
}

.home-sci a:hover {
  background: #0ef;
  color: #081b29;
  box-shadow: 0 0 20px #0ef;
}

.btn-box {
  display: inline-block;
  padding: 10px 28px;
  background: #0ef;
  border-radius: 40px;
  font-size: 16px;
  color: #081b29;
  letter-spacing: 1px;
  text-decoration: none;
  font-weight: 600;
  opacity: 0;
  animation: slideTop 1s ease forwards;
  animation-delay: 2s;
  box-shadow: 0 0 5px #0ef, 0 0 25px #0ef
}

.btn-box:hover {
  box-shadow:
    0 0 5px cyan,
    0 0 25px cyan,
    0 0 50px cyan,
    0 0 100px cyan,
    0 0 200px cyan;
}

.about {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  padding: 80px 10%;
  background: #081b29;
}

.about-img {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.glow-ring {
  width: 200px; /* reduced from 320px */
  height: 200px;
  border-radius: 30%;
  padding: 3px; /* adjust glow padding */
  background: linear-gradient(135deg, #00ffff, #ff00ff, #00ffff);
  animation: glowHue 5s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow:
    0 0 20px #0ef,
    0 0 40px #f0f,
    0 0 60px #0ef;
}

.glow-ring img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #081b29;
}



.about-text {
  flex: 1;
  max-width: 600px;
  color: #ededed;
}

.about-text h2 {
  font-size: 60px;
}

.about-text h2 span {
  color: #0ef;
}

.about-text p {
  margin-top: 20px;
  font-size: 18px;
  line-height: 1.6;
}

.btn-box {
  display: inline-block;
  margin-top: 25px;
  padding: 12px 28px;
  background: #0ef;
  color: #081b29;
  font-weight: bold;
  border-radius: 30px;
  text-decoration: none;
  box-shadow: 0 0 10px #0ef, 0 0 40px #0ef;
}

.btn-box:hover {
  box-shadow: 0 0 20px cyan, 0 0 50px cyan;
}

@keyframes glowHue {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

 












@keyframes glowRotate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}






@keyframes slideRight {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes slideLeft {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes slideTop {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slideBottom {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}












.profile-img {
  width: 520px;
  height: 520px;
  border-radius: 50%;
  object-fit: cover;
  border: none;
  background: transparent;
  transition: 0.4s ease;
  box-shadow: 0 0 1px #0ef;
}

.profile-img:hover {
  box-shadow: 
    0 0 10px #0ef,
    0 0 20px #0ef,
    0 0 40px #0ef,
    0 0 80px #0ef;
  background-color: #0ef;
}




section{
  display: flex;
  flex-wrap: wrap;
}
.container1{
  width: 600px;
  height: 500px;
  padding: 75px 90px;
  margin-left: 120px
}





<section>
  <div class="container" id="Skills">
    <h1 class="heading1">Technical Skills</h1>
    <div class="Technical-bars">
      <div class="bar"><i style="color:#c32ec9"class="bx bxl-python"></i>
        <div class="info">
          <span>Python</span>
        </div>
        <div class="progress-line python">
          <span></span>
        </div>
      </div>

      <div class="bar">
        <div class="info">
          <span>C</span>
        </div>
        <div class="progress-line C">
          <span></span>
        </div>
      </div>

      <div class="bar">
        <div class="info">
          <span>Machine Learning</span>
        </div>
        <div class="progress-line machine learning">
          <span></span>
        </div>
      </div>

      <div class="bar">
        <div class="info">
          <span>Deep Learning</span>
        </div>
        <div class="progress-line deep learning">
          <span></span>
        </div>
      </div>

      <div class="bar">
        <div class="info">
          <span>Data Analytics</span>
        </div>
        <div class="progress-line Data Analytics">
          <span></span>
        </div>
      </div>
    </div>
    </div>

    <div class="container1">
      <h1 class="heading1">Professional Skills</h1>
      <div class="radial-bars">
        <svg x="0px",y="0px" viewBox="0 0 200 200">
          <circle class="progress-bar" cx="100" cy="100" r="40"></circle>
          <circle class="path path-1" cx="100" cy="100" r="40"></circle>
        </svg>
        <div class="percentage">90%</div>
        <div class="text">Problem Solving</div>
      </div>

       <div class="radial-bars">
        <svg x="0px",y="0px" viewBox="0 0 200 200">
          <circle class="progress-bar" cx="100" cy="100" r="40"></circle>
          <circle class="path path-1" cx="100" cy="100" r="40"></circle>
        </svg>
        <div class="percentage">70%</div>
        <div class="text">Communication</div>
      </div>

       <div class="radial-bars">
        <svg x="0px",y="0px" viewBox="0 0 200 200">
          <circle class="progress-bar" cx="100" cy="100" r="40"></circle>
          <circle class="path path-1" cx="100" cy="100" r="40"></circle>
        </svg>
        <div class="percentage">85%</div>
        <div class="text">Creativity</div>
      </div>
      
       <div class="radial-bars">
        <svg x="0px",y="0px" viewBox="0 0 200 200">
          <circle class="progress-bar" cx="100" cy="100" r="40"></circle>
          <circle class="path path-1" cx="100" cy="100" r="40"></circle>
        </svg>
        <div class="percentage">90%</div>
        <div class="text">Team Work</div>
      </div>

    </div>
  
</section>
