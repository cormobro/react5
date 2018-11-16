import  React  from  'react';

const  DisplaySimpson = ({ simpson }) => {
    return (
        <div  className="DisplaySimpson">
            <img  src={simpson.image}  alt="picture"  />
            <ul>
                <li>Quote : {simpson.quote}</li>
                <li>
                    Character : {simpson.character}
                </li>
            </ul>
        </div>
    );
};

export  default  DisplaySimpson;

