import { useState } from "react";

const StateForm = () => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState(null);
    const [error, setError] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handlePassChange = (e) => {
        setPass(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(pass.length < 6){
            setError('Password must be at least 7 characters long')
        }
        else{
            setError('')
            console.log(name);
            console.log(pass);
            e.target.name.value = '';
            e.target.password.value = '';
        }        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" name="name" placeholder="name"/>
                <br />
                <input onChange={handlePassChange} type="password" name="password" placeholder="password" 
                required/>
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateForm;