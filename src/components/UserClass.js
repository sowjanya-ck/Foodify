import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);// its compulsory 
        this.state = {
            count:0,
            count2:0,
            count5:0,
            userInfo:{
                name: "dummy name",
                location: "default",
            },
        }
    }
   async  componentDidMount(){
    const data  = await fetch("https://api.github.com/users/sowjanya-ck");
    const json = await data.json();
    console.log(json);
    this.setState({
        userInfo: json,
    })
    }
    componentDidUpdate(){
        console.log("componet did update");
    }

    componentWillUnmount(){
        console.log("return once swithc to other componetn");
    }
    render(){
        const {name, location} = this.state.userInfo;
        const {count} = this.state;
        
        return (
            <div className="user_card">
            <h2>Hello I am {name}</h2>   
            <h3>Location: {location}</h3>
            {/* <h3>Count is : {count}</h3>
            <button onClick={(count2)=>{
                //never update state variables directly
                this.setState({
                    count:count+1,
                    count5:this.state.count5+2
                })
                }}>count increase</button>
            <h3>Count5 is : {this.state.count5}</h3>
            <h3>Count2 is : {this.state.count2}</h3>


            <h4>Contact: xx9342xxxx</h4> 
            <h4>Linkdin: sowjnaya-kumari/</h4> */}


         </div>
        );
    }
}

export default UserClass;