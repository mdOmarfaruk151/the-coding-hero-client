import React from 'react';


const CountDownBody = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
console.log(timerDays, timerHours, timerMinutes, timerSeconds)
    return (
        <div>
                    <div>
              <div className="flex gap-5">
  <div>
    <span className="countdown font-mono text-4xl">
    {timerDays}
    </span>
    days
  </div> 
  <div>
    <span className="countdown font-mono text-4xl">
    {timerHours}
    </span>
    hours
  </div> 
  <div>
    <span className="countdown font-mono text-4xl">
      
      {timerMinutes}
    </span>
    
    min
  </div> 
  <div>
    <span className="countdown font-mono text-4xl">
    {timerSeconds}
    </span>
    sec
  </div>
</div>
        </div>
        </div>
    );
};

CountDownBody.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
  };


export default CountDownBody;