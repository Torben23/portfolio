import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, resume }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          {resume}
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Those proyects has enlightened me, and i look forward in expanding my knowledge by accepting new challenges thay would help me grow in my career. Eventually, i see myself in leader role were i can use my experience and skills to help others and achieve new goals.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          
            <a href={`https://mobile-app.marcosberton.repl.co`} target="_blank" rel="noopener noreferrer">
           <Project title="Project 1" resume="Mobile App Navigation"  />
            </a>
                      
            <a href={`https://Menu.marcosberton.repl.co`} target="_blank" rel="noopener noreferrer">
          <Project title="Project 2" resume="Restaurant menu" />
            </a>
              
           <a href={`https://ia-images.netlify.app/`} target="_blank" rel="noopener noreferrer">
          <Project title="Project 3" resume="IA images with they respective prompt" />
            </a>
             
          {/* ROW 2 */}
          
            <a href={`https://Form-Imput.marcosberton.repl.co`} target="_blank" rel="noopener noreferrer">  
          <Project title="Project 4" resume="Login and registration form in HTML, CSS & JavaScript" />
            </a>
          
             <a href={`https://expanding-img.marcosberton.repl.co/`} target="_blank" rel="noopener noreferrer">
           <Project title="Project 5" resume="Expanding Cards with HTML, CSS & JS"  />
            </a> 
                        
              
          <a href={`https://back-images.marcosberton.repl.co/`} target="_blank" rel="noopener noreferrer">
          <Project title="Project 6" resume="React JS Background slider" />
            </a>

            {/* ROW 3 */}
          
          <a href={`analog-clock-2.netlify.app`} target="_blank" rel="noopener noreferrer">
          <Project title="Project 7" resume="React Js Analog Clock" />
            </a>

          <a href={`https://todolist.marcosberton.repl.co`} target="_blank" rel="noopener noreferrer">
           <Project title="Project 8" resume="'To do list' to organize your work & life"  />
            </a>

          <a href={`https://Draw.marcosberton.repl.co`} target="_blank" rel="noopener noreferrer">
           <Project title="Project 9" resume="Simple drawing app"  />
            </a>

          {/* ROW 4 */}

          <a href={`https://LinkBand.marcosberton.repl.co`} target="_blank" rel="noopener noreferrer">
          <Project title="Project 10" resume="Social links for a band" />
          </a>
            
           <a href={`https://Quiz-App.marcosberton.repl.co`} target="_blank" rel="noopener noreferrer">
           <Project title="Project 11" resume="Quiz app" />
            </a>
          
          <a href={`https://Live-User-Filter.marcosberton.repl.co`} target="_blank" rel="noopener noreferrer">
           <Project title="Project 12" resume="Live User Filter"  />
            </a>
           {/* ROW 5 */}
          <a href={`https://Calculator.marcosberton.repl.co`} target="_blank" rel="noopener noreferrer">
           <Project title="Project 13" resume="React Js calculator with MathJs library"  />
            </a>
          <a href={`https://Bateria.marcosberton.repl.co`} target="_blank" rel="noopener noreferrer">
          <Project title="Project 14" resume="Electronic drum. You can play it with mouse or keyboard." />
            </a>

          <a href={`https://Frases.marcosberton.repl.co`} target="_blank" rel="noopener noreferrer">
          <Project title="Project 15" resume="Random quote machine" />
            </a>

          </motion.div>
      </div>
    </section>
  );
};

export default Projects;
