function getFormInput(){
    var date = document.getElementById('dateInput').value
    const male = document.getElementById("maleRadio");
    const female = document.getElementById("femaleRadio");
    var dayIndex = new Date(date).getDay();

        //Evaluating for the day of the week based on the day index
        const getDayName = (dayIndex) =>{
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            return days[dayIndex];
        }
        const dayName = getDayName(dayIndex)

        //Evaluating the Male Akan Name based on the dayindex
        const getMaleAkanName = (dayIndex)=>{
            const names = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
            return names[dayIndex];
        }

        //Evaluating the Female Akan Name based on the dayindex 
        const getFemaleAkanName = (dayIndex)=>{
            const names = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
            return names[dayIndex];
        }

        
        //Evaluating the gender supplied by the user 
        
        if(male.checked){
            var gender = 'Male'
            var akanName = getMaleAkanName(dayIndex)

        }else if(female.checked){
            var gender = 'Female'
            var akanName = getFemaleAkanName(dayIndex)
        }

       
        console.log(akanName)
        
        //Displaying Akan name on the UI using an alert box
        document.getElementById('displayName').innerHTML =alert("Congratulations!!! Your Akan Name is: " +akanName+". You are a "+gender+" born on a "+dayName)


}

