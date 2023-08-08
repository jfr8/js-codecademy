const getSleepHours = (day) => {

    if(day === 'monday') {
      return 7
    } else if (day === 'tuesday') {
      return 7
    } else if (day === 'wednesday') {
      return 7
    } else if (day === 'thrusday') {
      return 7
    } else if (day === 'friday') {
      return 7
    } else if (day === 'saturday') {
      return 8
    } else if (day === 'sunday') {
      return 9
    }
    }
    
    const getActualSleepHours = () => {
      let monday = getSleepHours('monday')
      let tuesday = getSleepHours('tuesday')
      let wednesday = getSleepHours('wednesday')
      let thrusday = getSleepHours('thrusday')
      let friday = getSleepHours('friday')
      let saturday = getSleepHours('saturday')
      let sunday = getSleepHours('sunday')
      
      let totalHoursSleep = monday + tuesday + wednesday + thrusday + friday + saturday + sunday;
    
      return totalHoursSleep;
    }
    
    //console.log(getActualSleepHours())
    
    const getIdealSleepHours = () => {
      let idealHours = 8;
    
      return idealHours * 7;
    }
    
    //console.log(getIdealSleepHours())
    
    const calculateSleepDebt = () => {
      actualSleepHours = getActualSleepHours()
      idealSleepHours =  getIdealSleepHours()
    
      if (actualSleepHours === idealSleepHours){
        console.log('User got the perfect sleep amount!')
      } else if (actualSleepHours > idealSleepHours) {
        let hoursExtraSlept = actualSleepHours - idealSleepHours; 
        console.log(`User got more sleep hours than needed, with ${hoursExtraSlept} more hours!`)
      } else if (actualSleepHours < idealSleepHours) {
        let hoursMissingSlept = idealSleepHours - actualSleepHours; 
        console.log(`User got less sleep hours than needed! with ${hoursMissingSlept} less hours!`)
      }
    }
    
    calculateSleepDebt()
    
    
    