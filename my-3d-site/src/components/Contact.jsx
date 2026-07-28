function Contact(){


return(

<section

style={{

padding:"60px 20px",

textAlign:"center",

background:"#ffffff"

}}

>


<h1

style={{

fontSize:"40px"

}}

>

Contact Us

</h1>



<p>

Have any questions? Contact HustleWear team.

</p>




<div

style={{

maxWidth:"450px",

margin:"30px auto"

}}

>


<input

placeholder="Your Name"

style={inputStyle}

/>



<input

placeholder="Your Email"

style={inputStyle}

/>



<textarea

placeholder="Your Message"

style={inputStyle}

/>



<button

style={buttonStyle}

>

Send Message

</button>



</div>



</section>


)

}





const inputStyle={

width:"100%",

padding:"12px",

margin:"10px 0",

borderRadius:"8px",

border:"1px solid #ddd",

fontSize:"16px"

};





const buttonStyle={

padding:"14px 40px",

background:"#0f172a",

color:"white",

border:"none",

borderRadius:"8px",

cursor:"pointer",

fontSize:"16px"

};




export default Contact;