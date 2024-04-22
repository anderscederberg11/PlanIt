import ButtonColoured from "../../mainButton"
import styles from "@/components/MainPageComponents/EnterName/EnterName.module.css"
import { useState } from "react";
import { useEffect } from "react";

export default function EnterName({ handleContinueClick }){

    const nameRegex = /^(?!.*(.)\1\1)(?!.*\b(fuck|shit|asshole|bitch|damn|gyatt)\b)[a-zA-Z]{3,}$/i;
    //no three consecutive characters, no inputs less than three characters, nothing besides letters, no profanity
    const[firstName, setFirstName] = useState('')
    const firstNameValid = nameRegex.test(firstName);

    const labelStyle = firstName ? { borderColor: firstNameValid ? 'var(--green)' : '#F4557E' } : {};

    useEffect(() => {
        localStorage.setItem('name', firstName);
    }, [firstName]);

    return(
        <>
            <h1 className={styles.logoPlanit}>PlanIt</h1>
            <label className={styles.inputArea}>
                <p>PLEASE ENTER YOUR NAME</p>
                <input 
                    className={styles.nameInput} 
                    type="text" 
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    style={labelStyle}
                />
            </label>
            <div className={styles.EnterNamePageButton}>
                {firstNameValid ? (
                        <div>
                            <ButtonColoured 
                                href={{
                                    pathname: '/',
                                    query: { name: firstName }
                                  }}
                                text="CONTINUE"
                                onClickHandler={handleContinueClick}
                            />
                        </div>
                    ) : 
                        <div>
                            <ButtonColoured 
                                href=""
                                text="CONTINUE"
                                bgColor="#D9D8D2"
                                primaryColor="var(--black)"
                            />
                        </div>
                }
            </div>


        </>
    )
}