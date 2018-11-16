import  React  from  'react';

const  GenerateSimpsons = ({ selectSimpson }) => {
    return (
        <div className="GenerateSimpsons">
        <button onClick={selectSimpson}>Get Simpsons quote</button>
        </div>
    );
};

export  default  GenerateSimpsons;

