export const checkName=async(data:{
    name:string;
})=>{
if(!data.name || data.name.trim().length<3){
    return{
        isValid:false,
        message:"name should be at least of 3 characters",
    };
}
return{
    isValid:true,
};
}