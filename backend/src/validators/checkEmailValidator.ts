export const checkEmail=(data:{
    gmail:string;
})=>{
   const checkEmail=
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(!data.gmail || !checkEmail.test(data.gmail)){
    return{
        isValid:false,
        message:"enter proper email id",
    };
}
return{
    isValid:true,
};
}