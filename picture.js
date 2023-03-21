function Picture() {
      
    let canvas;
    let divInfo;
    let body;
    let image;
    

    this.init = async function(img)
    {
        canvas = document.createElement('canvas');
        canvas.style.border = "1px solid";
        
        divInfo = document.createElement('div');
      
        body = document.querySelector("body");
        body.appendChild(canvas);
        body.appendChild(divInfo);
      
        image = new Image();
        image.src = img;
        image.onloadeddata = await this.loadImage();
    }

    this.loadImage = function()
    {
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;

        canvas.width = 120;
        canvas.height = 200;
    }

    this.resizeImage = function()
    {
        const originalWidth = image.naturalWidth;
        const originalHeight = image.naturalHeight;
        const aspectRatio = originalWidth/originalHeight;
        let width = 120;
        let height = width/aspectRatio;

        return {width, height} 
    }
  
    this.renderImage = function(size)
    { 
        //canvas.width = image.naturalWidth;
        //canvas.height = image.naturalHeight;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, size.width, size.height);
    }
  
    this.renderInfo = function(size)
    {
        divInfo.innerText = image.naturalWidth + "/" + image.naturalHeight + " ";
        divInfo.innerText += size.width + "/" + size.height;
    }
  
    this.render = async function(v)
    { 
                 
      await this.init(v);
      const size = this.resizeImage();
       
      this.renderImage(size); 
      this.renderInfo(size);
      
    }
  
}
  