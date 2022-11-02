fetch("./index.json")
.then((res) => res.json())
.then((obj) => {console.log(obj)
    // koppla ihop json med js



    const workexperience = document.querySelector("#workexperience");
    const education = document.querySelector("#education");

    function renderCv(jsonData, ulElement){ 
        for (let experience of jsonData){
            const titleElement = document.createElement("li");
            titleElement.innerHTML = "<strong>" + experience.title + "</strong>" + "&nbsp; " + experience.year;
            ulElement.append(titleElement);
            

            for (let description of experience.description){
                const descriptionElement = document.createElement("li");
                descriptionElement.innerHTML = description;
                ulElement.append(descriptionElement);
             
            }
        
        }
    }
    renderCv(obj.workexperience, workexperience);
    renderCv(obj.education, education);

    



});










   

      

       
 



    
   // const education = document.querySelector("#education");

    //for (let educationCv of obj.education){

       // const titleElement = document.createElement("li");
       // titleElement.innerHTML = "<strong>" + educationCv.title + "</strong>" + "&nbsp; " + educationCv.year;
      //  education.append(titleElement);
//loop för education
      // for (let description of educationCv.description){
        
         //const descriptionElement = document.createElement("li");
         //descriptionElement.innerHTML = description;
            //education.append(descriptionElement);

     //  }
//loop för description
   // }
 
    

//})
