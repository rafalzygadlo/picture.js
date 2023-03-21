
function previewFile(input) 
{
  
  Array.from(input.files).forEach(file => {
    var reader  = new FileReader();
    reader.readAsDataURL(file);  
    reader.onloadend = function (e) 
    {
      new Picture().render(e.target.result);  
    }

  });

}