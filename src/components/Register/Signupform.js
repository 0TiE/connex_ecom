import React, { useState } from 'react'
import image from "../../images/Login.gif";
import "../Register/signupform.css";
import { useNavigate } from 'react-router-dom';

function Signupform() {
    const navigate=useNavigate();

    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrevious = () => {
        setCurrentStep(currentStep - 1);
    };

    
    
  return (
    <div class="container my-lg-5">
        <div class="row justify-content-around">
            {currentStep === 1 && (<div class="col-6 mt-lg-5">
                <form class="row g-3" id='form1' onSubmit={handleNext}>
                    <h3 class="form_heading">Registration Information</h3>
                    <div class="col-md-6">
                        <label for="first_name" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="first_name" required/>
                    </div>
                    <div class="col-md-6">
                        <label for="last_name" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="last_name" required/>
                    </div>
                    <div class="col-md-6">
                        <label for="email" class="form-label">Business Email</label>
                        <input type="text" class="form-control" id="email" required/>
                    </div>
                    <div class="col-md-6">
                        <label for="phone" class="form-label">Phone</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            pattern="\d{10}"
                            maxlength="10"
                            required
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="job_title" class="form-label">Job Title</label>
                        <select id="job_title" class="form-select">
                            <option value="Select" selected>Select...</option>
                            <option value="title1">IT Security</option>
                            <option value="title2">IT Administrator</option>
                            <option value="title3">IT Consultant</option>
                            <option value="title4">IT Manager</option>
                            <option value="title5">IT Director</option>
                            <option value="title6">C-Level Exec/VP</option>
                            <option value="title7">IT Other</option>
                            <option value="title8">Owner</option>
                            <option value="title9">Partner/Reseller</option>
                            <option value="title10">Non IT</option>
                            <option value="title11">Student</option>
                            <option value="title12">Home Use</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="job_function" class="form-label">Job Function</label>
                        <select id="job_function" class="form-select">
                            <option value="select" selected>Select...</option>
                            <option value="function1">Primary Contact</option>
                            <option value="function2">Owner/CEO</option>
                            <option value="function3">Marketing</option>
                            <option value="function4">Sales</option>
                            <option value="function5">Technical</option>
                            <option value="function6">Renewal</option>
                        </select>
                    </div>
                    
                    <div class="col-12 d-flex justify-content-between">
                        <button type="submit" class="btn btn-primary" onClick={()=>navigate('./Home')} >Login</button>
                        <button type="submit" class="btn btn-primary">Next</button>
                    </div>
                </form>
            </div>)}
            {currentStep === 2 && (<div class="col-6 mt-lg-5">
                <form class="row g-3" id='form2' onSubmit={handleNext}>
                    <h3 class="form_heading">Company Information</h3>
                    <div class="col-md-12">
                        <label for="organization_name" class="form-label">Organization Name</label>
                        <input type="text" class="form-control" id="organization_name" required/>
                    </div>
                    <div class="col-md-8">
                        <label for="primary_address" class="form-label">Primary Address</label>
                        <input type="text" class="form-control" id="primary_address" required/>
                    </div>
                    <div class="col-md-4">
                        <label for="city" class="form-label">City</label>
                        <input type="text" class="form-control" id="city" required/>
                    </div>
                    <div class="col-md-4">
                        <label for="country" class="form-label">Country</label>
                        <select id="country" class="form-select">
                            <option value="select" selected>Select country</option>
                            <option value="country1">Eastern</option>
                            <option value="country2">North Central</option>
                            <option value="country3">Northern</option>
                            <option value="country4">North Western</option>
                            <option value="country5">Sabaragamuwa</option>
                            <option value="country6">Southern</option>
                            <option value="country7">Uva</option>
                            <option value="country8">Western</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label for="state" class="form-label">State/Province</label>
                        <select id="state" class="form-select">
                            <option value="n/a" selected>N/A</option>
                            <option value="Eastern">Eastern</option>
                            <option value="North Central">North Central</option>
                            <option value="Northern">Northern</option>
                            <option value="North Western">North Western</option>
                            <option value="Sabaragamuwa">Sabaragamuwa</option>
                            <option value="Southern">Southern</option>
                            <option value="Uva">Uva</option>
                            <option value="Western">Western</option>
                        </select>
                    </div>
                    <div class="col-4">
                        <label for="zip" class="form-label">Zip/Postal Code</label>
                        <input type="text" class="form-control" id="zip" required/>
                    </div>
                    <div class="col-md-6">
                        <label for="phone" class="form-label">Company Phone</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            pattern="\d{10}"
                            maxlength="10"
                            required
                        />
                    </div>
                    <div class="col-6">
                        <label for="website" class="form-label">Website</label>
                        <input type="text" class="form-control" id="website" required placeholder='https://'/>
                    </div>
                    
                    <div class="col-12 d-flex justify-content-between">
                        <button type="submit" class="btn btn-primary" onClick={handlePrevious}>Back</button>
                        <button type="submit" class="btn btn-primary">Next</button>
                    </div>
                </form>
            </div>)}
            {currentStep === 3 && (<div class="col-6 mt-lg-5">
                <form class="row g-3" id='form1'>
                    <h3 class="form_heading">Secondary Contact Deatils</h3>
                    <div class="col-md-6">
                        <label for="first_name" class="form-label">First name</label>
                        <input type="text" class="form-control" id="first_name" />
                    </div>
                    <div class="col-md-6">
                        <label for="last_name" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="last_name" />
                    </div>
                    <div class="col-md-6">
                        <label for="mobile_number" class="form-label">Mobile Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="mobile_number"
                            pattern="\d{10}"
                            maxlength="10"
                            required
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="land_number" class="form-label">Land Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="land_number"
                            pattern="\d{10}"
                            maxlength="10"
                            required
                        />
                    </div>
                    <div class="col-6">
                        <label for="email" class="form-label">Email Address</label>
                        <input type="text" class="form-control" id="email" />
                    </div>
                    <div class="col-12">
                        <label for="websitelink" class="form-label">Website link</label>
                        <input type="text" class="form-control" id="websitelink" required/>
                    </div>
                    <div class="col-md-6">
                        <label for="brcNumber" class="form-label">BRC Number</label>
                        <input type="text" class="form-control" id="brcNumber" required/>
                    </div>
                    <div class="col-6">
                        <label for="brcertificate" class="form-label">BR Certificate</label>
                            <input class="form-control" type="file" id="brcertificate"required/>
                    </div>
                    
                    <div class="col-6">
                        <label for="vatertificate" class="form-label">VAT Certificate</label>
                        <input class="form-control" type="file" id="vatertificate"required/>
                    </div>

                    <div class="col-md-12">
                        <label for="companybehavior" class="form-label">Compny Behaviour </label>
                        <input type="text" class="form-control" id="companybehavior" required/>
                    </div>

                    <div class="col-md-12">
                        <label for="selectproduct" class="form-label">Select Product</label>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                            <label class="form-check-label" for="inlineCheckbox1">Microsoft</label>
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                            <label class="form-check-label" for="inlineCheckbox2">LifeSmart</label>
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/>
                            <label class="form-check-label" for="inlineCheckbox3">Dahua Technology</label>
                         
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4"/>
                            <label class="form-check-label" for="inlineCheckbox4">Trend Micro Security</label>
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="option5"/>
                            <label class="form-check-label" for="inlineCheckbox5">Extell Systems</label>
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox6" value="option6"/>
                            <label class="form-check-label" for="inlineCheckbox6">Lenovo</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox7" value="option7"/>
                            <label class="form-check-label" for="inlineCheckbox7">TrendNet</label>
                        </div>
                    </div>

                    
                    <div class="col-12 d-flex justify-content-between">
                        <button type="submit" class="btn btn-primary" onClick={handlePrevious}>Previous</button>
                        <button type="submit" class="btn btn-primary">Register Now</button>
                    </div>
                </form>
            </div>)}
            <div class="col-6 text-center">
                 <img className="image" src={image} alt="Signupimg"/>
            </div>
        </div>
    </div>
    
  )
}

export default Signupform;