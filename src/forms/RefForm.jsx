import { useRef } from "react";

const RefForm = () => {
    const namRef = useRef(null);
    const passRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(namRef.current.value);
        console.log(passRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={namRef} type="text" name="name" placeholder="name"/>
                <br />
                <input ref={passRef} type="password" name="password" placeholder="password"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;