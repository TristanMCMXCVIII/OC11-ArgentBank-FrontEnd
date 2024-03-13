import LogInForm from "../../components/LogInForm";

import "./LogIn.scss";

function LogIn(){
    return(
        <main className="main bg-dark sign-in-layout">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <LogInForm />
            </section>
        </main>
    );
};

export default LogIn;