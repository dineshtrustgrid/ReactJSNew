// Filter logic 
// to convert string to number type  value  use (+) sign followed by value +"20" 

const FilterLogic = () =>{

    let restaurantDetails = [
        {
            data:{
                id:101,
                name: "Dominos",
                cuisines:["Burger","sandwich","ROll"],
                deliveryTime:+"30",
                avgRating: "4.6"
            }
        },
        {
            data:{
                id:102,
                name: "KFC",
                cuisines:["Chickenwings","loliiopop","friedchicken"],
                deliveryTime :+"25",
                avgRating: "3.7"
            }
        },

        {
            data:{
                id:103,
                name:"Hyberbadi",
                cuisines:["Briyani","Soup","Grill"],
                deliveryTime:+"20",   
                avgRating:"2.8"
            }
        }
    ]

    return (
        <div className="body">
        <div className="filter">
            <button 
            className="filter-btn"

            onClick={()=>{
                restaurantDetails = restaurantDetails.filter(res=>res.data.deliveryTime > 20)
                console.log("Restarauntdetails",restaurantDetails);
            }}>

            Top Rated Restarant
                        </button>

        </div>
            
        </div>
    )

}

export default FilterLogic;