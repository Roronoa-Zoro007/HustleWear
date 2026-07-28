import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Contact(){


return(

<>

<Navbar/>





{/* Hero */}


<section

style={{

height:"60vh",

background:
"linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url('/images/banner.jpg')",

backgroundSize:"cover",

backgroundPosition:"center",

display:"flex",

alignItems:"center",

justifyContent:"center",

color:"white",

textAlign:"center"

}}

>


<div>


<h1

style={{

fontSize:"55px",

fontWeight:"800"

}}

>

Contact HustleWear

</h1>



<p

style={{

fontSize:"20px"

}}

>

We are here to help you.

</p>


</div>


</section>







{/* Contact Area */}



<section

style={{

padding:"80px 20px",

display:"flex",

justifyContent:"center",

gap:"50px",

flexWrap:"wrap"

}}

>





{/* Information */}


<div

style={{

width:"350px"

}}

>


<h1>

Get In Touch

</h1>



<p>

📍 Dhaka, Bangladesh

</p>


<p>

📞 +880 1XXXXXXXXX

</p>


<p>

✉ support@hustlewear.com

</p>




<h2>

Follow Us

</h2>


<p>

Instagram

</p>


<p>

Facebook

</p>


<p>

Youtube

</p>


</div>








{/* Form */}



<div

style={{

width:"450px",

background:"#f8fafc",

padding:"35px",

borderRadius:"20px",

boxShadow:"0 10px 30px rgba(0,0,0,.1)"

}}

>


<h1>

Send Message

</h1>



<input

placeholder="Your Name"

style={inputStyle}

/>



<input

placeholder="Email Address"

style={inputStyle}

/>



<input

placeholder="Phone Number"

style={inputStyle}

/>




<textarea

placeholder="Your Message"

rows="5"

style={inputStyle}

/>




<button

className="primary-btn"

style={{

width:"100%"

}}

>

Send Message

</button>



</div>





</section>







<Footer/>


</>

)

}




const inputStyle={

width:"100%",

padding:"15px",

margin:"10px 0",

borderRadius:"10px",

border:"1px solid #ddd",

fontSize:"15px"

};



export default Contact;