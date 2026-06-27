import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { motion } from "framer-motion";
import resume from "../assets/sudhi_resume.pdf"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [ "DSA Enthusiast", "Competitive Programmer", "Aspiring Software Developer", "Full Stack Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
              <div className={"animate__animated animate__fadeIn"}>
                <span className="tagline">Engineering Solutions, Debugging Possibilities</span>
                <h1>{`Hi! I'm Sudheshna`} <br></br><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Code Crafter", "Silent Hustler" ]'><span className="wrap">{text}</span></span></h1>
                  <p className="Bannerp">I'm a final-year Integrated B.Tech + M.Tech student in Information Technology at ABV-IIITM Gwalior, passionate about building scalable software, solving challenging problems, and transforming ideas into impactful products. I specialize in full-stack development, data structures & algorithms, and modern web technologies, with hands-on experience building end-to-end applications using React.js, Node.js, Express.js, MongoDB, JavaScript, Python, and C++. I'm currently seeking Software Engineering internship and full-time opportunities where I can build meaningful products, solve complex engineering challenges, and grow alongside talented teams.</p>
                  <button><a href={resume}>Resume<ArrowRightCircle size={25} /></a></button>
              </div>
          </Col>
        </Row>
              </Container>
              <div className='xs:bottom-10 bottom-32 w-full flex justify-center items-center Bannerp'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0,24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}
