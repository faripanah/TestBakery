import { useState } from "react";


function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(name, email, address, phone, password, confirmPassword);
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2>Personal Info</h2>
                <form onSubmit={handleFormSubmit}>
                    <label>Full Name:</label>
                    <input 
                        type="text" 
                        className="input-field"
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />

                    <label>Phone Number:</label>
                    <input 
                        type="text" 
                        className="input-field"
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                    />

                    <label>Email:</label>
                    <input 
                        type="email" 
                        className="input-field"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />

                    <label>Password:</label>
                    <input 
                        type="password" 
                        className="input-field"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />

                    <label>Confirm Password:</label>
                    <input 
                        type="password" 
                        className="input-field"
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                    />

                    <button type="submit" className="submit-btn">Submit</button>
                </form>
                <p>Have an account? <a href="/login" className="login-link">Login</a></p>
            </div>
        </div>
    );
}

export default SignUp;
