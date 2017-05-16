       function Conveyor()
       {
            //create div class item  into washerBox
            this.CreateNew = function()
            {
                this.div = document.createElement("div");
                this.div.setAttribute("class","convey");
                $("#washerBox").append($(this.div));
                this.x = $(this.div).position().left;
                this.maxX =  $("#washerBox").width();
            };

            speed = 1.5;
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

       