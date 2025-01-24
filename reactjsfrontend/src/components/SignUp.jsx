import '../styles/SignUp.css';

function SignUp() {
    return (
        <>
            <div id="main-container">
                <div id="main-context">
                    <div id="sign_up_div">
                        <div id="sign_up_header_label">
                            <h2><label>Sign up Page</label></h2>
                        </div>
                        <div id="signup_form_content">
                            <label>FIRST NAME</label>
                            <input type="text" value="Enter the First Name"/>
                            <br/><br/>
                            <label>LAST NAME</label>
                            <input type="text" value="Enter the Last Name"/>
                            <br/><br/>
                            <label>CONTACT NUMBER</label>
                            <input type="text" value="Enter the Mobile Number"/>
                            <br/><br/>
                            <label>EMAIL ID</label>
                            <input type="text" value="Enter the Email Address"/>
                            <br/><br/>
                            <label>USERNAME</label>
                            <input type="text" value="Enter the desired User Name"/>
                            <br/><br/>
                            <label>PASSWORD</label>
                            <input type="text" value="Enter the desired Password"/>
                            <br/><br/>
                            <label>CONFIRM PASSWORD</label>
                            <input type="text" value="Confirmed the password"/>
                            <br/><br/>
                        </div>
                        <div id="back_signup_button">
                            <div id="back_button">
                                <input type="button" value="BACK"/>
                            </div>
                            <div id="signup_button">
                                <input type="button" value="SIGNUP"/>
                            </div>
                        </div>
                        <br/><br/>
                    </div>
                </div>

            </div>
        </>

    )
};

export default SignUp;
