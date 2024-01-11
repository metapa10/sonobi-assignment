export function ValidateForm(formData){
   if (formData.placement_id === "")
   {
     return false;
   }
   return true;
}