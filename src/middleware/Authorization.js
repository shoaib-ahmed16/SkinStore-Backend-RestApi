const authorization =(permissionsdata)=>
{
   return function(req,res,next)
   {
     
      const user = req.user
      let Ispermission = false
     
      permissionsdata.map(role =>
      {
        if(user.role.includes(role))
        {
          Ispermission = true
        }
      })
    
     if(Ispermission)
     {
        return next();
     }
     else{
      
     return res.send("Permission denied")

     }
   }
}

module.exports = authorization