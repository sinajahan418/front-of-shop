import swal from "sweetalert";

const AddToCard = async(e , Id) => {
  e.preventDefault()
  const res = await fetch("/api/addtocart",{
    method:"POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({productId : Id})
  })
  if (res.status === 200) {
     swal({title: "product added successfuly", icon: "success" , buttons: "ok"})
  }
  
};

export default AddToCard;
