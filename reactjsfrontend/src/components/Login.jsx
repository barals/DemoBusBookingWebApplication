import '../styles/Login.css'

function Login() {
    return (
        <>
            <div id="main-content">
                <div id="login_div">
                    <div id="login_header_label">
                        <h2><label>Login Page</label></h2>
                    </div>
                    <div id="login_username_password">
                        <label>USERNAME</label>
                        <input type="text" value="Enter the user name"/>
                        <br/><br/>
                        <label>PASSWORD</label>
                        <input type="text" value="Enter the password"/>
                        <br/><br/>
                    </div>
                    <div id="login_button">
                        <div id="back_button">
                            <input type="button" value="BACK"/>
                        </div>
                        <div id="submit_button">
                            <input type="button" value="SUBMIT"/>
                        </div>
                        <br/><br/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Login;
