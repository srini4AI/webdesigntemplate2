import React from 'react';
 const ContactForm = ()=>{
    return(<>
         <div className="col-lg-12 mb-5"  >
                <h1 className="display-5">QUICK CONTACT</h1>
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">

                  <input type="text" name="name" placeholder="Name" className="form-control" id="name" required={true}/>
                </div>
                <div className="form-group col-md-6">

                  <input type="email" className="form-control"  placeholder="Email" name="email" id="email" required={true}/>
                </div>
              </div>
              <div className="form-group">

                <input type="text" className="form-control"   placeholder="Subject" name="subject" id="subject" required={true}/>
              </div>
              <div className="form-group">

                <textarea className="form-control"  placeholder="Enter your message"  name="message" rows={5} required={true}></textarea>
              </div>
 
              <div className="text-center"><button type="button" className="btn btn-outline-primary my-2">Submit</button></div>
            </form>
          </div></>)
}


export default ContactForm;