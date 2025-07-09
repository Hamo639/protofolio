import Lottie from "lottie-react";
import "./contact.css";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import { useForm, ValidationError } from "@formspree/react";
import { Mail } from "@mui/icons-material";
import loadinganimation from "../../../public/animation/contact.json";

const Contact = () => {
  //  ربط النموذج بخدمة لارسال رسائل عل الايميل بتاعيFormspree بإستخدام  النموذج
  const [state, handleSubmit] = useForm("movdrewz");

  // لو النموذج تم إرساله بنجاح، إعرض رسالة تأكيد
  if (state.succeeded) {
    return (
      <Box  sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h5" color="success.main">
          Your message has been sent successfully 🎉
        </Typography>
      </Box>
    );
  }

  return (
    <Box id="contact" component="section" className="top-section">
      
      <Box sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}>
        <Mail className="iconemail" sx={{ fontSize: "40px", color: "orange" }} />
        <Typography sx={{ ml: "10px" }} className="title" variant="h4">
          Contact Us
        </Typography>
      </Box>

      <Typography className="subtitle" variant="body1">
        Contact us for more information and get notified when I published
        something new.
      </Typography>

      <Box className="contactus" component="section">

        {/*\Left Section Form*/}
        <form onSubmit={handleSubmit} className="left-section">

          {/* إدخال البريد الإلكتروني */}
          <div className="email">
            <label className="subtitle">E-mail Address:</label>
            <input
              required
              className="input-email"
              name="email"
              type="email"
              placeholder="E-mail Address"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="message-area">
            <label className="title">Your Message:</label>
            <textarea
              name="message"
              required
              className="input-area"
              placeholder="Message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/* زر الإرسال مع حالة التحميل */}
          <Button
            disabled={state.submitting}
            className="btn-submit"
            type="submit"
            size="large"
            sx={{
              mt: "30px",
              textTransform: "capitalize",
              border: "1px solid orange",
              px: "40px",
              width: "11rem",
              transition: "all 0.3s ease",
            }}
            variant="outlined"
          >
            {state.submitting ? "Submitting..." : "Submit"}
          </Button>
        </form>

        {/* Right Section Animation*/}
        <Box className="right-section" component="div">
          <Lottie
            style={{ height: "100%", maxWidth: 400 }}
            animationData={loadinganimation}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
