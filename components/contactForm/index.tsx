import React from 'react';
 const ContactForm = ()=>{
    return(<>
         <div className="col-lg-12 mb-5"  id="contacts">
                <h2>QUICK CONTACT</h2>
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">

                  <input type="text" name="name" placeholder="Name" className="form-control" id="name" required={true}/>
                </div>
                <div className="form-group col-md-6">

                  <input type="email" className="form-control"  placeholder="Email" name="email" id="email" required={true}/>
                </div>
              </div>
              <select className="form-select col-md-6" aria-label="Default select example">
  <option selected>--Select--</option>
  <option value="1">Sales</option>
  <option value="2">Services</option>
</select>
              <div className="form-group">

                <input type="text" className="form-control"   placeholder="Subject" name="subject" id="subject" required={true}/>
              </div>
              <div className="form-group">

                <textarea className="form-control"  placeholder="Enter your message"  name="message" rows={5} required={true}></textarea>
              </div>
 
              <div className="text-center"><button type="button" className="btn  btn-outline-light my-2">Submit</button></div>
            </form>
          </div></>)
}


export default ContactForm;