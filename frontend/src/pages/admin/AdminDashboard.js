import SideNav from "../../components/SideNav";
import TopBar from "../../components/TopBar";
import { Widget } from "../../components/boxes/Widget.js";
import { Charts } from "../../components/boxes/Charts";

const AdminDashboard = () => {


     return (
          <>
               <div className="d-flex">
                    <SideNav />
                    <div className="w-100">
                         <TopBar />

                         <div className="ps-4 pb-3 pe-3" id="bodyContainer">

                              <div className="container-fluid ps-0 pe-0 pt-2">
                                   <div className="row">
                                        <div className="col-lg-3 mt-2">
                                             <Widget type="student" />
                                        </div>
                                        <div className="col-lg-3 mt-2">
                                             <Widget type="teacher" />
                                        </div>
                                        <div className="col-lg-3 mt-2">
                                             <Widget type="subject" />
                                        </div>
                                        <div className="col-lg-3 mt-2">
                                             <Widget type="rank" />
                                        </div>
                                        <div className="col-lg-3 mt-2">                                     
                                        </div>
                                   </div>
                              </div>

                             
                       
                              



                         </div>


                    </div>
               </div>
          </>
     );
};

export default AdminDashboard;