import ContactForm from "./contact/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="contact min-h-screen bg-globalColor5">
      <div className="title bg-globalColor7 h-80">
        <div className="container section h-full">
          <div className="main-heading w-fit h-full flex flex-col justify-center items-center gap-6 mx-auto text-center">
            <h2 className="text-4xl text-white font-semibold">
              Don&apos;t Know What To Start With?
            </h2>
            <p className="text-md font-light text-globalColor8">
              Get A Solutions For All Construction Services
            </p>
          </div>
        </div>
      </div>
      <div className="container section flex sm:flex-row sm:text-start text-center flex-col sm:gap-3 justify-between">
        <div className="sm:basis-1/2 basis-full">
          <div className="heading">
            <p className="text-globalColor0 text-lg">Offices</p>
            <h1 className="text-globalColor2 w-fit sm:mx-0 mx-auto text-4xl font-semibold">
              Our Office
              <div className="w-full my-6 h-[1px] bg-black"></div>
            </h1>
          </div>
          <div className="time-table flex flex-col gap-4 text-start text-wrap sm:max-w-full max-w-96 sm:mx-0 mx-auto ">
            <p>
              AlMadinah AlMunawarah Road - AL Ruwais District - Aletqan Square
              Floor10 - Office1001
            </p>
            <p>Jeddah - Kingdom of Saudi Arabia</p>
            <p>Office tel .:+966 12 6930030</p>
          </div>
        </div>
        <div className="sm:basis-1/2 basis-full bg-globalColor5 lg:border border-opacity-10 focus-within:border-opacity-50 border-globalColor2 lg:-mt-16 my-8 min-h-full p-16">
          <div className="main-heading">
            <p className="text-globalColor0 text-lg">Free Consultaion</p>
            <h1 className="text-globalColor2 w-fit sm:mx-0 mx-auto text-4xl font-semibold">
              Get A Free Quote
              <div className="w-full my-6 h-[1px] bg-black"></div>
            </h1>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
