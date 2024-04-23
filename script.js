let run_code = document.getElementById("run_btn");
        run_btn.onclick = function run(){
            let code = document.getElementById("code").value;
            let result_box = document.getElementById("result");
            result_box.innerHTML = code;
            let code_box = document.getElementById("code_box");
            code_box.style.display = "none";
            let show = document.getElementById("show");
            show.style.display = "block";
            show.setAttribute("class","animate__animated animate__slideInRight");   
            let btn = document.getElementById("run_btn");
            btn.style.display = "none";
            let icon = document.getElementById("icon");
            icon.style.display = "block";         
        }

        let iconbtn = document.getElementById("icon");
        iconbtn.onclick = function back(){
            let show = document.getElementById("show");
            show.style.display = "none";
            let code_box = document.getElementById("code_box");
            code_box.style.display = "block";
            code_box.setAttribute("class","animate__animated animate__slideInLeft");
            let icon = document.getElementById("icon");
            icon.style.display = "none";
            let btn = document.getElementById("run_btn");
            btn.style.display = "block";   
        }