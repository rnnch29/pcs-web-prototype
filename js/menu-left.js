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
            <ul id="myMenu" class="sidebar-nav">  
                <li class="sidebar-item">
                    <a class="sidebar-link" href="index.html">
                        <img src="img/icon-menu/p0.png" alt="icon"> 
                        <span class="align-middle">Home </span> 
                    </a> 
                </li>      
                <li class="sidebar-item item-sup">
                    <a class="sidebar-link" href="#"> 
                        <img src="img/icon-menu/p1.png" alt="icon"> 
                        <span class="align-middle">VESSEL </span>
                        <i class="fas fa-angle-down"></i>
                    </a>
                    <div class="sup-menu">
                        <ul>
                            <li> 
                                <span>Service Route </span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Alliance</a></li>
                                    <li><a href="#">Service Route</a></li> 
                                </ul>
                            </li> 
                            <li>
                                <span>Vessel Particulars </span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Send</a></li>
                                    <li><a href="#">Approve</a></li>
                                    <li><a href="#">Download</a></li>
                                    <li><a href="#">Check</a></li>
                                </ul>
                            </li> 
                            <li>
                                <span>Vessel Profiles </span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Attachment</a></li>
                                    <li><a href="#">Send</a></li>
                                    <li><a href="#">Receive</a></li>
                                    <li><a href="#">Check</a></li>
                                </ul>
                            </li> 
                            <li>
                                <span>Marine Department </span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Vessel Registration</a></li>
                                    <li><a href="#">Arrival & Departure</a></li>
                                    <li><a href="#">Berth Outside PAT</a></li>
                                    <li><a href="#">Vessel Shifting</a></li>
                                    <li><a href="#">DG Handling</a></li>
                                    <li><a href="#">Pilotage</a></li>
                                    <li><a href="#">Inquiries Status</a></li>
                                </ul>
                            </li> 
                            <li>
                                <span>Berth Application </span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Configuration</a></li>
                                    <li><a href="#">Send</a></li>
                                    <li><a href="#">Approve</a></li> 
                                </ul>
                            </li> 
                            <li>
                                <span>Service Application </span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Configuration</a></li>
                                    <li><a href="#">Send</a></li>
                                    <li><a href="#">Approve</a></li> 
                                </ul>
                            </li> 
                            <li>
                                <span>Vessel Schedule </span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Create</a></li>
                                    <li><a href="#">Vessel Schedule (VSED EDI)</a></li> 
                                </ul>
                            </li> 
                            <li>
                                <span>Vessel Movement </span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Vessel Movement</a></li> 
                                </ul>
                            </li> 
                            <li>
                                <span>Vessel Berth Plan </span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Berth Plan</a></li> 
                                </ul>
                            </li> 
                            <li>
                                <span>Vessel Port Time </span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Entry Port Time</a></li>
                                    <li><a href="#">Check Port Time</a></li> 
                                </ul>
                            </li> 
                            <li>
                                <span>UN/EDIFACT </span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Send</a></li>
                                    <li><a href="#">Receive</a></li> 
                                </ul>
                            </li> 
                            <li>
                                <span>Tugboat Mgt </span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">TugBoat Job Order</a></li>
                                    <li><a href="#">Assign Officer</a></li> 
                                </ul>
                            </li> 
                            <li>
                                <span>Terminal Activities </span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Container</a></li>
                                    <li><a href="#">Cargo</a></li>
                                    <li><a href="#">RORO</a></li> 
                                </ul>
                            </li> 
                            <li>
                                <span>EDW </span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="vessel-edw-container.html">Container</a></li>
                                    <li><a href="#">Cargo</a></li>
                                    <li><a href="#">RORO</a></li>
                                    <li><a href="#">Passenger</a></li>
                                    <li><a href="#">Check Send LCB</a></li>
                                </ul>
                            </li> 
                            <li>
                                <span>e-Manifest </span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">e-Manifest</a></li> 
                                </ul>
                            </li> 
                        </ul>
                    </div>
                </li>   
                <li class="sidebar-item item-sup">
                    <a class="sidebar-link" href="#"> 
                        <img src="img/icon-menu/p2.png" alt="icon"> 
                        <span class="align-middle">IMPORT </span>
                        <i class="fas fa-angle-down"></i>
                    </a>
                    <div class="sup-menu">
                        <ul>
                            <li> 
                                <span>Terminal Status</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Container Terminal Release</a></li>
                                    <li><a href="#">Cargo Terminal Release</a></li> 
                                </ul>
                            </li>  
                            <li> 
                                <span>Customs</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">e-Manifest</a></li> 
                                </ul>
                            </li>  
                            <li> 
                                <span>BL Management</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">BL Management</a></li> 
                                </ul>
                            </li>  
                            <li> 
                                <span>Arraival Notice</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Arraival Notice</a></li> 
                                </ul>
                            </li>  
                            <li> 
                                <span>Truck Application</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Truck Booking</a></li>
                                    <li><a href="#">Truck Contract</a></li> 
                                </ul>
                            </li>  
                            <li> 
                                <span>Rail</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Track Rail</a></li>
                                    <li><a href="#">Check Contianer</a></li>
                                    <li><a href="#">Estimate Rail Schedule</a></li>
                                    <li><a href="#">Actual Rail Schedule</a></li>
                                </ul>
                            </li>  
                        </ul>
                    </div>
                </li>  
                <li class="sidebar-item item-sup">
                    <a class="sidebar-link" href="#"> 
                        <img src="img/icon-menu/p3.png" alt="icon"> 
                        <span class="align-middle">EXPORT </span>
                        <i class="fas fa-angle-down"></i>
                    </a>
                    <div class="sup-menu">
                        <ul>
                            <li> 
                                <span>Freight Rate</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Entry</a></li>
                                    <li><a href="#">Display</a></li> 
                                </ul>
                            </li>  
                            <li> 
                                <span>Shipping Instruction</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Create / Submit</a></li>
                                    <li><a href="#">Approve</a></li>
                                </ul>
                            </li>  
                            <li> 
                                <span>Booking Management</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Booking Management</a></li> 
                                </ul>
                            </li>  
                            <li> 
                                <span>Truck Application</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Truck Booking</a></li>
                                    <li><a href="#">Truck Contract</a></li>
                                </ul>
                            </li>  
                            <li> 
                                <span>Rail</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Track Rail</a></li>
                                    <li><a href="#">Gate Activities</a></li>
                                    <li><a href="#">Estimate Rail Schedule</a></li>
                                    <li><a href="#">Actual Rail Schedule</a></li>
                                </ul>
                            </li>  
                        </ul>
                    </div>
                </li>  
                <li class="sidebar-item item-sup">
                    <a class="sidebar-link" href="#"> 
                        <img src="img/icon-menu/p4.png" alt="icon"> 
                        <span class="align-middle">CUSTOMS </span>
                        <i class="fas fa-angle-down"></i>
                    </a>
                    <div class="sup-menu">
                        <ul>
                            <li> 
                                <span>Declaration Check</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Import</a></li>
                                    <li><a href="#">Export</a></li> 
                                </ul>
                            </li>  
                        </ul>
                    </div>
                </li>  
                <li class="sidebar-item item-sup">
                    <a class="sidebar-link" href="#"> 
                        <img src="img/icon-menu/p5.png" alt="icon"> 
                        <span class="align-middle">CONTAINER & CARGO </span>
                        <i class="fas fa-angle-down"></i>
                    </a>
                    <div class="sup-menu">
                        <ul>
                            <li> 
                                <span>UN/EDIFACT</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Send</a></li>
                                    <li><a href="#">Receive</a></li>
                                </ul>
                            </li>  
                            <li> 
                                <span>Send Information</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Gate</a></li>
                                    <li><a href="#">VGM</a></li>
                                    <li><a href="#">Plug</a></li>
                                    <li><a href="#">Loading/Discharge</a></li>
                                    <li><a href="#">Stuff</a></li>
                                    <li><a href="#">Unstuff</a></li>
                                </ul>
                            </li>  
                            <li> 
                                <span>Configuration</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">IMDG</a></li>
                                    <li><a href="#">Facility</a></li>
                                </ul>
                            </li>  
                            <li> 
                                <span>DG Management</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">DG Notify</a></li>
                                    <li><a href="#">DG Receive</a></li>
                                    <li><a href="#">Import DG Info</a></li>
                                    <li><a href="#">DG Approve IM</a></li>
                                    <li><a href="#">DG Release IM</a></li>
                                    <li><a href="#">Export DG Info</a></li>
                                    <li><a href="#">DG Approve EX</a></li>
                                    <li><a href="#">DG Release EX</a></li>
                                    <li><a href="#">DG Gate</a></li>
                                    <li><a href="#">DG Detail</a></li>
                                </ul>
                            </li>  
                            <li> 
                                <span>Container Detail</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Import Reefer</a></li>
                                    <li><a href="#">Export Reefer</a></li>
                                    <li><a href="#">Transhipment Container</a></li>
                                    <li><a href="#">Transhipment Cargo</a></li>
                                    <li><a href="#">Transit Container</a></li>
                                    <li><a href="#">Transit Cargo</a></li>
                                    <li><a href="#">Damage</a></li>
                                </ul>
                            </li>  
                            <li> 
                                <span>Discharge & Loading</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Container</a></li>
                                    <li><a href="#">Cargo</a></li>
                                    <li><a href="#">RORO</a></li>
                                </ul>
                            </li>  
                            <li> 
                                <span>Container Movement</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Summary (Discharge / Loading)</a></li>
                                    <li><a href="#">Container Discharge</a></li>
                                    <li><a href="#">Cargo Discharge</a></li>
                                    <li><a href="#">Container Loading</a></li>
                                    <li><a href="#">Cargo Loading</a></li>
                                </ul>
                            </li>  
                            <li> 
                                <span>Warehouse/ICD</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Import Warehouse Release</a></li>
                                    <li><a href="#">Cargo Tracking</a></li>
                                    <li><a href="#">Entry Goods Demage Import</a></li>
                                    <li><a href="#">Export Warehouse Release</a></li>
                                    <li><a href="#">Container Terminal Release</a></li>
                                    <li><a href="#">Cargo Terminal Release</a></li>
                                </ul>
                            </li>  
                            <li> 
                                <span>Empty Container</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Container MTY List</a></li>
                                    <li><a href="#">Gate MTY Entry</a></li>
                                    <li><a href="#">Container MTY Damage</a></li> 
                                </ul>
                            </li>  
                            <li> 
                                <span>Cancelled Container</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Inbound</a></li>
                                    <li><a href="#">Outbound</a></li>
                                </ul>
                            </li>  
                            <li> 
                                <span>MatchingFile Configuration</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">MatchingFile Configuration</a></li> 
                                </ul>
                            </li>  
                            <li> 
                                <span>Compare File</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Compare File</a></li> 
                                </ul>
                            </li>  
                        </ul>
                    </div>
                </li>  
                <li class="sidebar-item item-sup">
                    <a class="sidebar-link" href="#"> 
                        <img src="img/icon-menu/p6.png" alt="icon"> 
                        <span class="align-middle">HINTERLAND </span>
                        <i class="fas fa-angle-down"></i>
                    </a>
                    <div class="sup-menu">
                        <ul>
                            <li> 
                                <span>Configuration</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Vehicle Type</a></li>
                                    <li><a href="#">Vehicle Registration</a></li>
                                    <li><a href="#">Driver Registration</a></li>
                                    <li><a href="#">Vehicle Attribute</a></li> 
                                </ul>
                            </li>  
                            <li> 
                                <span>Pre-Advice Mgt</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Send Container</a></li>
                                    <li><a href="#">Approve Container</a></li>
                                    <li><a href="#">Send Cargo</a></li>
                                    <li><a href="#">Approve Cargo</a></li>
                                    <li><a href="#">Comparision</a></li> 
                                </ul>
                            </li>  
                            <li> 
                                <span>Truck Manifest</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Truck Manifest</a></li> 
                                </ul>
                            </li>  
                            <li> 
                                <span>Truck Queue Mgt</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Gate Configuration</a></li>
                                    <li><a href="#">Queue Configuration</a></li>
                                    <li><a href="#">Search Queue</a></li>
                                    <li><a href="#">Booking Queue</a></li> 
                                </ul>
                            </li>  
                            <li> 
                                <span>Truck Application</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Facility Configuration</a></li>
                                    <li><a href="#">Booking Confirmation</a></li>
                                    <li><a href="#">Close Work Order</a></li>
                                    <li><a href="#">Assign Vehicle&Driver</a></li>
                                    <li><a href="#">Account Type</a></li>
                                    <li><a href="#">Account Code</a></li>
                                    <li><a href="#">Account</a></li>
                                    <li><a href="#">Work Order Movement</a></li>
                                    <li><a href="#">Post Work Order</a></li>
                                </ul>
                            </li>  
                            <li> 
                                <span>Rail Configuration</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Carriage</a></li>
                                    <li><a href="#">Carriage Grouping</a></li>
                                    <li><a href="#">Carriage and Train No</a></li>
                                    <li><a href="#">Route</a></li>
                                    <li><a href="#">Station</a></li>
                                    <li><a href="#">Route and Traning No</a></li>
                                    <li><a href="#">Route and Station</a></li>
                                </ul>
                            </li>  
                            <li> 
                                <span>Rail Schedule</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Estimate</a></li>
                                    <li><a href="#">Actual</a></li> 
                                </ul>
                            </li>  
                            <li> 
                                <span>Rail Activities</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Send File</a></li>
                                    <li><a href="#">Receive File</a></li> 
                                </ul>
                            </li>  
                            <li> 
                                <span>Terminal Notify</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Send</a></li>
                                    <li><a href="#">Receive</a></li>
                                    <li><a href="#">SRT Notify</a></li>
                                    <li><a href="#">Accept by Origin</a></li>
                                    <li><a href="#">Accept by Destination</a></li>
                                    <li><a href="#">Carriage Status</a></li>
                                    <li><a href="#">Quota</a></li>
                                </ul>
                            </li>  
                        </ul>
                    </div>
                </li>  
                <li class="sidebar-item item-sup">
                    <a class="sidebar-link" href="#"> 
                        <img src="img/icon-menu/p7.png" alt="icon"> 
                        <span class="align-middle">TRACKING </span>
                        <i class="fas fa-angle-down"></i>
                    </a>
                    <div class="sup-menu">
                        <ul>
                            <li> 
                                <span>Vessel</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Vessel Movement</a></li>
                                    <li><a href="#">Pilot Tracking</a></li> 
                                </ul>
                            </li>  
                        </ul>
                    </div>
                </li>  
                <li class="sidebar-item item-sup">
                    <a class="sidebar-link" href="#"> 
                        <img src="img/icon-menu/p8.png" alt="icon"> 
                        <span class="align-middle">DASHBOARD </span>
                        <i class="fas fa-angle-down"></i>
                    </a>
                    <div class="sup-menu">
                        <ul>
                            <li> 
                                <span>Vessel</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Vessel Movement</a></li>
                                    <li><a href="#">Vessel Schedule</a></li>  
                                </ul>
                            </li>  
                            <li> 
                                <span>Import</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Import Declaration</a></li> 
                                </ul>
                            </li>  
                            <li> 
                                <span>Export</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Rail Activities</a></li>
                                    <li><a href="#">Export Declaration</a></li>  
                                </ul>
                            </li>  
                            <li> 
                                <span>Customs</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Import Declaration</a></li>
                                    <li><a href="#">Export Declaration</a></li>  
                                </ul>
                            </li>  
                            <li> 
                                <span>Container & Cargo</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Gate In & Out</a></li>
                                    <li><a href="#">Inventory</a></li>  
                                </ul>
                            </li>  
                            <li> 
                                <span>Hinterland</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Booking Queue - Transport</a></li>
                                    <li><a href="#">Pre-advice</a></li> 
                                    <li><a href="#">Booking Queue</a></li> 
                                    <li><a href="#">Rail Overview</a></li>  
                                </ul>
                            </li>  
                        </ul>
                    </div>
                </li>  
                <li class="sidebar-item item-sup">
                    <a class="sidebar-link" href="#"> 
                        <img src="img/icon-menu/p9.png" alt="icon"> 
                        <span class="align-middle">REPORT </span>
                        <i class="fas fa-angle-down"></i>
                    </a>
                    <div class="sup-menu">
                        <ul>
                            <li> 
                                <span>Vessel</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Vessel 01-01</a></li>
                                    <li><a href="#">Vessel 01-02</a></li>
                                    <li><a href="#">Vessel 01-03</a></li>
                                    <li><a href="#">Vessel 01-04</a></li>
                                    <li><a href="#">Vessel 01-05</a></li>
                                </ul>
                            </li>  
                            <li> 
                                <span>Import</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Import Declaration Tracking</a></li> 
                                </ul>
                            </li>  
                            <li> 
                                <span>Export</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Export Declaration Tracking</a></li> 
                                </ul>
                            </li>  
                            <li> 
                                <span>Container & Cargo</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Container & Cargo</a></li> 
                                </ul>
                            </li>  
                        </ul>
                    </div>
                </li>  
                <li class="sidebar-item item-sup">
                    <a class="sidebar-link" href="#"> 
                        <img src="img/icon-menu/p10.png" alt="icon"> 
                        <span class="align-middle">PCS-INTELLIGENCE </span>
                        <i class="fas fa-angle-down"></i>
                    </a>
                    <div class="sup-menu">
                        <ul>
                            <li> 
                                <span>Intelligence Setup</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Parameter</a></li>
                                    <li><a href="#">Connectivity</a></li>
                                    <li><a href="#">Objects</a></li>
                                    <li><a href="#">Events</a></li>
                                    <li><a href="#">Service Providers</a></li>
                                    <li><a href="#">Service Setup</a></li>
                                    <li><a href="#">Job & Schedule</a></li>
                                </ul>
                            </li> 
                            <li> 
                                <span>Intelligent Report</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Report Viewer</a></li> 
                                </ul>
                            </li>  
                        </ul>
                    </div>
                </li>  
                <li class="sidebar-item item-sup">
                    <a class="sidebar-link" href="#"> 
                        <img src="img/icon-menu/p11.png" alt="icon"> 
                        <span class="align-middle">SETUP & UTILITY </span>
                        <i class="fas fa-angle-down"></i>
                    </a>
                    <div class="sup-menu">
                        <ul>
                            <li> 
                                <span>Permission User</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Users and Organizations</a></li> 
                                    <li><a href="#">User Groups</a></li>  
                                </ul>
                            </li>  
                            <li> 
                                <span>Permission User</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Users and Organizations</a></li> 
                                    <li><a href="#">User Groups</a></li> 
                                    <li><a href="#">Roles</a></li>  
                                </ul>
                            </li>  
                            <li> 
                                <span>Permission</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Data Permission</a></li> 
                                    <li><a href="#">Validate Data Permission</a></li>  
                                </ul>
                            </li>  
                            <li> 
                                <span>eMail & SMS</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">eMail & SMS</a></li>  
                                </ul>
                            </li>  
                            <li> 
                                <span>Tracking Setup</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Tracking Setup</a></li>   
                                </ul>
                            </li>  
                            <li> 
                                <span>Document Attachment</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Document Attachment</a></li>  
                                </ul>
                            </li>  
                            <li> 
                                <span>Message Box</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Message Box</a></li>  
                                </ul>
                            </li>  
                            <li> 
                                <span>Tracking</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Tracking</a></li>  
                                </ul>
                            </li>  
                            <li> 
                                <span>Format Template</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Alliance</a></li> 
                                    <li><a href="#">Format Template</a></li>  
                                </ul>
                            </li>  
                            <li> 
                                <span>Category</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Category</a></li>   
                                </ul>
                            </li>  
                            <li> 
                                <span>Country</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Country</a></li>  
                                </ul>
                            </li>  
                            <li> 
                                <span>Port</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Port</a></li>  
                                </ul>
                            </li>  
                            <li> 
                                <span>Terminal</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Terminal</a></li>  
                                </ul>
                            </li>  
                            <li> 
                                <span>Super User</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Request Super User Right</a></li> 
                                    <li><a href="#">Confirm Super User</a></li>  
                                </ul>
                            </li>  
                            <li> 
                                <span>Port Time</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Events</a></li>   
                                </ul>
                            </li>  
                            <li> 
                                <span>Permission</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Data Permission</a></li> 
                                </ul>
                            </li>  
                            <li> 
                                <span>Log</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Source</a></li> 
                                    <li><a href="#">Error</a></li> 
                                    <li><a href="#">User</a></li>   
                                </ul>
                            </li>  
                            <li> 
                                <span>Configuration Log</span>
                                <i class="fas fa-angle-down"></i>
                                <ul>
                                    <li><a href="#">Source</a></li> 
                                    <li><a href="#">Severity</a></li>  
                                </ul>
                            </li>  
                        </ul>
                    </div>
                </li>  
            </ul>  
        </div>
    `;
    
    document.querySelector('#sidebar').innerHTML = navbarContent;
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
    
});
