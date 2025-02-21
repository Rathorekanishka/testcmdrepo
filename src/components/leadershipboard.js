import React from "react";
const arrayList = ['list item1','list item2','list item3'];
const usingArrayMap =() => (
    <div>
        {
            arrayList.map((item,index) => (
                <div key = {index}></div>

            )
        )
        }
    </div>

);
const leadershipboard = () =>(
    <div>
        <h2>usingArray.Map</h2>
        <usingArrayMap/>
    </div>
);

export default leadershipboard;