document.addEventListener('DOMContentLoaded', function () {
    const navbarContent = ` 
        <div class="sidebar-content js-simplebar">
                    
            <div class="logo-flex">
                <img src="img/logo.png" class="logo" alt="การท่าเรือแห่งประเทศไทย">
                <div>
                    การท่าเรือแห่งประเทศไทย
                </div>
            </div> 
            <br>
            <ul class="sidebar-nav">    
                <li class="sidebar-item item-sup">
                    <a class="sidebar-link" href="#"> 
                        <i class="fas fa-link menu-icon"></i>
                        <span class="align-middle">เชื่อมโยงข้อมูล </span>
                        <i class="fas fa-angle-down"></i>
                    </a>
                    <div class="sup-menu">
                        <a class="sidebar-link" href="menu3-1.html"> 
                            <span class="align-middle">เชื่อมโยงราคาประเมินที่ดิน</span>
                        </a>    
                        <a class="sidebar-link" href="menu3-2.html"> 
                            <span class="align-middle">เชื่อมโยงราคาประเมินสิ่งปลูกสร้าง</span>
                        </a>    
                        <a class="sidebar-link" href="menu3-3.html"> 
                            <span class="align-middle">เชื่อมโยงข้อมูล</span>
                        </a>     
                    </div>
                </li>
                <li class="sidebar-item">
                    <a class="sidebar-link" href="menu4.html">
                        <i class="fas fa-calculator menu-icon"></i> 
                        <span class="align-middle">คำนวณภาษี </span> 
                    </a> 
                </li>    
            </ul>  
        </div>
    `;
    
    document.querySelector('#sidebar').innerHTML = navbarContent;
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
    
});
