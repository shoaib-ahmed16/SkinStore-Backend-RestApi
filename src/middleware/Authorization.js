const authorization =(permissionsdata)=>
{
   return function(req,res,next)
   {
     
      const user = req.user
      let isPermission = false
     
      permissionsdata.map(role =>
      {
        if(user.role.includes(role))
        {
          isPermission = true
        }
      })
    
     if(isPermission)
     {
        return next();
     }
     else{
      
     return res.send("Permission denied")

     }
   }
}

module.exports = authorization