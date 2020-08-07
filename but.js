function changeDivImage()
    {
        var imgPath = new String();
        imgPath = document.getElementById("body1").style.backgroundImage;

        if(imgPath == "url(1cur_a.png)" || imgPath == "")
        {
            document.getElementById("body1").style.backgroundImage = "url(images/1cur_b.png)";
        }
        else
        {
            document.getElementById("body1").style.backgroundImage = "url(images/1cur_b.png)";
        }
    }
    function changeDiv2Image()
    {
        var imgPath = new String();
        imgPath = document.getElementById("body1").style.backgroundImage;

        if(imgPath == "url(images/1cur_a.png)" || imgPath == "")
        {
            document.getElementById("body1").style.backgroundImage = "url(images/1cur_c.png)";
        }
        else
        {
            document.getElementById("body1").style.backgroundImage = "url(images/1cur_c.png)";
        }
    }
    function changeDiv3Image()
    {
        var imgPath = new String();
        imgPath = document.getElementById("body1").style.backgroundImage;

        if(imgPath == "url(images/1cur_b.png)" || imgPath == "")
        {
            document.getElementById("body1").style.backgroundImage = "url(images/1cur_d.png)";
        }
        else
        {
            document.getElementById("body1").style.backgroundImage = "url(images/1cur_d.png)";
        }
    }
    
    
    function changeDiv5Image()
    {
        var imgPath = new String();
        imgPath = document.getElementById("body1").style.backgroundImage;

        if(imgPath == "url(images/1cur_d.png)" || imgPath == "")
        {
            document.getElementById("body1").style.backgroundImage = "url(images/1cur_e.jpg)";
        }
        else
        {
            document.getElementById("body1").style.backgroundImage = "url(images/1cur_e.png)";
        }
    }