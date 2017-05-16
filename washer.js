
       function Washer()
       {
            //create div class item  into washerBox
            this.CreateNew = function()
            {
                this.div = document.createElement("div");
                this.div.setAttribute("class","item");
                $("#washerBox").append($(this.div));
                this.x = $(this.div).position().left;
                this.maxX=  $("#washerBox").width();
            };

            this.Move = function()
            {   
                
                if (this.x < this.maxX)
                {
                    $(this.div).css("left", this.x += speed);
                }
                else
                {
                    this.removed = true;
                    $(this.div).remove();
                }

            };    
       }

       function moveAllConveyors()
       {
           for (var i = 0; i< conveyors.length; i++)
            {
                if (conveyors[i].removed == true) conveyors.splice(i,1);
                console.log(conveyors.length);
                conveyors[i].Move();
            }
       }

       function removeWasteConveyors()
       {
           for (var i = 0; i < conveyors.length; i++)
           {
                
           }
       }

       function moveAllWashers()
       {
            for (var i = 0; i < washers.length; i++)
                {
                  if (washers[i].removed == true)
                      washers.splice(i,1);
                  washers[i].Move();      
                }
       }
      

       function update()
       {
            var flag = false;
            if (frameCount == 0 || gapBetween(160))
            {
                var conveyor;
                conveyor = new Conveyor();
                conveyors.push(conveyor);
                conveyor.CreateNew();
                
            }
            frameCount++;

            moveAllConveyors();
            
            var pos = conveyors[0].x;
            if (pos >= $("#washerBox").width()- $(".convey").width())
                flag = true;

            if (flag==true)
            {        
                if ( gapBetween(160))
                {
                    var washer;
                    washer = new Washer();
                    washers.push(washer);
                    washer.CreateNew(); 
                }    
               
                moveAllWashers();
            }//if flag          

       }

      


       function gapBetween(n)
       {
            if (frameCount % n == 0) return true;
            return false;
       }
       



                
                


