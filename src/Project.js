import image1 from "./images/proj1.jpg"
import image2 from "./images/proj2.jpg"
import image3 from "./images/proj3.jpg"
import image4 from "./images/proj4.jpg"
function Project(){
  var arr=[{title:"Project1",image:image1},{title:"project2",image:image2},{title:"project3",image:image3},{title:"project4",image:image4}]
    return(
    <div>
    
    <section id="projects">
      <h2 className="text-important">Projects</h2>
      <div className="projects-container">
        
{arr.map((el)=> <div className="project-card">
          <img src={el.image} alt="project" />
          <h3>{el.title}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#z">Github Link</a></p>
        </div>)}

       
        
        
      </div>
    </section>
    </div>
    
    );
    
    }
    
    export default Project