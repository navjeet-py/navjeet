import React, {useEffect} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import MySkills from "../../Components/MySkills/MySkills";

const Home = () => {
    useEffect(() => {
        document.title = 'Skills • Navjeet'
    }, [])
    return (
        <div>
            <Navbar active="Skills"/>
            <MySkills/>
        </div>
    )

}

export default Home;